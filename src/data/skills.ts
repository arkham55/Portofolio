export interface Skill {
  name: string;
  category: "programming" | "framework" | "database" | "tool";
  iconName?: string; // Used to match with react-icons/lucide
}

export const skillsData: Skill[] = [
  // Programming Languages
  { name: "PHP", category: "programming" },
  { name: "Python", category: "programming" },
  { name: "JavaScript", category: "programming" },
  { name: "TypeScript", category: "programming" },
  { name: "HTML", category: "programming" },
  { name: "CSS", category: "programming" },

  // Frameworks
  { name: "Laravel", category: "framework" },
  { name: "Flask", category: "framework" },
  { name: "Next.js", category: "framework" },
  { name: "React", category: "framework" },
  { name: "Bootstrap", category: "framework" },
  { name: "Tailwind CSS", category: "framework" },

  // Databases
  { name: "MySQL", category: "database" },

  // Tools
  { name: "Git", category: "tool" },
  { name: "GitHub", category: "tool" },
  { name: "Postman", category: "tool" },
  { name: "VS Code", category: "tool" },
  { name: "Figma", category: "tool" },
];
