export interface WorkExperience {
  role: string;
  roleId: string;
  organization: string;
  institution: string;
  type: "organization" | "work";
  timeline: string;
  description: string[];
  descriptionId: string[];
}

export const experienceData: WorkExperience[] = [
  {
    role: "Expert Staff of Reasoning Division",
    roleId: "Staf Ahli Divisi Penalaran",
    organization:
      "Himpunan Mahasiswa Pendidikan Teknik Elektronika & Informatika",
    institution: "Universitas Negeri Yogyakarta",
    type: "organization",
    timeline: "2024 - 2025",
    description: [
      "Mentored and guided staff members in planning, developing, and executing divisional work programs (Proker).",
      "Monitored and evaluated academic projects, ensuring successful execution of large-scale initiatives.",
    ],
    descriptionId: [
      "Membimbing dan mengarahkan para staf divisi dalam perencanaan, pengembangan, dan eksekusi program kerja (Proker).",
      "Memantau dan mengevaluasi proyek akademik divisi, memastikan keberhasilan pelaksanaan inisiatif skala besar.",
    ],
  },
  {
    role: "Staff of Reasoning Division",
    roleId: "Staf Divisi Penalaran",
    organization:
      "Himpunan Mahasiswa Pendidikan Teknik Elektronika & Informatika",
    institution: "Universitas Negeri Yogyakarta",
    type: "organization",
    timeline: "2023 - 2024",
    description: [
      "Organized national seminars and student competitions related to DPTEI departments.",
    ],
    descriptionId: [
      "Menyelenggarakan seminar nasional dan kompetisi mahasiswa yang berkaitan dengan departemen DPTEI.",
    ],
  },
];
