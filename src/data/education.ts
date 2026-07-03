export interface Education {
  degree: string;
  institution: string;
  faculty: string;
  major: string;
  timeline: string;
  gpa: string;
  location: string;
}

export const educationData: Education[] = [
  {
    degree: "Bachelor of Information Technology",
    institution: "Universitas Negeri Yogyakarta",
    faculty: "Faculty of Engineering",
    major: "Information Technology",
    timeline: "2023 - Present",
    gpa: "3.87 / 4.00",
    location: "Yogyakarta, Indonesia",
  },
];
