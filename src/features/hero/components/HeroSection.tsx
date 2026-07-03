"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { socialData } from "@/data/social";
import { useLanguage } from "@/context/LanguageContext";

const TYPING_ROLES = [
  "Web Developer",
  "Backend Developer",
  "Laravel Developer",
  "Software Engineer",
] as const;

function TypingAnimation() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_ROLES[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayed === current) {
        setTimeout(() => setIsDeleting(true), 1800);
        return;
      }
      if (isDeleting && displayed === "") {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % TYPING_ROLES.length);
        return;
      }
      setDisplayed((prev) =>
        isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1),
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <span
      className="gradient-text font-bold"
      aria-live="polite"
      aria-atomic="true"
    >
      {displayed}
      <span className="animate-pulse text-primary ml-0.5" aria-hidden="true">
        |
      </span>
    </span>
  );
}

function FloatingGrid() {
  return (
    <div
      className="absolute inset-0 animated-grid opacity-60 pointer-events-none"
      aria-hidden="true"
    >
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Glow orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export function HeroSection() {
  const { t } = useLanguage();
  const scrollToProjects = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      aria-label="Hero introduction"
    >
      <FloatingGrid />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full"
      >
        {/* Left Column: Bio & Actions */}
        <div className="text-left flex flex-col items-start">
          {/* Status badge */}
          <motion.div variants={item} className="mb-6">
            <Badge
              variant="outline"
              className="border-primary/20 text-primary bg-primary/5 px-4 py-1.5 text-xs font-semibold rounded-full uppercase tracking-wider flex items-center"
            >
              <span
                className="mr-2 h-2 w-2 bg-primary rounded-full inline-block animate-pulse"
                aria-hidden="true"
              />
              {t(
                "Welcome to my digital space",
                "Selamat datang di ruang digital saya",
              )}
            </Badge>
          </motion.div>

          {/* Greeting */}
          <motion.p
            variants={item}
            className="text-primary text-xs uppercase mb-3 tracking-[0.2em] font-bold"
          >
            {t("Hello, I am", "Halo, saya")}
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-4 leading-none"
          >
            Arsya Khalid
            <br />
            <span className="gradient-text">Mahardika</span>
          </motion.h1>

          {/* Typing animation */}
          <motion.div
            variants={item}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 h-10 font-mono"
          >
            <TypingAnimation />
          </motion.div>

          {/* Sub-description */}
          <motion.p
            variants={item}
            className="text-muted-foreground max-w-xl text-sm sm:text-base leading-relaxed mb-10 text-left"
          >
            {t(
              "IT undergraduate at Universitas Negeri Yogyakarta. Specializing in Laravel backend architecture, Next.js structures, and Python matching systems.",
              "Mahasiswa Teknologi Informasi di Universitas Negeri Yogyakarta. Spesialisasi dalam arsitektur backend Laravel, struktur Next.js, dan sistem pencocokan Python.",
            )}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-4 mb-8 text-xs w-full justify-start"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 font-semibold tracking-wide shadow-lg hover:shadow-primary/20 transition-all h-12"
              onClick={scrollToProjects}
            >
              <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
              {t("View Projects", "Lihat Proyek")}
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-6 border-white/10 hover:border-white/20 text-foreground hover:bg-white/5 tracking-wide h-12"
              onClick={scrollToContact}
            >
              <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
              {t("Contact Me", "Hubungi Saya")}
            </Button>

            <Button
              size="lg"
              variant="ghost"
              className="rounded-full px-6 h-12 text-muted-foreground hover:text-foreground hover:bg-white/5 font-semibold"
              asChild
            >
              <a
                href={socialData.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GitHub profile (opens in new tab)"
              >
                <FaGithub className="mr-2 h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
            </Button>

            <Button
              size="lg"
              variant="ghost"
              className="rounded-full px-6 h-12 text-muted-foreground hover:text-foreground hover:bg-white/5 font-semibold"
              asChild
            >
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View and Download CV"
              >
                <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                {t("View CV", "Lihat CV")}
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Right Column: Profile Photo Container */}
        <div className="relative flex items-center justify-center hidden md:flex">
          {/* Glowing Ambient Nebulae Behind Card */}
          <div className="absolute w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-pulse" />
          <div className="absolute w-60 h-60 rounded-full bg-secondary/15 blur-3xl animate-pulse delay-700" />

          {/* Interactive Floating Glassmorphic Photo Card */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 p-3 w-80 h-96 border border-white/10 backdrop-blur-xl bg-slate-950/40 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden group"
          >
            {/* Profile Image Frame */}
            <div className="relative flex-1 overflow-hidden rounded-xl border border-white/5 bg-slate-950/40 flex items-center justify-center">
              {/* Fallback avatar icon/graphic if image is not set or fails to load */}
              <Image
                src="/profile.jpg"
                alt="Profile Photo"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                onError={() => {
                  // handled by fallback element
                }}
              />
              <div
                className="absolute inset-0 hidden flex-col items-center justify-center text-center p-4 bg-slate-950/80"
                style={{
                  display: "none",
                }} /* Dynamically shown by onError fallback */
              >
                <div className="w-16 h-16 rounded-full border border-primary/25 bg-primary/5 flex items-center justify-center mb-3">
                  <span className="text-3xl text-primary">👤</span>
                </div>
                <p className="text-xs font-semibold text-foreground">
                  Put profile.jpg in public/
                </p>
                <p className="text-[10px] text-muted-foreground mt-1">
                  To show your profile photo
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
