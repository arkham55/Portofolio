"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import {
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Compass,
  Zap,
} from "lucide-react";
import { type Project, projectsTranslationId } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailModal({
  project,
  isOpen,
  onClose,
}: ProjectDetailModalProps) {
  const { t, language } = useLanguage();

  if (!project) return null;

  const trans = language === "id" ? projectsTranslationId[project.id] : null;
  const subtitle = trans?.subtitle || project.subtitle;
  const overview = trans?.overview || project.overview;
  const problem = trans?.problem || project.problem;
  const research = trans?.research || project.research;
  const solution = trans?.solution || project.solution;
  const architectureDescription =
    trans?.architectureDescription || project.architectureDescription;
  const features = trans?.features || project.features;
  const challenges = trans?.challenges || project.challenges;
  const lessonsLearned = trans?.lessonsLearned || project.lessonsLearned;
  const futureImprovements =
    trans?.futureImprovements || project.futureImprovements;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-slate-950/90 border border-white/10 text-foreground max-w-3xl w-[95vw] max-h-[85vh] overflow-y-auto rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
        <DialogHeader className="text-left border-b border-white/5 pb-4 mb-6">
          <DialogTitle className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground flex items-center gap-3">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {project.title}
            </span>
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground font-medium pt-1">
            {subtitle}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8">
          {/* Overview & Tech Stack */}
          <div className="space-y-4">
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                <Compass className="h-4 w-4" />{" "}
                {t("Project Overview", "Ringkasan Proyek")}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {overview}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-1.5 shrink-0">
                <Zap className="h-3.5 w-3.5" />{" "}
                {t("Built With:", "Dibuat Dengan:")}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-bold py-1 px-3 bg-primary/10 border border-primary/20 text-primary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Problem vs Solution */}
          <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-white/5">
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />{" "}
                {t("The Challenge", "Tantangan")}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {problem}
              </p>
              <div className="bg-rose-500/5 border border-rose-500/10 p-3 rounded-lg mt-2">
                <p className="text-[9px] font-bold text-rose-400 uppercase tracking-widest mb-1">
                  {t("Research Insight", "Wawasan Penelitian")}
                </p>
                <p className="text-[10px] text-muted-foreground leading-relaxed">
                  {research}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />{" "}
                {t("Our Solution", "Solusi Kami")}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {solution}
              </p>
              <div className="bg-emerald-500/5 border border-emerald-500/10 p-3 rounded-lg mt-2">
                <p className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest mb-1">
                  {t("Architecture Overview", "Ikhtisar Arsitektur")}
                </p>
                <p className="text-[10px] text-muted-foreground leading-relaxed">
                  {architectureDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3 pt-6 border-t border-white/5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              {t("Key Features & Capabilities", "Fitur Utama & Kemampuan")}
            </h4>
            <ul className="grid sm:grid-cols-2 gap-3" role="list">
              {features.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Deep Dive (Challenges & Lessons) */}
          <div className="grid md:grid-cols-3 gap-4 pt-6 border-t border-white/5">
            <div className="space-y-1.5 p-3.5 bg-slate-900/40 rounded-xl border border-white/5">
              <h5 className="text-[10px] uppercase font-bold text-rose-400 flex items-center gap-1.5">
                <AlertTriangle className="h-3.5 w-3.5" />{" "}
                {t("Technical Challenge", "Tantangan Teknis")}
              </h5>
              <p className="text-[10px] text-muted-foreground leading-relaxed">
                {challenges}
              </p>
            </div>
            <div className="space-y-1.5 p-3.5 bg-slate-900/40 rounded-xl border border-white/5">
              <h5 className="text-[10px] uppercase font-bold text-emerald-400 flex items-center gap-1.5">
                <Lightbulb className="h-3.5 w-3.5" />{" "}
                {t("Key Takeaway", "Pelajaran Berharga")}
              </h5>
              <p className="text-[10px] text-muted-foreground leading-relaxed">
                {lessonsLearned}
              </p>
            </div>
            <div className="space-y-1.5 p-3.5 bg-slate-900/40 rounded-xl border border-white/5">
              <h5 className="text-[10px] uppercase font-bold text-indigo-400 flex items-center gap-1.5">
                <Compass className="h-3.5 w-3.5" />{" "}
                {t("Future Roadmap", "Peta Jalan Mendatang")}
              </h5>
              <p className="text-[10px] text-muted-foreground leading-relaxed">
                {futureImprovements}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-end gap-3 pt-6 border-t border-white/5">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-white/10 hover:bg-white/5 text-xs h-9 px-4 font-semibold"
              asChild
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="mr-2 h-4 w-4" />
                {t("Source Code", "Kode Sumber")}
              </a>
            </Button>
            {project.demoUrl && (
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-xs h-9 px-4 font-semibold shadow-lg hover:shadow-primary/20 transition-all"
                asChild
              >
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {t("Live Preview", "Demo Langsung")}
                </a>
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full text-xs h-9 px-4 text-muted-foreground hover:text-foreground font-medium"
              onClick={onClose}
            >
              {t("Close", "Tutup")}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
