import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Спасибо! — Живая речь",
};

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center py-24">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex h-20 w-20 rounded-full bg-primary/10 items-center justify-center mb-6">
            <CheckCircle2 className="h-10 w-10 text-primary" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4 leading-tight">
            Спасибо за оплату!
          </h1>
          <p className="text-lg text-foreground/75 leading-relaxed mb-8">
            Платёж получен. В течение дня Денис напишет тебе в Telegram:
            пришлёт детали, адрес зала и всё, что нужно перед стартом.
          </p>
          <p className="text-sm text-muted mb-8">
            Если ответа нет в течение 24 часов — напиши нам в Telegram
            <br />
            <a
              href="https://t.me/zhivayarech"
              className="text-primary hover:underline font-medium"
            >
              @zhivayarech
            </a>
          </p>
          <Link href="/">
            <Button size="lg">На главную</Button>
          </Link>
        </div>
      </Container>
    </main>
  );
}
