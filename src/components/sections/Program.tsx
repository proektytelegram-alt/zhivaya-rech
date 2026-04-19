import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { ArrowRight, Check, Gift, Sparkles } from "lucide-react";

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
        <div className="max-w-3xl mb-16">
          <div className="text-sm uppercase tracking-widest text-primary mb-4">
            Программа · Ступень 1
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6">
            От зажатости и сумбура — к уверенной и живой речи
          </h2>
          <p className="text-foreground/75 text-lg leading-relaxed">
            За 6 недель ты проходишь путь от страха публичных ситуаций до
            свободной речи — через 12 занятий по 3 часа, два раза в неделю.
            Никакой теории без практики: живые упражнения, выступления,
            обратная связь.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Левая колонка — недели */}
          <div className="space-y-4">
            {lessons.map((l) => (
              <div
                key={l.week}
                className="relative pl-10 pb-6 border-l-2 border-border last:border-transparent"
              >
                <div className="absolute -left-[11px] top-0 h-5 w-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <div className="text-xs uppercase tracking-widest text-muted mb-1">
                  {l.week}
                </div>
                <h4 className="font-display text-lg font-semibold mb-2 leading-snug">
                  {l.title}
                </h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {l.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Правая колонка — результаты */}
          <div className="rounded-3xl border border-border/60 p-8 bg-card h-fit lg:sticky lg:top-24">
            <h4 className="font-display text-2xl font-semibold mb-6">
              Что ты получишь на выходе
            </h4>
            <div className="space-y-3">
              {outcomes.map((o) => (
                <div key={o} className="flex gap-3 text-sm">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{o}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing — большой блок */}
        <div className="rounded-[2rem] bg-foreground text-background overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Левая часть: цена */}
            <div className="p-8 lg:p-12">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                <div>
                  <h3 className="font-display text-3xl md:text-4xl font-semibold leading-tight mb-1">
                    Стоимость курса
                  </h3>
                  <div className="text-background/60 text-sm">
                    Ступень 1. База — 6 недель
                  </div>
                </div>
                <div className="text-right text-sm">
                  <div className="text-background/60">Старт курса</div>
                  <div className="font-semibold text-base">1 мая</div>
                  <div className="text-background/60 mt-2">Осталось</div>
                  <div className="font-semibold text-base">8 мест</div>
                </div>
              </div>

              {/* Акционный блок */}
              <div className="rounded-2xl bg-accent/15 border border-accent/30 p-5 mb-6">
                <div className="flex items-center gap-2 text-accent font-medium">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-sm">
                    Специальная цена первого потока — до 1 мая
                  </span>
                </div>
              </div>

              {/* Цена */}
              <div className="rounded-2xl bg-background/5 border border-background/10 p-6 mb-6">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-background/40 line-through text-xl">
                    30 000 ₽
                  </span>
                  <span className="text-xs bg-accent text-foreground font-semibold px-2 py-1 rounded-full">
                    −50%
                  </span>
                </div>
                <div className="font-display text-5xl md:text-6xl font-semibold mb-2">
                  15 000 ₽
                </div>
                <div className="text-background/60 text-sm mb-4">
                  за 6 недель · 12 занятий по 3 часа
                </div>
                <div className="pt-4 border-t border-background/10 text-sm">
                  <div className="font-medium mb-1">Или в рассрочку</div>
                  <div className="text-background/70">
                    от 2 500 ₽/мес на 6 месяцев — без процентов
                  </div>
                </div>
              </div>

              {/* Бонус */}
              <div className="rounded-2xl bg-primary/15 border border-primary/30 p-5">
                <div className="flex items-start gap-3">
                  <Gift className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">
                      Бонус при оплате сразу
                    </div>
                    <div className="text-sm text-background/75">
                      Месяц Клуба импровизации в подарок — еженедельная
                      практика, чтобы быстрее закрепить навык.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Правая часть: CTA + что входит */}
            <div className="p-8 lg:p-12 bg-background/[0.03] border-t lg:border-t-0 lg:border-l border-background/10">
              <h4 className="font-display text-xl font-semibold mb-6">
                Что входит в курс
              </h4>
              <div className="space-y-3 mb-8">
                {[
                  "12 живых занятий по 3 часа в группе до 12 человек",
                  "Обратная связь от Дениса после каждого выступления",
                  "Материалы и упражнения для самостоятельной работы",
                  "Запись всех занятий, если пропустил",
                  "Финальное выступление с разбором",
                  "Сертификат об окончании",
                ].map((i) => (
                  <div key={i} className="flex gap-3 text-sm">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-background/85">{i}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <a href="#contact" className="block">
                  <Button size="lg" className="w-full">
                    Записаться — свяжемся с вами
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 h-12 rounded-full border border-background/20 text-background hover:bg-background/5 transition text-sm font-medium"
                >
                  Оплатить сейчас со скидкой
                </a>
                <p className="text-xs text-background/50 text-center mt-3">
                  Возврат 100% до 3-го занятия, если формат не подошёл
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
