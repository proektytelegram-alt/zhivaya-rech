import { Container } from "../ui/Container";
import { PayButton } from "../PayButton";
import { ArrowRight, Check, Gift, Sparkles, CreditCard } from "lucide-react";

const lessons = [
  {
    week: "Неделя 1",
    title: "Состояние и контакт",
    desc: "Учимся выходить к людям и не зажиматься в первые секунды. Осанка, дыхание, взгляд. Первые живые выступления в группе.",
  },
  {
    week: "Неделя 2",
    title: "Мысль и голос",
    desc: "Как собрать мысль мгновенно — даже если спросили неожиданно. Голос, темп, паузы, интонация. Простые формулы, которые работают без подготовки.",
  },
  {
    week: "Неделя 3",
    title: "Импровизация и работа с аудиторией",
    desc: "Говорим на любую тему без подготовки. Держим внимание зала, отвечаем на неудобные вопросы без оправданий и воды.",
  },
  {
    week: "Неделя 4",
    title: "Финальное выступление и разбор",
    desc: "Готовишь своё выступление на 10 минут. Выступаешь перед группой, получаешь разбор — и чувствуешь, насколько вырос.",
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
            За 1 месяц ты проходишь путь от страха публичных ситуаций до
            свободной речи — через 8 занятий по 3 часа, два раза в неделю.
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
                    Ступень 1. База — 1 месяц, 8 занятий
                  </div>
                </div>
                <div className="text-right text-sm">
                  <div className="text-background/60">Старт курса</div>
                  <div className="font-semibold text-base">1 мая</div>
                  <div className="text-background/60 mt-2">Осталось</div>
                  <div className="font-semibold text-base">7 мест</div>
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
                    2 500 ₽/мес
                  </span>
                  <span className="text-xs bg-accent text-foreground font-semibold px-2 py-1 rounded-full">
                    −50%
                  </span>
                </div>
                <div className="font-display text-5xl md:text-6xl font-semibold mb-2 leading-none">
                  1 250 <span className="text-3xl md:text-4xl text-background/70">₽/мес</span>
                </div>
                <div className="text-background/60 text-sm mb-4">
                  в рассрочку на 12 месяцев · без процентов и переплат
                </div>
                <div className="pt-4 border-t border-background/10 text-sm space-y-1">
                  <div className="flex justify-between text-background/80">
                    <span className="font-medium">Или полная оплата</span>
                    <span>
                      <span className="text-background/40 line-through mr-2">
                        30 000 ₽
                      </span>
                      <span className="font-semibold">15 000 ₽</span>
                    </span>
                  </div>
                  <div className="text-background/50 text-xs">
                    за 1 месяц · 8 занятий по 3 часа
                  </div>
                </div>
              </div>

              {/* Бонус */}
              <div className="rounded-2xl bg-primary/15 border border-primary/30 p-5">
                <div className="flex items-start gap-3">
                  <Gift className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold">
                        Бонус при оплате сразу
                      </span>
                      <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full font-medium">
                        выгода 4 000 ₽
                      </span>
                    </div>
                    <div className="text-sm text-background/75">
                      Месяц Клуба импровизации (4 встречи по вторникам) в
                      подарок параллельно с курсом — чтобы быстрее закрепить
                      навык.
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
                  "8 живых занятий по 3 часа — 2 раза в неделю, месяц",
                  "Группа до 30 человек — живая энергия и разнообразие",
                  "Обратная связь от Дениса после каждого выступления",
                  "Рабочие материалы и упражнения для домашней практики",
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
                <PayButton productId="course-step1" className="w-full">
                  Оплатить сразу · 15 000 ₽ + клуб в подарок
                  <CreditCard className="h-5 w-5" />
                </PayButton>
                <a href="#contact" className="block">
                  <button className="w-full h-12 rounded-full border border-background/20 text-background hover:bg-background/5 transition text-sm font-medium flex items-center justify-center gap-2">
                    или записаться на консультацию
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </a>
                <p className="text-xs text-background/50 text-center mt-3">
                  Возврат 100% стоимости до 3-го занятия — если формат не
                  подошёл
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
