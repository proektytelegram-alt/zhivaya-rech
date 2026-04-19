import { Container } from "../ui/Container";
import { Briefcase, Users, Lightbulb, Sprout } from "lucide-react";

const segments = [
  {
    icon: Briefcase,
    title: "Предпринимателю",
    desc: "Презентовать продукт инвесторам, клиентам и партнёрам — так, чтобы слышали и покупали.",
  },
  {
    icon: Users,
    title: "Руководителю",
    desc: "Доносить решения команде, убеждать совет директоров, вести переговоры без «воды».",
  },
  {
    icon: Lightbulb,
    title: "Эксперту",
    desc: "Объяснять сложное простым языком, вести подкасты, выступать на конференциях.",
  },
  {
    icon: Sprout,
    title: "Тому, кто начинает",
    desc: "Перестать бояться, собирать мысль на ходу, звучать уверенно в любом разговоре.",
  },
];

export function WhoItsFor() {
  return (
    <section className="py-24 bg-card">
      <Container>
        <div className="max-w-2xl mb-16">
          <div className="text-sm uppercase tracking-widest text-primary mb-4">
            Для кого
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
            Кто обычно приходит в «Живую речь»
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((s) => (
            <div
              key={s.title}
              className="group p-8 rounded-3xl border border-border/60 hover:border-primary/40 hover:-translate-y-1 transition-all bg-background"
            >
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition">
                <s.icon className="h-6 w-6 text-primary group-hover:text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {s.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
