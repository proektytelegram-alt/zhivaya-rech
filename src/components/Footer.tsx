import { Container } from "./ui/Container";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/50 bg-foreground text-background">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display text-xl">
                Ж
              </span>
              <div className="font-display text-xl">Живая речь</div>
            </div>
            <p className="text-sm text-background/60 max-w-xs">
              Офлайн-школа ораторского мастерства в Санкт-Петербурге.
              Учим через живую практику, а не по учебникам.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Telegram: @zhivayarech</li>
              <li>Санкт-Петербург</li>
              <li>info@zhivayarech.ru</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Программы</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Ступень 1. База</li>
              <li>Клуб импровизации</li>
              <li>Корпоративные занятия</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-background/10 text-xs text-background/40 flex justify-between flex-wrap gap-4">
          <div>© {new Date().getFullYear()} Школа «Живая речь»</div>
          <div>Все права защищены</div>
        </div>
      </Container>
    </footer>
  );
}
