import { NextRequest, NextResponse } from "next/server";
import { PRODUCTS, type ProductId } from "@/lib/products";
import { buildProdamusPaymentUrl } from "@/lib/prodamus";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const productId: ProductId = body.productId;
    const email: string | undefined = body.email;
    const phone: string | undefined = body.phone;
    const name: string | undefined = body.name;

    const product = PRODUCTS[productId];
    if (!product) {
      return NextResponse.json(
        { error: "Unknown productId" },
        { status: 400 }
      );
    }

    const orderId = `${product.sku}-${Date.now()}-${Math.random()
      .toString(36)
      .slice(2, 8)}`;

    const paymentUrl = buildProdamusPaymentUrl({
      orderId,
      productName: product.name,
      productSku: product.sku,
      priceRub: product.priceRub,
      customerEmail: email,
      customerPhone: phone,
      customerName: name,
    });

    return NextResponse.json({ paymentUrl, orderId });
  } catch (e) {
    console.error("Pay error", e);
    return NextResponse.json(
      { error: "Internal error" },
      { status: 500 }
    );
  }
}
