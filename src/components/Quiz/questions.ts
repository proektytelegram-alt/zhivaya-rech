export type QuestionId =
  | "goal"
  | "pain"
  | "frequency"
  | "selfrate"
  | "scenario"
  | "thinking"
  | "want";

export type Option = {
  id: string;
  label: string;
  emoji?: string;
  weight?: Partial<Record<ArchetypeId, number>>;
};

export type Question = {
  id: QuestionId;
  question: string;
  subtitle?: string;
  type: "single" | "multi" | "slider";
  options?: Option[];
};

export type ArchetypeId =
  | "improvisator"
  | "planner"
  | "charisma"
  | "tech"
  | "beginner";

export type Archetype = {
  id: ArchetypeId;
  emoji: string;
  title: string;
  tagline: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  plan: string[];
};

export const ARCHETYPES: Record<ArchetypeId, Archetype> = {
  improvisator: {
    id: "improvisator",
    emoji: "🎭",
    title: "Импровизатор-сомневающийся",
    tagline: "У тебя есть дар говорить живо — но страх сковывает",
    description:
      "Ты умеешь реагировать в моменте и находить неожиданные слова, но внутренний критик часто останавливает тебя до того, как ты начнёшь. Твой рост — не в технике, а в разрешении себе говорить.",
    strengths: [
      "Природная реакция и находчивость",
      "Эмоциональный контакт с собеседником",
      "Гибкость мышления",
    ],
    weaknesses: [
      "Зажим перед большой аудиторией",
      "Сомнения в своих словах после того, как сказал",
      "Иногда теряешь фокус, уходишь в сторону",
    ],
    plan: [
      "Снять страх оценки — через упражнения клуба импровизации",
      "Научиться возвращать мысль в структуру",
      "Превратить находчивость в сильный инструмент на сцене",
    ],
  },
  planner: {
    id: "planner",
    emoji: "📋",
    title: "Планировщик",
    tagline: "Ты силён в подготовленной речи, но теряешься без плана",
    description:
      "С текстом перед глазами ты чёткий и уверенный. Без него — ступор. Твоя задача — научиться доверять себе вне подготовки и развить навык мыслить вслух.",
    strengths: [
      "Чёткая логика и структура",
      "Глубокая проработка темы",
      "Уверенность в подготовленных выступлениях",
    ],
    weaknesses: [
      "Ступор при неожиданном вопросе",
      "Сложно говорить спонтанно",
      "Боязнь ошибиться без текста",
    ],
    plan: [
      "Развить навык импровизации как отдельный мускул",
      "Практика ответов на вопросы без подготовки",
      "Переход от «выучил» к «понял и говорю»",
    ],
  },
  charisma: {
    id: "charisma",
    emoji: "🔥",
    title: "Скрытый харизматик",
    tagline: "В тебе есть энергия — не хватает инструментов её показать",
    description:
      "Тебе есть что сказать, и ты чувствуешь силу внутри — но форма пока не догоняет содержание. С правильной подачей ты сможешь вести за собой аудиторию.",
    strengths: [
      "Собственная позиция и мнение",
      "Внутренняя энергия и убеждённость",
      "Желание быть услышанным",
    ],
    weaknesses: [
      "Подача не соответствует силе мысли",
      "Голос и жесты не работают на тебя",
      "Аудитория не сразу считывает твою экспертность",
    ],
    plan: [
      "Работа с голосом, паузами, энергетикой",
      "Постановка тела и взгляда на публике",
      "Управление вниманием зала",
    ],
  },
  tech: {
    id: "tech",
    emoji: "🎤",
    title: "Технарь на публике",
    tagline: "Ты всё знаешь — но не всегда умеешь донести",
    description:
      "В своей теме ты эксперт. Но когда нужно объяснить «для всех», язык усложняется, а слушатели теряются. Твой рост — в простоте и в умении держать внимание не экспертов.",
    strengths: [
      "Глубина экспертизы",
      "Точность и аккуратность в формулировках",
      "Уважение к фактам",
    ],
    weaknesses: [
      "Сложный язык для широкой аудитории",
      "Недостаточная эмоция в подаче",
      "Монотонность, усталость зала",
    ],
    plan: [
      "Упрощение без потери смысла",
      "Сторителлинг и метафоры в экспертных темах",
      "Игра с темпом, паузами и интонацией",
    ],
  },
  beginner: {
    id: "beginner",
    emoji: "🌱",
    title: "Новичок с потенциалом",
    tagline: "Ты в начале пути — и это отличная позиция",
    description:
      "У тебя нет плохих привычек и зажимов от неудачного опыта. Это чистый лист, на котором мы с тобой построим базу: уверенность, структуру, подачу и импровизацию.",
    strengths: [
      "Открытость к новому",
      "Нет «сломанных» шаблонов",
      "Честная мотивация — просто научиться",
    ],
    weaknesses: [
      "Нет опыта в публичных ситуациях",
      "Не знаешь свои сильные стороны",
      "Страх — потому что ещё не пробовал",
    ],
    plan: [
      "База: как собирать мысль и удерживать её",
      "Первые выступления в безопасной среде",
      "Понимание своего стиля и уникальности",
    ],
  },
};

export const QUESTIONS: Question[] = [
  {
    id: "goal",
    question: "Зачем тебе ораторское мастерство?",
    subtitle: "Выбери то, что ближе всего сейчас",
    type: "single",
    options: [
      {
        id: "work",
        label: "Для работы и карьеры",
        emoji: "💼",
        weight: { tech: 1, planner: 1 },
      },
      {
        id: "self",
        label: "Самопрезентация и знакомства",
        emoji: "👋",
        weight: { charisma: 1, beginner: 1 },
      },
      {
        id: "lead",
        label: "Руководство людьми",
        emoji: "🎯",
        weight: { charisma: 2, tech: 1 },
      },
      {
        id: "stage",
        label: "Публичные выступления, сцена",
        emoji: "🎤",
        weight: { improvisator: 1, charisma: 2 },
      },
      {
        id: "curious",
        label: "Просто стало интересно",
        emoji: "🤔",
        weight: { beginner: 2 },
      },
    ],
  },
  {
    id: "pain",
    question: "Что больше всего мешает говорить свободно?",
    type: "single",
    options: [
      {
        id: "fear",
        label: "Боюсь выступать, зажимаюсь",
        emoji: "😰",
        weight: { improvisator: 2, beginner: 1 },
      },
      {
        id: "lost",
        label: "Теряюсь, не нахожу слов",
        emoji: "😶",
        weight: { planner: 2, beginner: 1 },
      },
      {
        id: "messy",
        label: "Говорю много, но не доношу смысл",
        emoji: "🌀",
        weight: { charisma: 1, tech: 1 },
      },
      {
        id: "questions",
        label: "Не умею отвечать на вопросы",
        emoji: "❓",
        weight: { planner: 2 },
      },
      {
        id: "quiet",
        label: "Говорю слишком тихо, монотонно",
        emoji: "🔇",
        weight: { tech: 1, charisma: 1 },
      },
    ],
  },
  {
    id: "frequency",
    question: "Как часто ты оказываешься в публичных ситуациях?",
    type: "single",
    options: [
      {
        id: "daily",
        label: "Каждый день",
        emoji: "📅",
        weight: { tech: 1, charisma: 1 },
      },
      {
        id: "weekly",
        label: "Раз в неделю",
        emoji: "📆",
        weight: { planner: 1 },
      },
      {
        id: "monthly",
        label: "Раз в месяц",
        emoji: "🗓️",
      },
      {
        id: "rare",
        label: "Редко — и это пугает",
        emoji: "😬",
        weight: { beginner: 2, improvisator: 1 },
      },
    ],
  },
  {
    id: "selfrate",
    question: "Насколько ты сейчас доволен своей речью на публике?",
    subtitle: "От 1 (всё плохо) до 10 (я уверен в себе)",
    type: "slider",
  },
  {
    id: "scenario",
    question:
      "Тебя вызвали выступить без подготовки на 5 минут. Что ты сделаешь первым?",
    type: "single",
    options: [
      {
        id: "improv",
        label: "Начну импровизировать сразу",
        emoji: "⚡",
        weight: { improvisator: 2, charisma: 1 },
      },
      {
        id: "pause",
        label: "Попрошу минуту собраться",
        emoji: "🧠",
        weight: { planner: 2, tech: 1 },
      },
      {
        id: "refuse",
        label: "Попытаюсь отказаться",
        emoji: "🙈",
        weight: { beginner: 2, improvisator: 1 },
      },
      {
        id: "freeze",
        label: "Впаду в ступор",
        emoji: "🧊",
        weight: { beginner: 1, planner: 1 },
      },
    ],
  },
  {
    id: "thinking",
    question: "Когда ты говоришь лучше всего?",
    type: "single",
    options: [
      {
        id: "prepared",
        label: "Когда есть план или текст",
        emoji: "📖",
        weight: { planner: 2, tech: 1 },
      },
      {
        id: "spontaneous",
        label: "Когда говорю спонтанно",
        emoji: "💬",
        weight: { improvisator: 2, charisma: 1 },
      },
      {
        id: "unknown",
        label: "Не знаю, не пробовал по-разному",
        emoji: "🤷",
        weight: { beginner: 2 },
      },
    ],
  },
  {
    id: "want",
    question: "Что хочешь получить от обучения?",
    subtitle: "Можно выбрать несколько",
    type: "multi",
    options: [
      { id: "confidence", label: "Уверенность", emoji: "💪" },
      { id: "structure", label: "Структуру речи", emoji: "🏗️" },
      { id: "voice", label: "Голос и подачу", emoji: "🎙️" },
      { id: "improv", label: "Импровизацию", emoji: "⚡" },
      { id: "audience", label: "Работу с аудиторией", emoji: "👥" },
      { id: "business", label: "Бизнес-презентации", emoji: "📊" },
    ],
  },
];

export function computeArchetype(
  answers: Record<string, string | string[] | number>
): ArchetypeId {
  const scores: Record<ArchetypeId, number> = {
    improvisator: 0,
    planner: 0,
    charisma: 0,
    tech: 0,
    beginner: 0,
  };

  for (const q of QUESTIONS) {
    const a = answers[q.id];
    if (!a || q.type === "slider" || q.type === "multi") continue;
    const opt = q.options?.find((o) => o.id === a);
    if (!opt?.weight) continue;
    for (const [key, value] of Object.entries(opt.weight) as [
      ArchetypeId,
      number
    ][]) {
      scores[key] += value;
    }
  }

  // слайдер - низкие баллы смещают в beginner
  const selfrate = answers.selfrate as number | undefined;
  if (typeof selfrate === "number") {
    if (selfrate <= 3) scores.beginner += 2;
    else if (selfrate >= 8) scores.charisma += 1;
  }

  let best: ArchetypeId = "beginner";
  let max = -1;
  for (const [key, value] of Object.entries(scores) as [
    ArchetypeId,
    number
  ][]) {
    if (value > max) {
      max = value;
      best = key;
    }
  }
  return best;
}
