"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Star } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { educationData } from "@/data/education";
import { useLanguage } from "@/context/LanguageContext";

export function EducationSection() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="education">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title={t("Education", "Pendidikan")}
          subtitle={t(
            "My academic background and formal learning journey.",
            "Latar belakang akademik dan perjalanan pendidikan formal saya.",
          )}
        />

        <div className="grid grid-cols-1 gap-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={`${edu.institution}-${index}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40 backdrop-blur-xl p-6 sm:p-8 hover:border-primary/30 transition-all hover:shadow-[0_20px_50px_rgba(99,102,241,0.12)] group flex flex-col sm:flex-row items-start gap-6"
            >
              {/* Background Decorative Glow */}
              <div className="absolute top-0 right-0 h-40 w-40 bg-primary/5 rounded-full blur-[60px] pointer-events-none transition-all group-hover:bg-primary/10" />

              {/* School Icon Shield */}
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-tr from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/20 flex-shrink-0 group-hover:scale-105 transition-transform">
                <GraduationCap
                  className="h-7 w-7 text-primary"
                  aria-hidden="true"
                />
              </div>

              {/* Content Area */}
              <div className="flex-1 space-y-4 w-full">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-extrabold text-foreground tracking-tight">
                      {t(edu.degree, "Sarjana Teknologi Informasi")}
                    </h3>
                    <p className="text-primary text-sm font-semibold tracking-wide">
                      {edu.institution}
                    </p>
                  </div>

                  {/* Pulse Active Indicator Tag */}
                  <Badge
                    variant="outline"
                    className="border-emerald-500/20 text-emerald-400 bg-emerald-500/5 text-[10px] rounded-full px-3 py-1 uppercase font-bold tracking-wider flex items-center gap-1.5"
                  >
                    <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full animate-ping" />
                    <span>{t("Active", "Aktif")}</span>
                  </Badge>
                </div>

                {/* Academic Details Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t border-white/5 text-xs text-muted-foreground font-medium">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary/70" />
                    <span>{edu.timeline}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary/70" />
                    <span>{t(edu.location, "Yogyakarta, Indonesia")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-emerald-400/80" />
                    <span>GPA: {edu.gpa}</span>
                  </div>
                </div>

                {/* Faculty & Major Labels */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-[10px] font-bold py-1 px-3 bg-primary/10 border border-primary/20 text-primary rounded-full">
                    {t(edu.faculty, "Fakultas Teknik")}
                  </span>
                  <span className="text-[10px] font-bold py-1 px-3 bg-secondary/10 border border-secondary/20 text-secondary rounded-full">
                    {t(edu.major, "Teknologi Informasi")}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
