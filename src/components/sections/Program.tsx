import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { ArrowRight, Check } from "lucide-react";

const lessons = [
  {
    week: "Неделя 1",
    title: "Состояние и контакт",
    desc: "Учимся выходить к людям без зажима. Осанка, дыхание, взгляд. Первые выступления в группе.",
  },
  {
    week: "Неделя 2",
    title: "Структура речи на ходу",
    desc: "Как собрать мысль за 5 секунд. Простые формулы, которые работают без подготовки.",
  },
  {
    week: "Неделя 3",
    title: "Голос и подача",
    desc: "Темп, паузы, громкость, интонация. Учим голос быть инструментом, а не шумом.",
  },
  {
    week: "Неделя 4",
    title: "Импровизация",
    desc: "Говорим на любую тему без заучивания. Клуб импровизатора внутри курса.",
  },
  {
    week: "Неделя 5",
    title: "Работа с аудиторией",
    desc: "Как удерживать внимание, как отвечать на вопросы, как не теряться от критики.",
  },
  {
    week: "Неделя 6",
    title: "Финальное выступление",
    desc: "Готовим своё выступление на 10 минут. Выступаем перед группой. Разбор и обратная связь.",
  },
];

const outcomes = [
  "Говоришь уверенно без текста и заучивания",
  "Собираешь мысль в моменте — ясно и по делу",
  "Управляешь голосом, паузами и подачей",
  "Не теряешься от неожиданных вопросов",
  "Знаешь, как удержать внимание зала",
  "Перестаёшь бояться публичных выступлений",
];

export function Program() {
  return (
    <section id="program" className="py-24">
      <Container>
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-24">
            <div className="text-sm uppercase tracking-widest text-primary mb-4">
              Программа · Ступень 1
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6">
              База уверенной речи за 6 недель
            </h2>
            <p className="text-foreground/75 text-lg leading-relaxed mb-8">
              12 занятий по 3 часа, два раза в неделю. Никакой теории без
              практики: каждое занятие — живые упражнения, выступления и
              обратная связь.
            </p>

            <div className="rounded-3xl bg-foreground text-background p-8 mb-6">
              <div className="text-sm uppercase tracking-widest text-background/60 mb-2">
                Стоимость первого потока
              </div>
              <div className="font-display text-5xl font-semibold mb-1">
                15 000 ₽
              </div>
              <div className="text-background/60 text-sm">
                за 6 недель, 12 занятий
              </div>
              <div className="mt-6 pt-6 border-t border-background/10 space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-background/60">Ближайший старт</span>
                  <span className="font-medium">уточним с тобой</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-background/60">Формат</span>
                  <span className="font-medium">офлайн, центр СПб</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-background/60">Группа</span>
                  <span className="font-medium">до 12 человек</span>
                </div>
              </div>
            </div>

            <a href="#contact">
              <Button size="lg" className="w-full">
                Записаться на курс
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
          </div>

          <div>
            <div className="space-y-4 mb-12">
              {lessons.map((l, i) => (
                <div
                  key={l.week}
                  className="group relative pl-10 pb-6 border-l-2 border-border last:border-transparent"
                >
                  <div className="absolute -left-[11px] top-0 h-5 w-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-muted mb-1">
                    {l.week}
                  </div>
                  <h4 className="font-display text-xl font-semibold mb-2">
                    {l.title}
                  </h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {l.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-border/60 p-8 bg-card">
              <h4 className="font-display text-2xl font-semibold mb-6">
                Что ты получишь на выходе
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {outcomes.map((o) => (
                  <div key={o} className="flex gap-2 text-sm">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{o}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
