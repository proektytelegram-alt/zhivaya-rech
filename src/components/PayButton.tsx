"use client";

import { useState } from "react";
import { Button } from "./ui/Button";
import type { ProductId } from "@/lib/products";

export function PayButton({
  productId,
  children,
  variant = "primary",
  size = "lg",
  className,
}: {
  productId: ProductId;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "secondary" | "ghost";
  size?: "default" | "lg" | "sm";
  className?: string;
}) {
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });
      const data = await res.json();
      if (data.paymentUrl) {
        window.location.href = data.paymentUrl;
      } else {
        alert("Ошибка при создании платежа. Попробуй снова.");
        setLoading(false);
      }
    } catch (e) {
      console.error(e);
      alert("Ошибка сети. Попробуй снова.");
      setLoading(false);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? "Переходим к оплате..." : children}
    </Button>
  );
}
