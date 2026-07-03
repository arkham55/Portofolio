"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MessageSquare,
  ClipboardCheck,
  ClipboardCopy,
  CheckCircle2,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { socialData } from "@/data/social";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(socialData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title={t("Contact", "Kontak")}
          subtitle={t(
            "Let's build something amazing together. Reach out for opportunities or collaboration.",
            "Mari bangun sesuatu yang luar biasa bersama. Hubungi saya untuk peluang kerja sama atau kolaborasi."
          )}
        />

        <div className="grid md:grid-cols-5 gap-8 items-stretch">
          {/* Form / CTA Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="cyber-panel p-6 sm:p-8 md:col-span-3 border border-white/5 bg-slate-950/40 backdrop-blur-xl rounded-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Badge
                  variant="outline"
                  className="border-emerald-500/20 text-emerald-400 bg-emerald-500/5 rounded-full px-4 py-1 text-[10px] uppercase font-bold tracking-wider"
                >
                  <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full inline-block mr-1.5 animate-pulse" />
                  {t("INTERN_ACTIVE", "MAGANG_AKTIF")}
                </Badge>
                <Badge
                  variant="outline"
                  className="border-primary/20 text-primary bg-primary/5 rounded-full px-4 py-1 text-[10px] uppercase font-bold tracking-wider"
                >
                  {t("COLLABORATE", "KOLABORASI")}
                </Badge>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-foreground mb-4 tracking-tight">
                {t("Let's build something amazing together.", "Mari bangun sesuatu yang luar biasa bersama.")}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-8">
                {t(
                  "I am currently undergoing my professional internship, applying software engineering practices to real-world projects. If you have any inquiries regarding Laravel backend integrations, full stack React apps, or collaboration opportunities, feel free to reach out.",
                  "Saya saat ini sedang menjalani program magang profesional, menerapkan praktik rekayasa perangkat lunak pada proyek dunia nyata. Jika Anda memiliki pertanyaan mengenai integrasi backend Laravel, aplikasi full stack React, atau peluang kolaborasi, jangan ragu untuk menghubungi saya."
                )}
              </p>
            </div>

            <div className="space-y-3.5 text-xs font-semibold">
              <Button
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white rounded-full h-11 shadow-lg hover:shadow-emerald-500/20 transition-all font-semibold"
                asChild
              >
                <a
                  href={socialData.whatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact via WhatsApp"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  {t("Contact via WhatsApp", "Hubungi via WhatsApp")}
                </a>
              </Button>

              <Button
                variant="outline"
                className="w-full rounded-full h-11 border-white/10 hover:bg-white/5 text-foreground font-semibold"
                onClick={copyEmail}
              >
                {copied ? (
                  <>
                    <ClipboardCheck className="mr-2 h-4 w-4 text-emerald-400" />
                    {t("Email Copied", "Email Disalin")}
                  </>
                ) : (
                  <>
                    <ClipboardCopy className="mr-2 h-4 w-4" />
                    {t("Copy Email Address", "Salin Alamat Email")}
                  </>
                )}
              </Button>
            </div>
          </motion.div>

          {/* Social Links Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 flex flex-col gap-4"
          >
            {/* WhatsApp Detail Card */}
            <a
              href={socialData.whatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-panel p-5 border border-white/5 bg-slate-950/40 backdrop-blur-xl rounded-xl hover:border-emerald-500/30 hover:shadow-[0_10px_30px_rgba(16,185,129,0.06)] flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="h-10 w-10 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                  <MessageSquare className="h-5 w-5 text-emerald-400" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider">
                    WhatsApp
                  </p>
                  <p className="text-xs font-bold text-foreground">
                    {socialData.phone}
                  </p>
                </div>
              </div>
              <CheckCircle2 className="h-4 w-4 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* Email Detail Card */}
            <a
              href={`mailto:${socialData.email}`}
              className="cyber-panel p-5 border border-white/5 bg-slate-950/40 backdrop-blur-xl rounded-xl hover:border-primary/30 hover:shadow-[0_10px_30px_rgba(99,102,241,0.06)] flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="h-10 w-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider">
                    Email
                  </p>
                  <p className="text-xs font-bold text-foreground truncate max-w-[170px]">
                    {socialData.email}
                  </p>
                </div>
              </div>
              <CheckCircle2 className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* GitHub Detail Card */}
            <a
              href={socialData.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-panel p-5 border border-white/5 bg-slate-950/40 backdrop-blur-xl rounded-xl hover:border-secondary/30 hover:shadow-[0_10px_30px_rgba(99,102,241,0.06)] flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="h-10 w-10 bg-secondary/10 border border-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <FaGithub className="h-5 w-5 text-secondary" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider">
                    GitHub
                  </p>
                  <p className="text-xs font-bold text-foreground">
                    @arkham55
                  </p>
                </div>
              </div>
              <CheckCircle2 className="h-4 w-4 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
