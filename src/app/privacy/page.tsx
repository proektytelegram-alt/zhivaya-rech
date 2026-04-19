import { Container } from "@/components/ui/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Политика конфиденциальности — Живая речь",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-16">
        <Container className="max-w-3xl">
          <Link
            href="/"
            className="text-sm text-muted hover:text-foreground inline-block mb-8"
          >
            ← На главную
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4 leading-tight">
            Политика конфиденциальности
          </h1>
          <p className="text-muted mb-10">
            Как мы обрабатываем ваши персональные данные
          </p>

          <article className="space-y-6 text-foreground/85 leading-relaxed">
            <h2 className="font-display text-2xl font-semibold mt-10 mb-4">
              1. Общие положения
            </h2>
            <p>
              Настоящая Политика описывает порядок обработки персональных
              данных (далее — ПДн) пользователей сайта zhivayarech.ru
              Оператором — индивидуальным предпринимателем Малышевым, ИНН
              100122620854 (далее — «Оператор»), в соответствии с ФЗ №152
              «О персональных данных».
            </p>

            <h2 className="font-display text-2xl font-semibold mt-10 mb-4">
              2. Какие данные мы собираем
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Имя или никнейм</li>
              <li>Номер телефона</li>
              <li>Адрес электронной почты</li>
              <li>Логин Telegram (если указан)</li>
              <li>Сообщения и комментарии, оставленные в формах</li>
              <li>Ответы на вопросы диагностического теста</li>
              <li>
                Технические данные: IP-адрес, cookies, данные браузера — в
                обезличенной форме для аналитики
              </li>
            </ul>

            <h2 className="font-display text-2xl font-semibold mt-10 mb-4">
              3. Для каких целей
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Связь с вами по вашей заявке</li>
              <li>
                Оказание услуг по оплаченной программе (курс, клуб,
                консультация)
              </li>
              <li>Отправка фискальных чеков</li>
              <li>Уведомления о расписании, датах занятий, изменениях</li>
              <li>
                Улучшение работы сайта и анализ посещаемости (в обезличенной
                форме)
              </li>
            </ul>

            <h2 className="font-display text-2xl font-semibold mt-10 mb-4">
              4. Правовые основания
            </h2>
            <p>
              Обработка ПДн осуществляется на основании вашего согласия,
              которое вы даёте, оставляя заявку или оплачивая услуги на Сайте,
              а также в целях исполнения договора, заключённого между вами и
              Оператором.
            </p>

            <h2 className="font-display text-2xl font-semibold mt-10 mb-4">
              5. Кому мы передаём данные
            </h2>
            <p>Мы передаём минимально необходимый набор данных только:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Платёжному сервису Prodamus — для обработки платежа и
                отправки чека (имя, email, телефон, сумма)
              </li>
              <li>Оператору фискальных данных — для формирования чека</li>
              <li>
                Сервису аналитики Яндекс.Метрика — обезличенные технические
                данные
              </li>
              <li>
                Государственным органам — при обоснованном запросе в
                соответствии с законодательством РФ
              </li>
            </ul>
            <p>
              Мы не передаём и не продаём ваши данные третьим лицам в
              маркетинговых целях.
            </p>

            <h2 className="font-display text-2xl font-semibold mt-10 mb-4">
              6. Как мы защищаем данные
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Передача данных по защищённому соединению HTTPS</li>
              <li>
                Хранение данных на серверах, защищённых паролями и ключами
                доступа
              </li>
              <li>
                Ограниченный доступ — только у Оператора и лиц, привлечённых к
                оказанию услуг под обязательствами о неразглашении
              </li>
            </ul>

            <h2 className="font-display text-2xl font-semibold mt-10 mb-4">
              7. Сроки хранения
            </h2>
            <p>
              Персональные данные обрабатываются до достижения целей обработки
              или до отзыва вашего согласия. Финансовые документы (чеки,
              бухгалтерские данные) хранятся в течение сроков, установленных
              законодательством РФ (не менее 5 лет).
            </p>

            <h2 className="font-display text-2xl font-semibold mt-10 mb-4">
              8. Ваши права
            </h2>
            <p>Вы вправе:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Получить информацию об обрабатываемых данных</li>
              <li>Потребовать их уточнения, блокирования или удаления</li>
              <li>Отозвать согласие на обработку</li>
              <li>
                Обратиться в Роскомнадзор, если считаете, что ваши права
                нарушены
              </li>
            </ul>
            <p>
              Для реализации прав напишите на smok9576@yandex.ru — мы
              отреагируем в течение 10 рабочих дней.
            </p>

            <h2 className="font-display text-2xl font-semibold mt-10 mb-4">
              9. Cookies и аналитика
            </h2>
            <p>
              Сайт использует cookies — небольшие файлы, сохраняемые в вашем
              браузере. Они нужны для запоминания ваших настроек и работы
              аналитики. Вы можете отключить их в настройках браузера, но это
              может повлиять на работу сайта.
            </p>

            <h2 className="font-display text-2xl font-semibold mt-10 mb-4">
              10. Изменения политики
            </h2>
            <p>
              Мы можем менять настоящую Политику. Актуальная редакция всегда
              опубликована на этой странице. При существенных изменениях мы
              уведомим вас дополнительно.
            </p>

            <h2 className="font-display text-2xl font-semibold mt-10 mb-4">
              11. Контакты Оператора
            </h2>
            <p>
              ИП Малышев
              <br />
              ИНН 100122620854
              <br />
              Email: smok9576@yandex.ru
              <br />
              Telegram: @zhivayarech
            </p>

            <p className="text-sm text-muted pt-10 border-t border-border/50 mt-10">
              Дата последней редакции: 19 апреля 2026 года.
            </p>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
