import Image from "next/image";
import { Container } from "../ui/Container";

export function Denis() {
  return (
    <section id="denis" className="py-24 bg-card">
      <Container>
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-border/60 max-w-md mx-auto lg:mx-0 w-full shadow-xl">
            <Image
              src="/img/denis-portrait.jpg"
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
                Основатель школы «Живая речь», преподаватель ораторского
                мастерства, ведущий клуба импровизации.
              </p>
              <p>
                Работает с предпринимателями, руководителями, экспертами — и
                с теми, кто раньше боялся открыть рот перед группой. Верит,
                что говорить свободно — навык, доступный каждому.
              </p>
              <p>
                Его подход — не теория, а практика, после которой человек
                чувствует результат уже на первом занятии. Учит не «красивым
                словам», а тому, как мыслить вслух так, чтобы тебя слушали.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <Stat number="100%" label="практики на занятиях" />
              <Stat number="до 30" label="человек в группе" />
              <Stat number="1 мес" label="до свободной речи" />
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
