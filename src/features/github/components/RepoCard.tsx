"use client";

import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { getLangColor } from "@/lib/languageColors";
import type { GitHubRepo } from "@/lib/github";

interface RepoCardProps {
  repo: GitHubRepo;
  index: number;
}

export function RepoCard({ repo, index }: RepoCardProps) {
  const langColor = getLangColor(repo.language);
  const updatedAt = new Date(repo.updated_at).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${repo.name} repository on GitHub`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }}
      whileHover={{ y: -4 }}
      className="glass border border-border/50 hover:border-primary/30 rounded-2xl p-5 flex flex-col gap-3 group transition-colors duration-200"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
          {repo.name}
        </h3>
        <ExternalLink
          className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-hidden="true"
        />
      </div>

      {/* Description */}
      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 flex-1">
        {repo.description ?? "No description provided."}
      </p>

      {/* Topics */}
      {repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {repo.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="text-[10px] px-2 py-0.5 rounded-full border border-primary/20 text-primary/70 bg-primary/5"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      {/* Footer stats */}
      <div className="flex items-center justify-between pt-1 border-t border-border/30">
        <div className="flex items-center gap-3">
          {/* Language dot */}
          {repo.language && (
            <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <span
                className="h-2.5 w-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: langColor }}
                aria-hidden="true"
              />
              {repo.language}
            </span>
          )}
          {/* Stars */}
          {repo.stargazers_count > 0 && (
            <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
              <Star className="h-3 w-3" aria-hidden="true" />
              {repo.stargazers_count}
            </span>
          )}
          {/* Forks */}
          {repo.forks_count > 0 && (
            <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
              <GitFork className="h-3 w-3" aria-hidden="true" />
              {repo.forks_count}
            </span>
          )}
        </div>
        <span className="text-[10px] text-muted-foreground/60">
          {updatedAt}
        </span>
      </div>
    </motion.a>
  );
}
