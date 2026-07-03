"use client";

import { motion } from "framer-motion";
import { Building2, Award, BookOpen, ChevronRight } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { experienceData } from "@/data/experience";
import { certificatesData } from "@/data/certificates";
import { learningData } from "@/data/learning";
import { useLanguage } from "@/context/LanguageContext";

export function OrgCertSection() {
  const { t, language } = useLanguage();

  return (
    <SectionWrapper id="experience-learning">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Left Column — Organizations */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="cyber-panel p-6 sm:p-8 border border-white/5 bg-slate-950/40 backdrop-blur-xl rounded-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-8 border-b border-white/5 pb-3">
                <div className="h-9 w-9 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
                  <Building2 className="h-4.5 w-4.5 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground tracking-tight">
                  {t("Organizations", "Pengalaman Organisasi")}
                </h3>
              </div>

              <div className="space-y-8">
                {experienceData.map((item, idx) => {
                  const role = language === "id" ? item.roleId : item.role;
                  const descriptionList =
                    language === "id" ? item.descriptionId : item.description;
                  return (
                    <div
                      key={idx}
                      className="relative space-y-2 border-l-2 border-primary/20 pl-4"
                    >
                      <span className="text-[10px] text-primary font-bold uppercase tracking-wider block">
                        {item.timeline}
                      </span>
                      <h4 className="text-base font-bold text-foreground tracking-tight">
                        {role}
                      </h4>
                      <p className="text-xs text-secondary font-semibold">
                        {item.organization} — {item.institution}
                      </p>
                      <ul className="space-y-1.5 pt-2" role="list">
                        {descriptionList.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="text-xs text-muted-foreground flex items-start gap-2 leading-relaxed"
                          >
                            <ChevronRight className="h-3.5 w-3.5 text-primary/70 flex-shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column — Certificates & Learning */}
          <div className="flex flex-col gap-6 justify-between">
            {/* Certificates Block */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="cyber-panel p-6 sm:p-8 border border-white/5 bg-slate-950/40 backdrop-blur-xl rounded-2xl flex-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-6 border-b border-white/5 pb-3">
                  <div className="h-9 w-9 bg-secondary/10 border border-secondary/20 rounded-xl flex items-center justify-center">
                    <Award className="h-4.5 w-4.5 text-secondary" />
                  </div>
                  <h3 className="text-base font-bold text-foreground tracking-tight">
                    {t("Certifications", "Sertifikasi")}
                  </h3>
                </div>

                <div className="space-y-3.5">
                  {certificatesData.map((cert, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-white/5 border border-white/5 rounded-xl flex items-center justify-between hover:border-secondary/30 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-8.5 w-8.5 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Award className="h-4.5 w-4.5 text-secondary" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-foreground">
                            {cert.title}
                          </h4>
                          <p className="text-[10px] text-muted-foreground pt-0.5">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] text-muted-foreground font-semibold px-2 py-1 bg-white/5 rounded-full">
                        {cert.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Currently Learning Block */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="cyber-panel p-6 sm:p-8 border border-white/5 bg-slate-950/40 backdrop-blur-xl rounded-2xl"
            >
              <div className="flex items-center gap-3.5 mb-6 border-b border-white/5 pb-3">
                <div className="h-9 w-9 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
                  <BookOpen className="h-4.5 w-4.5 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground tracking-tight">
                  {t("Active Focus", "Fokus Pembelajaran Aktif")}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {learningData.map((topic, idx) => {
                  const categoryName =
                    language === "id" ? topic.categoryId : topic.categoryEn;
                  return (
                    <div
                      key={idx}
                      className="px-3.5 py-1.5 border border-primary/20 bg-primary/5 text-xs font-medium rounded-full transition-colors cursor-default"
                    >
                      <span className="text-muted-foreground mr-1">
                        {categoryName}:
                      </span>
                      <span className="text-primary font-bold">
                        {topic.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
