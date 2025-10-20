export interface QuizQuestion {
  question: string;
  key: keyof Answers;
  options: {
    value: string;
    label: string;
    description: string;
  }[];
}

export interface Answers {
  budget?: string;
  lifestyle?: string;
  features?: string;
  cars?: string;
}

export interface Product {
  type: string;
  name: string;
  brand: string;
  description: string;
  priceRange: string;
  searchQuery: string;
  pros: string[];
  cons: string[];
  rating?: number;
  ratingCount?: number;
}

export interface Bundle {
  bundleName: string;
  totalPriceRange: string;
  description: string;
  products: Product[];
  isBestMatch?: boolean;
}