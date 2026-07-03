"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  GraduationCap,
  BookOpen,
  Star,
  Building2,
  ExternalLink,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { socialData } from "@/data/social";
import { educationData } from "@/data/education";
import { useLanguage } from "@/context/LanguageContext";

const eduInfo = educationData[0];

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="about">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title={t("About Me", "Tentang Saya")}
          subtitle={t(
            "Discover my background, academic credentials, and links.",
            "Informasi tentang latar belakang, kredensial akademik, dan kontak saya."
          )}
        />

        {/* Unified Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1: Biography (Takes 2 columns on large screens) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 cyber-panel p-6 sm:p-8 border border-white/5 bg-slate-950/40 backdrop-blur-xl flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex flex-col items-start gap-3">
                <Badge
                  variant="outline"
                  className="border-primary/20 text-primary bg-primary/5 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider"
                >
                  {t("Information Technology Student", "Mahasiswa Teknologi Informasi")}
                </Badge>
                <h3 className="text-3xl font-extrabold text-foreground tracking-tight">
                  {socialData.name}
                </h3>
              </div>

              <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  {t(
                    "I am a third-year Information Technology student at Universitas Negeri Yogyakarta, dedicated to engineering fast, clean, and scalable web applications from scratch.",
                    "Saya adalah mahasiswa Teknologi Informasi tahun ketiga di Universitas Negeri Yogyakarta, yang berdedikasi untuk membangun aplikasi web yang cepat, bersih, dan scalable dari awal."
                  )}
                </p>
                <p>
                  {t(
                    "My core expertise lies in backend development using Laravel (PHP) and Flask (Python) to design lightweight RESTful APIs and reliable database systems. On the frontend, I build responsive user interfaces with TypeScript, Next.js, and Tailwind CSS.",
                    "Keahlian utama saya berfokus pada backend development menggunakan Laravel (PHP) dan Flask (Python) untuk merancang RESTful API yang ringan serta sistem database yang handal. Di sisi frontend, saya membangun antarmuka responsif dengan TypeScript, Next.js, dan Tailwind CSS."
                  )}
                </p>
                <p>
                  {t(
                    "I rely on Git/GitHub for version control, Postman for API testing, and MySQL for database modeling. I am committed to writing clean, maintainable code and collaborating effectively in team environments.",
                    "Saya mengandalkan Git/GitHub untuk version control, Postman untuk pengujian API, dan MySQL untuk pemodelan database. Saya berkomitmen untuk menulis kode yang bersih, mudah dipelihara, dan berkolaborasi secara efektif dalam lingkungan tim."
                  )}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                t("Problem Solver", "Pemecah Masalah"),
                t("Team Collaborator", "Kolaborator Tim"),
                t("Fast Learner", "Pembelajar Cepat"),
                t("Clean Architectures", "Arsitektur Bersih"),
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] sm:text-xs font-semibold px-4 py-1.5 rounded-full border border-white/5 text-muted-foreground bg-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right side wrapper containing Academics & Contacts */}
          <div className="flex flex-col gap-6 lg:col-span-1 justify-between">
            {/* Card 2: Academic Profile */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="cyber-panel p-6 border border-white/5 bg-slate-950/40 backdrop-blur-xl flex-1 flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2 mb-6 border-b border-white/5 pb-3">
                  <GraduationCap className="h-4.5 w-4.5 text-primary" /> {t("Academic Profile", "Profil Akademik")}
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-7 w-7 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary/10">
                      <GraduationCap className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div>
                      <span className="text-[9px] text-muted-foreground uppercase tracking-wider block">{t("Institution", "Institusi")}</span>
                      <span className="text-xs font-bold text-foreground">{eduInfo.institution}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-7 w-7 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border border-secondary/10">
                      <Building2 className="h-3.5 w-3.5 text-secondary" />
                    </div>
                    <div>
                      <span className="text-[9px] text-muted-foreground uppercase tracking-wider block">{t("Faculty", "Fakultas")}</span>
                      <span className="text-xs font-bold text-foreground">{t(eduInfo.faculty, "Fakultas Teknik")}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-7 w-7 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border border-accent/10">
                      <BookOpen className="h-3.5 w-3.5 text-accent" />
                    </div>
                    <div>
                      <span className="text-[9px] text-muted-foreground uppercase tracking-wider block">{t("Major", "Jurusan")}</span>
                      <span className="text-xs font-bold text-foreground">{t(eduInfo.major, "Teknologi Informasi")}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-emerald-400" />
                  <span className="text-xs font-bold text-foreground">GPA: {eduInfo.gpa}</span>
                </div>
                <Badge variant="outline" className="border-emerald-500/20 text-emerald-400 bg-emerald-500/5 text-[9px] rounded-full px-2.5">
                  Dean&apos;s List
                </Badge>
              </div>
            </motion.div>

            {/* Card 3: Connect Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="cyber-panel p-6 border border-white/5 bg-slate-950/40 backdrop-blur-xl"
            >
              <h4 className="text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-2 mb-4 border-b border-white/5 pb-3">
                <MapPin className="h-4.5 w-4.5 text-secondary" /> {t("Quick Contact", "Kontak Cepat")}
              </h4>
              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center pb-1">
                  <span className="text-muted-foreground">{t("Location", "Lokasi")}</span>
                  <span className="font-bold text-foreground">{t(socialData.location, "Yogyakarta, Indonesia")}</span>
                </div>
                
                <a
                  href={`mailto:${socialData.email}`}
                  className="flex justify-between items-center group transition-colors"
                >
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">Email</span>
                  <span className="font-bold text-foreground flex items-center gap-1 group-hover:text-primary transition-colors truncate max-w-[150px]">
                    {socialData.email} <ExternalLink className="h-3 w-3 opacity-55" />
                  </span>
                </a>

                <a
                  href={socialData.gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center group transition-colors"
                >
                  <span className="text-muted-foreground group-hover:text-accent transition-colors">GitHub</span>
                  <span className="font-bold text-foreground flex items-center gap-1 group-hover:text-accent transition-colors">
                    @arkham55 <ExternalLink className="h-3 w-3 opacity-55" />
                  </span>
                </a>

                <a
                  href={socialData.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center group transition-colors"
                >
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">LinkedIn</span>
                  <span className="font-bold text-foreground flex items-center gap-1 group-hover:text-primary transition-colors">
                    Arsya Khalid <ExternalLink className="h-3 w-3 opacity-55" />
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
