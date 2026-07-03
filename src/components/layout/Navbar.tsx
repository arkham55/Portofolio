"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinksList = [
    { label: t("About", "Tentang"), href: "#about" },
    { label: t("Skills", "Keahlian"), href: "#skills" },
    { label: t("Projects", "Proyek"), href: "#projects" },
    { label: t("Education", "Pendidikan"), href: "#education" },
    { label: t("Contact", "Kontak"), href: "#contact" },
  ];

  // Scroll progress for the top progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Detect scroll to toggle glassmorphism
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ["about", "skills", "projects", "education", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileOpen(false);

    if (href === "#hero") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const navbarOffset = 90; // Spacing for floating navbar
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* ── Scroll Progress Bar ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-primary z-[100] origin-left shadow-[0_0_8px_rgba(99,102,241,0.5)]"
        style={{ scaleX }}
        aria-hidden="true"
      />

      {/* ── Navbar ── */}
      <header
        className={cn(
          "fixed top-4 left-4 right-4 z-50 max-w-5xl mx-auto transition-all duration-300 rounded-full border border-white/5 bg-slate-950/40 backdrop-blur-lg shadow-[0_8px_30px_rgba(0,0,0,0.2)]",
          scrolled &&
            "border-white/10 bg-slate-950/60 shadow-[0_10px_40px_rgba(99,102,241,0.08)]",
        )}
        role="banner"
      >
        <nav
          className="px-6 h-14 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-2 font-semibold text-foreground hover:text-primary transition-colors group"
            aria-label="Go to top"
          >
            <div className="h-8 w-8 bg-gradient-to-tr from-primary/20 to-secondary/20 border border-primary/30 rounded-full flex items-center justify-center group-hover:scale-105 transition-all shadow-[0_0_12px_rgba(99,102,241,0.2)]">
              <span className="text-xs font-black text-primary tracking-tighter">
                A
              </span>
            </div>
            <span className="hidden sm:block text-sm tracking-tight font-bold">
              Arsya Khalid
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1.5" role="list">
            {navLinksList.map(({ label, href }) => {
              const id = href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={href}>
                  <button
                    onClick={(e) => handleNavClick(e, href)}
                    className={cn(
                      "px-4 py-1.5 text-xs font-semibold rounded-full border border-transparent transition-all duration-200",
                      isActive
                        ? "text-primary bg-primary/10 border-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5",
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Language Selector Button */}
            <button
              onClick={() => setLanguage(language === "en" ? "id" : "en")}
              className="h-8 px-2.5 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 text-[9px] font-extrabold tracking-wider text-muted-foreground hover:text-foreground transition-all flex items-center justify-center gap-1"
              aria-label="Toggle language"
            >
              <span>{language === "en" ? "EN" : "ID"}</span>
            </button>

            {/* Hire Me CTA */}
            <Button
              size="sm"
              className="hidden sm:flex h-8 text-xs bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 rounded-full font-semibold px-4 transition-all"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              {t("Hire Me", "Hubungi")}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-8 w-8 rounded-full border border-white/5"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </nav>

        {/* ── Mobile Menu ── */}
        <motion.div
          initial={false}
          animate={
            mobileOpen
              ? { height: "auto", opacity: 1, marginTop: "8px" }
              : { height: 0, opacity: 0, marginTop: "0px" }
          }
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="md:hidden overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
          aria-hidden={!mobileOpen}
        >
          <ul className="flex flex-col px-4 py-4 gap-1.5" role="list">
            {navLinksList.map(({ label, href }) => {
              const id = href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={href}>
                  <button
                    onClick={(e) => handleNavClick(e, href)}
                    className={cn(
                      "w-full text-left px-4 py-2 text-xs font-semibold rounded-full border transition-all",
                      isActive
                        ? "bg-primary/10 border-primary/20 text-primary"
                        : "border-transparent text-muted-foreground hover:text-foreground hover:bg-white/5",
                    )}
                    tabIndex={mobileOpen ? 0 : -1}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
            <li className="pt-2 border-t border-white/5">
              <Button
                size="sm"
                className="w-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 rounded-full text-xs font-semibold"
                onClick={(e) => handleNavClick(e, "#contact")}
                tabIndex={mobileOpen ? 0 : -1}
              >
                {t("Hire Me", "Hubungi Saya")}
              </Button>
            </li>
          </ul>
        </motion.div>
      </header>
    </>
  );
}
