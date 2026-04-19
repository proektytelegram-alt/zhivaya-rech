import Image from "next/image";
import { Container } from "../ui/Container";
import { PayButton } from "../PayButton";
import {
  Calendar,
  MapPin,
  Users2,
  CreditCard,
  Mic,
  Zap,
  MessageCircle,
  Smile,
} from "lucide-react";

const vibes = [
  {
    icon: Mic,
    title: "Безопасная среда",
    desc: "Никакой критики и оценок. Только поддержка и честная обратная связь.",
  },
  {
    icon: Zap,
    title: "Живые упражнения",
    desc: "Импровизация в парах, мини-сценки, ассоциации, речь на случайную тему.",
  },
  {
    icon: MessageCircle,
    title: "Практика без подготовки",
    desc: "Тренируешься говорить в моменте — без заученных текстов и шпаргалок.",
  },
  {
    icon: Smile,
    title: "Лёгкая атмосфера",
    desc: "Смех, ошибки, открытия. Это про свободу, а не про экзамен.",
  },
];

export function Club() {
  return (
    <section id="club" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1 relative aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-border/60 shadow-xl">
            <Image
              src="/img/club.png"
              alt="Клуб импровизации в действии"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="order-1 lg:order-2">
            <div className="text-sm uppercase tracking-widest text-primary mb-4">
              Клуб импровизации
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Место, где{" "}
              <span className="text-primary">речь становится живой</span>
            </h2>
            <p className="text-lg text-foreground/75 leading-relaxed mb-8">
              Раз в неделю мы собираемся, чтобы говорить — свободно, без
              оценок. Здесь люди знакомятся, смеются, выступают и перестают
              бояться того, что о них подумают.
              <br />
              <br />
              Это лучший способ попробовать наш подход вживую и снять страх
              говорить на людях — ещё до того, как решишь идти на курс.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <InfoCard
                icon={Calendar}
                label="Когда"
                value="Каждый вторник 19:00"
              />
              <InfoCard
                icon={Users2}
                label="Группа"
                value="8–15 человек"
              />
              <InfoCard icon={MapPin} label="Место" value="Центр СПб" />
            </div>

            <div className="flex flex-wrap gap-6 items-center">
              <PayButton productId="club-single">
                Оплатить встречу
                <CreditCard className="h-5 w-5" />
              </PayButton>
              <div>
                <div className="text-muted text-xs">Разовое посещение</div>
                <div className="font-display text-2xl font-semibold">
                  1 000 ₽
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Как проходит вечер */}
        <div className="rounded-[2rem] bg-card border border-border/60 p-8 md:p-12">
          <div className="max-w-2xl mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight mb-4">
              Как проходит вечер в клубе
            </h3>
            <p className="text-foreground/75 leading-relaxed">
              2 часа живых упражнений в лёгкой атмосфере. Приходить можно без
              опыта и без подготовки — главное желание попробовать.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-10">
            <Phase
              step="1"
              time="0–15 мин"
              title="Разогрев"
              desc="Дыхание, голос, круг знакомств. Настройка на безопасную атмосферу."
            />
            <Phase
              step="2"
              time="15–60 мин"
              title="Упражнения в парах"
              desc="Короткие импровизационные сценки, быстрые ассоциации, речь без плана."
            />
            <Phase
              step="3"
              time="60–100 мин"
              title="Выступления"
              desc="Каждый пробует сказать мини-речь на случайную тему. Обратная связь от Дениса."
            />
            <Phase
              step="4"
              time="100–120 мин"
              title="Финал и чай"
              desc="Разбор вечера, обсуждение, общение. Лёгкое завершение без напряжения."
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-border/50">
            {vibes.map((v) => (
              <div key={v.title}>
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <v.icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-display font-semibold mb-2 leading-tight">
                  {v.title}
                </h4>
                <p className="text-sm text-foreground/65 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Правила клуба */}
        <div className="mt-12 grid md:grid-cols-[1fr_1.5fr] gap-10 items-start">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight mb-4">
              Правила клуба
            </h3>
            <p className="text-foreground/70">
              Простые договорённости, которые делают атмосферу комфортной для
              каждого.
            </p>
          </div>
          <div className="space-y-3">
            {[
              "Мы не критикуем — мы поддерживаем и даём честную обратную связь",
              "Можно не выступать, если пока не готов. Сиди, смотри, входи в ритм",
              "Ничего приносить не нужно. Только удобную обувь и настрой",
              "Ошибаться не стыдно — именно через ошибки и рождается свобода",
              "Всё, что происходит в клубе, остаётся в клубе — никакой записи и видео",
            ].map((rule) => (
              <div
                key={rule}
                className="flex gap-3 p-4 rounded-2xl bg-card border border-border/50"
              >
                <span className="text-primary text-xl leading-none">✦</span>
                <span className="text-foreground/85">{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-card border border-border/60 p-5">
      <Icon className="h-5 w-5 text-primary mb-2" />
      <div className="text-xs text-muted uppercase tracking-wider mb-1">
        {label}
      </div>
      <div className="font-medium">{value}</div>
    </div>
  );
}

function Phase({
  step,
  time,
  title,
  desc,
}: {
  step: string;
  time: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="relative">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-8 w-8 rounded-full bg-primary text-white font-display text-sm flex items-center justify-center">
          {step}
        </div>
        <div className="text-xs text-muted uppercase tracking-widest">
          {time}
        </div>
      </div>
      <h4 className="font-display font-semibold mb-2 leading-tight">{title}</h4>
      <p className="text-sm text-foreground/65 leading-relaxed">{desc}</p>
    </div>
  );
}
