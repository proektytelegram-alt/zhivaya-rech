"use client";

import { motion } from "framer-motion";
import { ARCHETYPES, type ArchetypeId } from "./questions";
import { Button } from "../ui/Button";
import { ArrowRight, CheckCircle2, Circle } from "lucide-react";

export function QuizResult({
  archetype,
  onClose,
}: {
  archetype: ArchetypeId;
  answers: Record<string, string | string[] | number>;
  onClose: () => void;
}) {
  const a = ARCHETYPES[archetype];

  // TODO: заменить на t.me/zhivayarech_bot когда бот будет создан
  const tgLink = `https://t.me/zhivayarech`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="text-center mb-8">
        <div className="text-sm uppercase tracking-widest text-primary mb-4">
          Твой речевой портрет
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="text-7xl mb-4"
        >
          {a.emoji}
        </motion.div>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-3">
          {a.title}
        </h2>
        <p className="text-muted text-lg italic">{a.tagline}</p>
      </div>

      <p className="text-foreground/80 leading-relaxed mb-8 text-center">
        {a.description}
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="rounded-2xl bg-accent/10 p-6">
          <h4 className="font-display text-lg font-semibold mb-3">
            Твои сильные стороны
          </h4>
          <ul className="space-y-2">
            {a.strengths.map((s) => (
              <li key={s} className="flex gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-foreground/5 p-6">
          <h4 className="font-display text-lg font-semibold mb-3">
            Зоны для прокачки
          </h4>
          <ul className="space-y-2">
            {a.weaknesses.map((w) => (
              <li key={w} className="flex gap-2 text-sm">
                <Circle className="h-5 w-5 text-muted flex-shrink-0 mt-0.5" />
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-background p-6 mb-8">
        <h4 className="font-display text-lg font-semibold mb-4">
          План твоей прокачки
        </h4>
        <ol className="space-y-3">
          {a.plan.map((step, i) => (
            <li key={step} className="flex gap-3">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-semibold">
                {i + 1}
              </span>
              <span className="pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="rounded-3xl bg-gradient-to-br from-primary to-accent p-8 text-white text-center">
        <h3 className="font-display text-2xl font-semibold mb-2">
          Хочешь полный разбор от Дениса?
        </h3>
        <p className="mb-6 text-white/90">
          Пришлём в Telegram: подробный разбор твоего типа, подборку упражнений и
          персональную рекомендацию по курсу.
        </p>
        <a
          href={tgLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-8 py-4 font-semibold hover:scale-105 transition"
        >
          Получить в Telegram
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={onClose}
          className="text-sm text-muted hover:text-foreground"
        >
          Закрыть и посмотреть программу школы
        </button>
      </div>
    </motion.div>
  );
}
