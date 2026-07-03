"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { socialData } from "@/data/social";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="border-t border-white/5 bg-slate-950/40 backdrop-blur-xl pt-16 pb-12 px-6 sm:px-12 relative overflow-hidden"
      role="contentinfo"
    >
      {/* Background ambient glowing nebulae */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 h-64 w-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        {/* Tier 1: Top Row */}
        <div className="flex items-center justify-between border-b border-white/5 pb-8">
          <span className="text-xs text-muted-foreground font-semibold tracking-wider">
            &copy; {new Date().getFullYear()} — {socialData.name}
          </span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 group text-xs font-bold text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll to top"
          >
            <span className="tracking-widest uppercase text-[10px]">
              {t("BACK TO TOP", "KEMBALI KE ATAS")}
            </span>
            <div className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:text-primary transition-all duration-300 transform group-hover:-translate-y-1">
              <ArrowUp className="h-4 w-4" />
            </div>
          </button>
        </div>

        {/* Tier 2: Center Huge Hero Text */}
        <div className="text-center py-6">
          <p className="text-xs uppercase font-extrabold tracking-widest text-primary/80 mb-2">
            {t("HAVE A PROJECT IN MIND?", "PUNYA PROYEK DI PIKIRAN?")}
          </p>
          <motion.h2
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter gradient-text cursor-default select-none uppercase"
          >
            {t("LET'S TALK.", "MARI BICARA.")}
          </motion.h2>
        </div>

        {/* Tier 3: Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-8 border-t border-white/5">
          {/* Social Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <a
              href={socialData.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 border border-white/10 hover:border-secondary/30 hover:bg-secondary/5 rounded-full text-[10px] font-extrabold tracking-widest uppercase text-muted-foreground hover:text-secondary transition-all hover:shadow-[0_0_12px_rgba(168,85,247,0.15)]"
            >
              GITHUB
            </a>
            <a
              href={socialData.whatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 border border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/5 rounded-full text-[10px] font-extrabold tracking-widest uppercase text-muted-foreground hover:text-emerald-400 transition-all hover:shadow-[0_0_12px_rgba(16,185,129,0.15)]"
            >
              WHATSAPP
            </a>
            <a
              href={`mailto:${socialData.email}`}
              className="px-4 py-1.5 border border-white/10 hover:border-primary/30 hover:bg-primary/5 rounded-full text-[10px] font-extrabold tracking-widest uppercase text-muted-foreground hover:text-primary transition-all hover:shadow-[0_0_12px_rgba(99,102,241,0.15)]"
            >
              EMAIL
            </a>
          </div>

          {/* Credits */}
          <div className="text-center sm:text-right text-[10px] text-muted-foreground/60 font-semibold tracking-wide space-y-0.5">
            <p>
              Designed & Developed by{" "}
              <span className="text-muted-foreground font-bold hover:text-primary transition-colors">
                Arsya Khalid
              </span>
            </p>
            <p>Built with Next.js, TypeScript & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
