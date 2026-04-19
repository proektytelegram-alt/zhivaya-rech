import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { ArrowRight, Check } from "lucide-react";

const lessons = [
  {
    week: "Неделя 1",
    title: "Как выйти к людям и не зажаться в первые 10 секунд",
    desc: "Работаем с состоянием, дыханием, осанкой и контактом. Первые выступления в безопасной среде.",
  },
  {
    week: "Неделя 2",
    title: "Как собрать мысль мгновенно — даже если спросили неожиданно",
    desc: "Простые формулы структуры, которые работают без подготовки и без заученного текста.",
  },
  {
    week: "Неделя 3",
    title: "Голос, после которого тебя хочется слушать",
    desc: "Темп, паузы, интонация, громкость. Голос как инструмент, а не фоновый шум.",
  },
  {
    week: "Неделя 4",
    title: "Импровизация без ступора и пустоты в голове",
    desc: "Говорим на любую тему без подготовки. Принципы, упражнения, прямой выход из ступора.",
  },
  {
    week: "Неделя 5",
    title: "Как держать внимание и отвечать на неудобные вопросы",
    desc: "Управление вниманием аудитории. Ответы на каверзные вопросы без оправданий и воды.",
  },
  {
    week: "Неделя 6",
    title: "Финальное выступление: почувствовать новую версию себя",
    desc: "Готовишь своё выступление на 10 минут. Выступаешь, получаешь разбор — и видишь, насколько вырос.",
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
              От зажатости и сумбура — к уверенной и живой речи
            </h2>
            <p className="text-foreground/75 text-lg leading-relaxed mb-8">
              За 6 недель ты проходишь путь от страха публичных ситуаций до
              свободной речи — через 12 занятий по 3 часа, два раза в неделю.
              Никакой теории без практики: живые упражнения, выступления,
              обратная связь.
            </p>

            <div className="rounded-3xl bg-foreground text-background p-8 mb-6">
              <div className="text-sm uppercase tracking-widest text-accent mb-2">
                Первый поток · Специальная цена
              </div>
              <div className="flex items-baseline gap-3 mb-1">
                <div className="font-display text-5xl font-semibold">
                  15 000 ₽
                </div>
              </div>
              <div className="text-background/60 text-sm">
                за 6 недель, 12 занятий. Дальше — дороже.
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
