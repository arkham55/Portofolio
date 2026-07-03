export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export const certificatesData: Certificate[] = [
  {
    title: "Internship Preparation Certificate",
    issuer: "Universitas Negeri Yogyakarta",
    date: "2025",
  },
];
