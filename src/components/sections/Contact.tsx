"use client";

import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Как к тебе обращаться?"),
  phone: z.string().min(5, "Нужен телефон или Telegram"),
  interest: z.string().min(1, "Выбери, что интересно"),
  comment: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    // TODO: заменить на реальный POST на /api/lead + отправку в TG-бот
    console.log("Заявка:", data);
    await new Promise((r) => setTimeout(r, 600));
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-foreground text-background">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-sm uppercase tracking-widest text-accent mb-4">
              Записаться
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Оставь заявку — напишем в Telegram
            </h2>
            <p className="text-background/70 text-lg leading-relaxed mb-8">
              Денис сам свяжется с тобой, расскажет про ближайший поток,
              ответит на все вопросы. Без спама и обязательств.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center">
                  💬
                </div>
                <div>
                  <div className="text-sm text-background/60">Telegram</div>
                  <div className="font-medium">@zhivayarech</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center">
                  📍
                </div>
                <div>
                  <div className="text-sm text-background/60">Где занимаемся</div>
                  <div className="font-medium">Центр Санкт-Петербурга</div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-background text-foreground rounded-3xl p-8"
          >
            {sent ? (
              <div className="text-center py-12">
                <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="font-display text-2xl font-semibold mb-2">
                  Заявка отправлена!
                </h3>
                <p className="text-muted">Денис свяжется в течение дня.</p>
              </div>
            ) : (
              <>
                <div className="space-y-5">
                  <Field label="Как тебя зовут" error={errors.name?.message}>
                    <input
                      {...register("name")}
                      placeholder="Имя"
                      className="input"
                    />
                  </Field>
                  <Field
                    label="Телефон или Telegram"
                    error={errors.phone?.message}
                  >
                    <input
                      {...register("phone")}
                      placeholder="+7 ... или @username"
                      className="input"
                    />
                  </Field>
                  <Field label="Что интересно" error={errors.interest?.message}>
                    <select {...register("interest")} className="input">
                      <option value="">Выбери вариант</option>
                      <option value="course">Ступень 1 — Курс</option>
                      <option value="club">Клуб импровизации</option>
                      <option value="consult">
                        Индивидуальная консультация
                      </option>
                      <option value="corp">Корпоративный формат</option>
                    </select>
                  </Field>
                  <Field label="Комментарий (необязательно)">
                    <textarea
                      {...register("comment")}
                      rows={3}
                      placeholder="Короткое сообщение"
                      className="input resize-none"
                    />
                  </Field>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full mt-6"
                >
                  {isSubmitting ? "Отправляем..." : "Отправить заявку"}
                  <Send className="h-4 w-4" />
                </Button>
                <p className="text-xs text-muted mt-4 text-center">
                  Нажимая кнопку, ты соглашаешься на обработку персональных
                  данных
                </p>
              </>
            )}
          </form>
        </div>
      </Container>

      <style>{`
        .input {
          width: 100%;
          padding: 0.875rem 1rem;
          border-radius: 1rem;
          border: 1px solid var(--border);
          background: var(--background);
          color: var(--foreground);
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .input:focus {
          border-color: var(--primary);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      {children}
      {error && <p className="text-xs text-primary mt-1">{error}</p>}
    </div>
  );
}
