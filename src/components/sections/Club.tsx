import Image from "next/image";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Calendar, MapPin, Users2 } from "lucide-react";

export function Club() {
  return (
    <section id="club" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm uppercase tracking-widest text-primary mb-4">
              Клуб импровизации
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Не готов на курс?{" "}
              <span className="text-primary">Приходи в клуб.</span>
            </h2>
            <p className="text-lg text-foreground/75 leading-relaxed mb-8">
              Раз в неделю собираемся, чтобы говорить — свободно, без
              оценок. Упражнения в парах, в кругу, на сцене. Смех, ошибки,
              открытия.
              <br />
              <br />
              Это лучший способ попробовать наш формат и снять страх говорить
              на людях — ещё до курса.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <InfoCard icon={Calendar} label="Когда" value="1 раз в неделю" />
              <InfoCard
                icon={Users2}
                label="Группа"
                value="8–15 человек"
              />
              <InfoCard icon={MapPin} label="Место" value="Центр СПб" />
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <a href="#contact">
                <Button size="lg">Записаться на ближайшую встречу</Button>
              </a>
              <div>
                <div className="text-muted text-xs">Разовое посещение</div>
                <div className="font-display text-2xl font-semibold">
                  500 ₽
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-border/60 shadow-xl">
            <Image
              src="/img/club.png"
              alt="Клуб импровизации в действии"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
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
