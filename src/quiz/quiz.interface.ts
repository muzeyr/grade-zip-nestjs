export interface QuizData {
  slug: string;
  description: string;
  title?: string;
  body?: string;
}

export interface QuizRO {
  quiz: QuizData;
}