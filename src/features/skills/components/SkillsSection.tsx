"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Database, Wrench } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillsData, type Skill } from "@/data/skills";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

const CATEGORIES: {
  key: Skill["category"];
  labelEn: string;
  labelId: string;
  icon: React.ElementType;
  glowClass: string;
  pillClass: string;
  iconBgClass: string;
  iconTextClass: string;
}[] = [
  {
    key: "programming",
    labelEn: "Programming Languages",
    labelId: "Bahasa Pemrograman",
    icon: Code2,
    glowClass:
      "hover:border-blue-500/30 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)]",
    pillClass:
      "border-blue-500/25 text-blue-300 bg-blue-500/5 hover:border-blue-400 hover:text-blue-200 hover:shadow-[0_0_10px_rgba(59,130,246,0.25)]",
    iconBgClass: "bg-blue-500/10 border-blue-500/20",
    iconTextClass: "text-blue-400",
  },
  {
    key: "framework",
    labelEn: "Frameworks & Libraries",
    labelId: "Framework & Pustaka",
    icon: Layers,
    glowClass:
      "hover:border-indigo-500/30 hover:shadow-[0_10px_30px_rgba(99,102,241,0.1)]",
    pillClass:
      "border-indigo-500/25 text-indigo-300 bg-indigo-500/5 hover:border-indigo-400 hover:text-indigo-200 hover:shadow-[0_0_10px_rgba(99,102,241,0.25)]",
    iconBgClass: "bg-indigo-500/10 border-indigo-500/20",
    iconTextClass: "text-indigo-400",
  },
  {
    key: "database",
    labelEn: "Databases",
    labelId: "Basis Data",
    icon: Database,
    glowClass:
      "hover:border-emerald-500/30 hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)]",
    pillClass:
      "border-emerald-500/25 text-emerald-300 bg-emerald-500/5 hover:border-emerald-400 hover:text-emerald-200 hover:shadow-[0_0_10px_rgba(16,185,129,0.25)]",
    iconBgClass: "bg-emerald-500/10 border-emerald-500/20",
    iconTextClass: "text-emerald-400",
  },
  {
    key: "tool",
    labelEn: "Tools & Platforms",
    labelId: "Alat & Platform",
    icon: Wrench,
    glowClass:
      "hover:border-rose-500/30 hover:shadow-[0_10px_30px_rgba(244,63,94,0.1)]",
    pillClass:
      "border-rose-500/25 text-rose-300 bg-rose-500/5 hover:border-rose-400 hover:text-rose-200 hover:shadow-[0_0_10px_rgba(244,63,94,0.25)]",
    iconBgClass: "bg-rose-500/10 border-rose-500/20",
    iconTextClass: "text-rose-400",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
} as const;

const chipVariant = {
  hidden: { opacity: 0, scale: 0.95, y: 5 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
} as const;

export function SkillsSection() {
  const { t } = useLanguage();

  const grouped = CATEGORIES.map((cat) => ({
    ...cat,
    label: t(cat.labelEn, cat.labelId),
    skills: skillsData.filter((s) => s.category === cat.key),
  }));

  return (
    <SectionWrapper id="skills">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title={t("Technical Skills", "Keahlian Teknis")}
          subtitle={t(
            "Technologies and tools I work with to build production-ready software.",
            "Teknologi dan alat yang saya gunakan untuk membangun perangkat lunak siap produksi.",
          )}
        />

        <div className="grid md:grid-cols-2 gap-6">
          {grouped.map((group, gi) => (
            <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className={cn(
                "cyber-panel p-6 border border-white/5 bg-slate-950/40 backdrop-blur-xl rounded-2xl transition-all duration-300",
                group.glowClass,
              )}
            >
              <div className="flex items-center gap-3.5 mb-6">
                <div
                  className={cn(
                    "h-9 w-9 rounded-xl border flex items-center justify-center flex-shrink-0 transition-colors",
                    group.iconBgClass,
                  )}
                >
                  <group.icon
                    className={cn("h-4.5 w-4.5", group.iconTextClass)}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-bold text-foreground text-sm tracking-tight">
                  {group.label}
                </h3>
              </div>

              <motion.ul
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
                role="list"
                aria-label={`${group.label} skills`}
              >
                {group.skills.map((skill) => (
                  <motion.li
                    key={skill.name}
                    variants={chipVariant}
                    whileHover={{ scale: 1.04 }}
                    className={cn(
                      "px-4 py-1.5 border rounded-full text-xs font-semibold transition-all duration-200 cursor-default",
                      group.pillClass,
                    )}
                  >
                    {skill.name}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
