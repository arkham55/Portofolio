"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { projectsData, type Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetailModal } from "./ProjectDetailModal";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { useLanguage } from "@/context/LanguageContext";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useLanguage();

  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseDetails = () => {
    setModalOpen(false);
    // Timeout to clear project after transition closes
    setTimeout(() => setSelectedProject(null), 200);
  };

  return (
    <SectionWrapper id="projects">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title={t("Featured Projects", "Proyek Unggulan")}
          subtitle={t(
            "A selection of software systems and database engines I have built, showing problems solved and technical decisions.",
            "Pilihan sistem perangkat lunak dan database yang saya bangun, menampilkan masalah yang diselesaikan dan keputusan teknis."
          )}
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          {projectsData.map((project) => (
            <motion.div key={project.id} variants={item}>
              <ProjectCard
                project={project}
                onOpenDetails={handleOpenDetails}
              />
            </motion.div>
          ))}
        </motion.div>

        <ProjectDetailModal
          project={selectedProject}
          isOpen={modalOpen}
          onClose={handleCloseDetails}
        />
      </div>
    </SectionWrapper>
  );
}
