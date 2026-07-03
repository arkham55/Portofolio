export interface LearningTopic {
  name: string;
  categoryEn: string;
  categoryId: string;
}

export const learningData: LearningTopic[] = [
  { name: "Next.js & React", categoryEn: "Frontend", categoryId: "Frontend" },
  { name: "TypeScript & Python", categoryEn: "Language", categoryId: "Bahasa" },
  { name: "Laravel (PHP) & Flask (Python)", categoryEn: "Backend", categoryId: "Backend" },
  { name: "MySQL", categoryEn: "Database", categoryId: "Basis Data" },
  { name: "Software Architecture (Clean & SOLID)", categoryEn: "System Design", categoryId: "Desain Sistem" },
];
