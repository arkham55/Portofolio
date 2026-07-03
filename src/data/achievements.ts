export interface Achievement {
  label: string;
  value: string;
  metric?: string;
  description: string;
}

export const achievementsData: Achievement[] = [
  {
    label: "Cumulative GPA",
    value: "3.87",
    metric: "/ 4.00",
    description:
      "Consistent academic performance in Information Technology major.",
  },
  {
    label: "Featured Projects",
    value: "5+",
    description:
      "Developed and shipped systems across Laravel, Python, and Flask.",
  },
  {
    label: "Certificates",
    value: "1+",
    description: "Verified professional training credentials.",
  },
  {
    label: "Years of Learning",
    value: "3+",
    description:
      "Continuous self-improvement, project building, and academic study.",
  },
];
