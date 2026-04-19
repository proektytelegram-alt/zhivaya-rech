import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { XCircle } from "lucide-react";

export const metadata = {
  title: "Платёж не прошёл — Живая речь",
};

export default function FailPage() {
  return (
    <main className="min-h-screen flex items-center py-24">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex h-20 w-20 rounded-full bg-foreground/5 items-center justify-center mb-6">
            <XCircle className="h-10 w-10 text-muted" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4 leading-tight">
            Платёж не прошёл
          </h1>
          <p className="text-lg text-foreground/75 leading-relaxed mb-8">
            Ничего страшного. Попробуй оплатить ещё раз — или напиши нам в
            Telegram, мы поможем разобраться.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/#program">
              <Button size="lg">Попробовать снова</Button>
            </Link>
            <a href="https://t.me/zhivayarech" target="_blank" rel="noreferrer">
              <Button variant="outline" size="lg">
                Написать в Telegram
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}
