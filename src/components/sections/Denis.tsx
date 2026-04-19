import Image from "next/image";
import { Container } from "../ui/Container";

export function Denis() {
  return (
    <section id="denis" className="py-24 bg-card">
      <Container>
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-border/60 max-w-md mx-auto lg:mx-0 w-full shadow-xl">
            <Image
              src="/img/denis.jpg"
              alt="Денис — основатель школы «Живая речь»"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div>
            <div className="text-sm uppercase tracking-widest text-primary mb-4">
              Преподаватель и основатель
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Денис
            </h2>
            <div className="space-y-5 text-lg text-foreground/80 leading-relaxed">
              <p>
                Преподаватель ораторского мастерства, ведущий клуба
                импровизации, основатель школы «Живая речь».
              </p>
              <p>
                Верит, что говорить свободно — навык, доступный каждому. Не
                учит «красивым словам» — учит мыслить вслух так, чтобы тебя
                слушали.
              </p>
              <p>
                На занятиях — максимум практики. Без лекций о том, как
                «правильно», но с честной обратной связью о том, что работает
                именно у тебя.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <Stat number="500+" label="учеников прошли курс" />
              <Stat number="6 лет" label="преподавания" />
              <Stat number="100%" label="практики на занятиях" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl md:text-4xl font-semibold text-primary">
        {number}
      </div>
      <div className="text-sm text-muted mt-1">{label}</div>
    </div>
  );
}
