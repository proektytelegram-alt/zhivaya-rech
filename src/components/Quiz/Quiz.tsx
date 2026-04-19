"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { QUESTIONS, computeArchetype, type Question } from "./questions";
import { QuizResult } from "./QuizResult";
import { Button } from "../ui/Button";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Answers = Record<string, string | string[] | number>;

export function Quiz({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [finished, setFinished] = useState(false);

  const isLast = step === QUESTIONS.length - 1;
  const q = QUESTIONS[step];
  const currentAnswer = answers[q.id];

  const canNext = (() => {
    if (q.type === "slider") return typeof currentAnswer === "number";
    if (q.type === "multi")
      return Array.isArray(currentAnswer) && currentAnswer.length > 0;
    return typeof currentAnswer === "string" && currentAnswer.length > 0;
  })();

  const handleNext = () => {
    if (isLast) {
      setFinished(true);
    } else {
      setStep(step + 1);
    }
  };

  if (finished) {
    const archetype = computeArchetype(answers);
    return (
      <QuizOverlay onClose={onClose}>
        <QuizResult archetype={archetype} answers={answers} onClose={onClose} />
      </QuizOverlay>
    );
  }

  return (
    <QuizOverlay onClose={onClose}>
      <div className="min-h-[560px] flex flex-col">
        <ProgressBar step={step} total={QUESTIONS.length} />

        <div className="flex-1 flex flex-col justify-center py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={q.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-sm text-muted mb-3">
                Вопрос {step + 1} из {QUESTIONS.length}
              </div>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-3">
                {q.question}
              </h3>
              {q.subtitle && (
                <p className="text-muted mb-8">{q.subtitle}</p>
              )}

              <QuestionBody
                question={q}
                answer={currentAnswer}
                onAnswer={(a) => setAnswers({ ...answers, [q.id]: a })}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-border/40">
          <button
            disabled={step === 0}
            onClick={() => setStep(step - 1)}
            className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition disabled:opacity-30"
          >
            <ArrowLeft className="h-4 w-4" />
            Назад
          </button>
          <Button disabled={!canNext} onClick={handleNext}>
            {isLast ? "Показать результат" : "Дальше"}
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </QuizOverlay>
  );
}

function QuizOverlay({
  onClose,
  children,
}: {
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-foreground/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="relative w-full max-w-2xl bg-card rounded-3xl shadow-2xl p-6 sm:p-10 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 h-10 w-10 rounded-full hover:bg-foreground/5 flex items-center justify-center transition"
          aria-label="Закрыть"
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
}

function ProgressBar({ step, total }: { step: number; total: number }) {
  const percent = ((step + 1) / total) * 100;
  return (
    <div className="h-1.5 w-full bg-border/50 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-primary rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${percent}%` }}
        transition={{ duration: 0.4 }}
      />
    </div>
  );
}

function QuestionBody({
  question,
  answer,
  onAnswer,
}: {
  question: Question;
  answer: string | string[] | number | undefined;
  onAnswer: (a: string | string[] | number) => void;
}) {
  if (question.type === "slider") {
    const val = (answer as number) ?? 5;
    return (
      <div className="space-y-6">
        <div className="text-center">
          <div className="font-display text-6xl font-semibold text-primary">
            {val}
          </div>
          <div className="text-sm text-muted mt-1">из 10</div>
        </div>
        <input
          type="range"
          min={1}
          max={10}
          value={val}
          onChange={(e) => onAnswer(parseInt(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer bg-border [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
          style={{
            background: `linear-gradient(to right, var(--primary) 0%, var(--primary) ${
              ((val - 1) / 9) * 100
            }%, var(--border) ${((val - 1) / 9) * 100}%, var(--border) 100%)`,
          }}
        />
        <div className="flex justify-between text-xs text-muted">
          <span>Всё плохо</span>
          <span>Я уверен в себе</span>
        </div>
      </div>
    );
  }

  if (question.type === "multi") {
    const selected = (answer as string[]) ?? [];
    return (
      <div className="grid sm:grid-cols-2 gap-3">
        {question.options?.map((opt) => {
          const isSelected = selected.includes(opt.id);
          return (
            <button
              key={opt.id}
              onClick={() => {
                onAnswer(
                  isSelected
                    ? selected.filter((s) => s !== opt.id)
                    : [...selected, opt.id]
                );
              }}
              className={cn(
                "flex items-center gap-3 p-4 rounded-2xl border-2 text-left transition-all",
                isSelected
                  ? "border-primary bg-primary/5"
                  : "border-border/60 hover:border-foreground/20"
              )}
            >
              <span className="text-2xl">{opt.emoji}</span>
              <span className="font-medium">{opt.label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  // single
  return (
    <div className="grid gap-3">
      {question.options?.map((opt) => {
        const isSelected = answer === opt.id;
        return (
          <button
            key={opt.id}
            onClick={() => onAnswer(opt.id)}
            className={cn(
              "flex items-center gap-4 p-5 rounded-2xl border-2 text-left transition-all",
              isSelected
                ? "border-primary bg-primary/5"
                : "border-border/60 hover:border-foreground/20"
            )}
          >
            {opt.emoji && <span className="text-2xl">{opt.emoji}</span>}
            <span className="font-medium text-lg">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
