import crypto from "node:crypto";

/**
 * Генерация подписи Prodamus по их официальному алгоритму:
 * 1. Рекурсивная сортировка всех ключей
 * 2. JSON.stringify с unescaped unicode (NO_ESCAPE) и unescaped slashes
 * 3. HMAC-SHA256
 */
export function signProdamus(
  data: Record<string, unknown>,
  secretKey: string
): string {
  const { signature: _omit, ...rest } = data;
  const sorted = deepSort(rest);
  const json = stringifyPhpStyle(sorted);
  return crypto
    .createHmac("sha256", secretKey)
    .update(json, "utf8")
    .digest("hex");
}

export function verifyProdamusSignature(
  data: Record<string, unknown>,
  signature: string,
  secretKey: string
): boolean {
  const expected = signProdamus(data, secretKey);
  // constant-time compare
  const a = Buffer.from(expected, "hex");
  const b = Buffer.from(signature, "hex");
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

function deepSort(v: unknown): unknown {
  if (Array.isArray(v)) return v.map(deepSort);
  if (v && typeof v === "object") {
    const out: Record<string, unknown> = {};
    for (const k of Object.keys(v as Record<string, unknown>).sort()) {
      out[k] = deepSort((v as Record<string, unknown>)[k]);
    }
    return out;
  }
  return v;
}

/**
 * Имитирует PHP json_encode(..., JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES):
 * - кириллица и спецсимволы остаются как есть
 * - слэши не экранируются
 * - числа и строки выводятся как у PHP
 */
function stringifyPhpStyle(v: unknown): string {
  if (v === null) return "null";
  if (typeof v === "boolean") return v ? "true" : "false";
  if (typeof v === "number") return String(v);
  if (typeof v === "string") return JSON.stringify(v).replace(/\\\//g, "/");
  if (Array.isArray(v)) {
    return "[" + v.map(stringifyPhpStyle).join(",") + "]";
  }
  if (typeof v === "object" && v !== null) {
    const entries = Object.entries(v as Record<string, unknown>).map(
      ([k, val]) =>
        JSON.stringify(k).replace(/\\\//g, "/") +
        ":" +
        stringifyPhpStyle(val)
    );
    return "{" + entries.join(",") + "}";
  }
  return "null";
}

/**
 * Собирает URL для редиректа на Prodamus-форму.
 */
export function buildProdamusPaymentUrl(params: {
  orderId: string;
  productName: string;
  productSku: string;
  priceRub: number;
  customerEmail?: string;
  customerPhone?: string;
  customerName?: string;
}): string {
  const formUrl = process.env.PRODAMUS_FORM_URL;
  const successUrl = process.env.PRODAMUS_SUCCESS_URL;
  const webhookUrl = process.env.PRODAMUS_WEBHOOK_URL;

  if (!formUrl) throw new Error("PRODAMUS_FORM_URL is not set");

  const query = new URLSearchParams();
  query.set("order_id", params.orderId);
  query.set("do", "pay");
  query.set("currency", "rub");
  query.set("sys", "zhivayarech");
  query.set("products[0][name]", params.productName);
  query.set("products[0][price]", params.priceRub.toFixed(2));
  query.set("products[0][quantity]", "1");
  query.set("products[0][sku]", params.productSku);
  query.set("products[0][tax]", "no_vat"); // патент = без НДС
  query.set("products[0][paymentMethod]", "full_prepayment");
  query.set("products[0][paymentObject]", "service");

  if (params.customerEmail) query.set("customer_email", params.customerEmail);
  if (params.customerPhone) query.set("customer_phone", params.customerPhone);
  if (params.customerName) query.set("customer_extra", params.customerName);
  if (successUrl) query.set("urlSuccess", successUrl);
  if (webhookUrl) query.set("urlNotification", webhookUrl);

  return `${formUrl}?${query.toString()}`;
}
