export type ProductId = "course-step1" | "club-single";

export type Product = {
  id: ProductId;
  name: string;
  priceRub: number;
  sku: string;
};

export const PRODUCTS: Record<ProductId, Product> = {
  "course-step1": {
    id: "course-step1",
    name: 'Курс "Живая речь. Ступень 1"',
    priceRub: 15_000,
    sku: "zhivaya-rech-step1",
  },
  "club-single": {
    id: "club-single",
    name: "Клуб импровизации — 1 встреча",
    priceRub: 1000,
    sku: "zhivaya-rech-club",
  },
};
