"use client";

import { Container } from "../ui/Container";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Что, если я очень стесняюсь выступать — подойдёт?",
    a: "Именно поэтому большинство учеников приходят к нам. Первые занятия построены так, что ты не окажешься сразу на сцене — мы строим уверенность постепенно, через упражнения в парах и малых группах. К концу курса страх уходит не потому, что ты его «преодолел», а потому, что научился им управлять.",
  },
  {
    q: "А если я пропущу занятие?",
    a: "У нас формат офлайн — никаких записей не будет. Если пропустишь — Денис после занятия коротко расскажет, что было, и пришлёт упражнение для самостоятельной отработки. Мы не рекомендуем пропускать больше 1–2 занятий: каждая встреча — продолжение предыдущей. Если знаешь заранее, что не сможешь вовремя — можем перенести твоё место на следующий поток.",
  },
  {
    q: "Где будут проходить занятия?",
    a: "В центре Санкт-Петербурга — точный адрес и карту пришлём за несколько дней до старта курса. Ориентируемся на площадки в 5–10 минутах от метро Сенная, Адмиралтейская или Невский проспект.",
  },
  {
    q: "Что нужно взять с собой?",
    a: "Ничего. Удобную обувь, блокнот по желанию и настрой на практику. Все материалы и упражнения — у нас.",
  },
  {
    q: "Нужна ли какая-то подготовка, опыт?",
    a: "Нет. Мы берём с нуля. Единственное требование — желание говорить лучше и готовность пробовать. Всё остальное — наша работа.",
  },
  {
    q: "Есть ли гарантия?",
    a: "Да. Если к 3-му занятию ты почувствуешь, что формат тебе не подходит — вернём 100% стоимости курса, без вопросов. Гарантий «ты станешь Стивом Джобсом за месяц» не даём — так не работает. Но честную практику и обратную связь на каждом занятии — гарантируем.",
  },
  {
    q: "Как проходят занятия?",
    a: "3 часа, два раза в неделю. Короткий блок теории (10–15 мин), всё остальное — упражнения, разборы, выступления. Никто не «читает лекции» — мы работаем.",
  },
  {
    q: "Можно ли онлайн?",
    a: "Пока только офлайн в Санкт-Петербурге — ораторика требует живого взаимодействия, камеры и реакции зала. Онлайн-формат планируем запустить позже — когда сделаем программу, которая реально работает без живого присутствия.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24">
      <Container>
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="text-sm uppercase tracking-widest text-primary mb-4">
              Вопросы
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
              Что спрашивают чаще всего
            </h2>
            <p className="text-muted mt-6">
              Не нашёл ответа? Напиши нам в Telegram — ответим за час.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-border/60 overflow-hidden bg-card"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full p-6 flex items-center justify-between gap-4 text-left hover:bg-foreground/[0.02] transition"
                  >
                    <span className="font-display text-lg font-semibold">
                      {item.q}
                    </span>
                    <span className="flex-shrink-0 h-8 w-8 rounded-full bg-foreground/5 flex items-center justify-center">
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-foreground/75 leading-relaxed">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
