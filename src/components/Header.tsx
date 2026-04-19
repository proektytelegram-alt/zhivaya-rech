import Link from "next/link";
import { Container } from "./ui/Container";

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 py-6">
      <Container>
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background font-display text-xl">
              Ж
            </span>
            <div className="leading-tight">
              <div className="font-display text-lg font-semibold">
                Живая речь
              </div>
              <div className="text-xs text-muted">
                школа ораторского мастерства и импровизации
              </div>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#program" className="hover:text-primary transition">
              Программа
            </a>
            <a href="#club" className="hover:text-primary transition">
              Клуб
            </a>
            <a href="#denis" className="hover:text-primary transition">
              Преподаватель
            </a>
            <a href="#faq" className="hover:text-primary transition">
              Вопросы
            </a>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-full border border-foreground/15 px-4 py-2 text-sm font-medium hover:bg-foreground/5 transition"
          >
            Записаться
          </a>
        </nav>
      </Container>
    </header>
  );
}
