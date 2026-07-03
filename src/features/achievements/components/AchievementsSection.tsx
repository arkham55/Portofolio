"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { achievementsData } from "@/data/achievements";
import { useLanguage } from "@/context/LanguageContext";

function AnimatedNumber({ value }: { value: string }) {
  const numericPart = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = numericPart;
    const duration = 1500;
    const step = (end / duration) * 16;
    const timer = setInterval(() => {
      start = Math.min(start + step, end);
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, numericPart]);

  const display =
    numericPart % 1 !== 0 ? count.toFixed(2) : Math.floor(count).toString();

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export function AchievementsSection() {
  const { t } = useLanguage();

  const getTranslatedLabel = (label: string) => {
    switch (label) {
      case "Cumulative GPA":
        return t("Cumulative GPA", "IPK Kumulatif");
      case "Featured Projects":
        return t("Featured Projects", "Proyek Unggulan");
      case "Certificates":
        return t("Certificates", "Sertifikasi");
      case "Years of Learning":
        return t("Years of Learning", "Tahun Belajar");
      default:
        return label;
    }
  };

  const getTranslatedDescription = (label: string, desc: string) => {
    switch (label) {
      case "Cumulative GPA":
        return t(desc, "Kinerja akademik yang konsisten dalam jurusan Teknologi Informasi.");
      case "Featured Projects":
        return t(desc, "Mengembangkan dan merilis sistem menggunakan Laravel, Python, dan Flask.");
      case "Certificates":
        return t(desc, "Kredensial pelatihan profesional yang terverifikasi.");
      case "Years of Learning":
        return t(desc, "Peningkatan diri berkelanjutan, pembuatan proyek, dan studi akademik.");
      default:
        return desc;
    }
  };

  return (
    <SectionWrapper id="achievements">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title={t("Achievements", "Pencapaian")}
          subtitle={t(
            "Key milestones and metrics from my academic and development journey.",
            "Tonggak penting dan metrik dari perjalanan akademik dan pengembangan saya."
          )}
        />

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          role="list"
        >
          {achievementsData.map((item) => (
            <motion.li
              key={item.label}
              variants={cardVariant}
              className="glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:glow-primary group text-center"
            >
              <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-1 tabular-nums">
                <AnimatedNumber value={item.value} />
                {item.metric && (
                  <span className="text-xl text-muted-foreground font-medium">
                    {item.metric}
                  </span>
                )}
              </div>
              <p className="text-sm font-semibold text-foreground mb-1">
                {getTranslatedLabel(item.label)}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed hidden md:block">
                {getTranslatedDescription(item.label, item.description)}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </SectionWrapper>
  );
}
