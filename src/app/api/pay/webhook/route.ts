import { NextRequest, NextResponse } from "next/server";
import { verifyProdamusSignature } from "@/lib/prodamus";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const secret = process.env.PRODAMUS_SECRET_KEY;
  if (!secret) {
    console.error("PRODAMUS_SECRET_KEY is not set");
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  // Prodamus присылает form-urlencoded по умолчанию,
  // но может и JSON — обрабатываем оба
  const contentType = req.headers.get("content-type") || "";
  let data: Record<string, unknown>;
  const signature = req.headers.get("sign") || "";

  if (contentType.includes("application/json")) {
    data = await req.json();
  } else {
    const form = await req.formData();
    data = {};
    for (const [k, v] of form.entries()) {
      data[k] = v;
    }
  }

  const sigFromBody = (data.signature as string) || signature;

  if (!sigFromBody) {
    return NextResponse.json(
      { error: "Missing signature" },
      { status: 400 }
    );
  }

  const isValid = verifyProdamusSignature(data, sigFromBody, secret);
  if (!isValid) {
    console.error("Invalid Prodamus signature for order", data.order_id);
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 403 }
    );
  }

  const orderId = data.order_id as string;
  const status = data.payment_status as string;
  const sum = data.sum as string;
  const productName = (data["products[0][name]"] as string) || "";

  console.log("💰 Prodamus webhook OK", {
    orderId,
    status,
    sum,
    productName,
  });

  // TODO: переслать в TG-бот Денису уведомление о новой оплате
  // await notifyTelegram({ orderId, status, sum, productName });

  return NextResponse.json({ ok: true });
}
