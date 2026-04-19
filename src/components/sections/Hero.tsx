"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero({ onStartQuiz }: { onStartQuiz: () => void }) {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 grain">
      {/* мягкие пятна-градиенты в фоне */}
      <div className="absolute top-20 -right-40 h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl pointer-events-none" />
      <div className="absolute top-60 -left-40 h-[400px] w-[400px] rounded-full bg-primary/15 blur-3xl pointer-events-none" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-card/60 backdrop-blur px-4 py-2 text-sm mb-8">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Офлайн-школа в Санкт-Петербурге</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05] font-semibold tracking-tight">
            Говори{" "}
            <span className="relative inline-block">
              <span className="relative z-10">свободно</span>
              <span className="absolute bottom-1 left-0 right-0 h-4 bg-accent/50 -z-0" />
            </span>
            .
            <br />
            Без заучивания.
            <br />
            <span className="text-primary">Без страха сцены.</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl leading-relaxed text-foreground/75 max-w-2xl">
            Учим через живую практику — не теорию. Шесть недель — и ты
            начинаешь говорить так, как хочешь: уверенно, по делу, с контактом
            с залом.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <Button size="lg" onClick={onStartQuiz}>
              Пройти тест — узнать свой речевой портрет
              <ArrowRight className="h-5 w-5" />
            </Button>
            <a
              href="#program"
              className="text-sm font-medium underline-offset-4 hover:underline"
            >
              или посмотреть программу →
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 text-sm">
            <Metric label="Занятие" value="3 часа живой практики" />
            <Metric label="Длительность" value="6 недель" />
            <Metric label="Группа" value="до 12 человек" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-muted uppercase tracking-wider">{label}</div>
      <div className="font-display text-lg font-medium mt-1">{value}</div>
    </div>
  );
}
