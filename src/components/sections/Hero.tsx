"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { ArrowRight } from "lucide-react";

export function Hero({ onStartQuiz }: { onStartQuiz: () => void }) {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 grain">
      <div className="absolute top-20 -right-40 h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl pointer-events-none" />
      <div className="absolute top-60 -left-40 h-[400px] w-[400px] rounded-full bg-primary/15 blur-3xl pointer-events-none" />

      <Container className="relative">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-semibold tracking-tight hyphens-none">
              Говори{" "}
              <span className="relative inline-block">
                <span className="relative z-10">свободно</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 md:h-4 bg-accent/50 -z-0" />
              </span>
              .
              <br />
              <span className="text-primary">Так, чтобы&nbsp;тебя&nbsp;слушали.</span>
            </h1>

            <p className="mt-6 text-base md:text-xl leading-relaxed text-foreground/75 max-w-xl">
              Речь, которая звучит уверенно даже без подготовки.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 sm:items-center">
              <Button
                size="lg"
                onClick={onStartQuiz}
                className="w-full sm:w-auto text-sm sm:text-base px-5 sm:px-8 whitespace-normal leading-tight"
              >
                <span className="text-left sm:text-center">
                  Пройти тест — узнать речевой портрет
                </span>
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
              </Button>
              <a
                href="#program"
                className="text-sm font-medium underline-offset-4 hover:underline"
              >
                или сразу к программе →
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-8 text-xs sm:text-sm">
              <Metric label="Длительность" value="1 месяц" />
              <Metric label="Формат" value="офлайн, СПб" />
              <Metric label="Старт" value="1 мая" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative aspect-[4/5] lg:aspect-[5/6] rounded-[2.5rem] overflow-hidden shadow-2xl hidden md:block"
          >
            <Image
              src="/img/denis-hero.jpg"
              alt="Денис — основатель школы «Живая речь»"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[0.65rem] sm:text-xs text-muted uppercase tracking-wider">
        {label}
      </div>
      <div className="font-display text-sm sm:text-base md:text-lg font-medium mt-1 leading-tight">
        {value}
      </div>
    </div>
  );
}
