"use client";

import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Users, BookOpen, ExternalLink, Loader2 } from "lucide-react";
import {
  fetchGitHubUser,
  fetchGitHubRepos,
  type GitHubUser,
  type GitHubRepo,
} from "@/lib/github";
import { RepoCard } from "./RepoCard";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export function GitHubSection() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    async function loadData() {
      try {
        const [userData, reposData] = await Promise.all([
          fetchGitHubUser(),
          fetchGitHubRepos(),
        ]);
        setUser(userData);
        setRepos(reposData);
      } catch (err) {
        console.error("Failed to load GitHub data:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <SectionWrapper id="github">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title={t("GitHub Activity", "Aktivitas GitHub")}
          subtitle={t(
            "Live repositories fetched from the GitHub API. Revalidated every hour.",
            "Repositori langsung yang diambil dari GitHub API. Diperbarui setiap jam."
          )}
        />

        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : user ? (
          <>
            {/* Profile banner */}
            <div className="glass rounded-2xl border border-border/50 p-6 mb-8 flex flex-col sm:flex-row items-center sm:items-start gap-5">
              {/* Avatar */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={user.avatar_url}
                alt={`${user.name} GitHub avatar`}
                className="h-16 w-16 rounded-full ring-2 ring-primary/20 flex-shrink-0"
                loading="lazy"
              />

              {/* Info */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg font-bold text-foreground">{user.name}</h3>
                <p className="text-sm text-primary font-medium mb-1">
                  @{user.login}
                </p>
                {user.bio && (
                  <p className="text-xs text-muted-foreground mb-3 max-w-lg">
                    {user.bio}
                  </p>
                )}

                <div className="flex items-center justify-center sm:justify-start gap-6 text-sm">
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <BookOpen
                      className="h-3.5 w-3.5 text-primary"
                      aria-hidden="true"
                    />
                    <span className="font-semibold text-foreground">
                      {user.public_repos}
                    </span>
                    <span className="text-xs"> {t("repos", "repositori")}</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Users
                      className="h-3.5 w-3.5 text-secondary"
                      aria-hidden="true"
                    />
                    <span className="font-semibold text-foreground">
                      {user.followers}
                    </span>
                    <span className="text-xs"> {t("followers", "pengikut")}</span>
                  </span>
                </div>
              </div>

              <Button
                size="sm"
                variant="outline"
                className="rounded-full border-border hover:border-primary/40 text-xs h-9 flex-shrink-0"
                asChild
              >
                <a
                  href={`https://github.com/${user.login}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View full GitHub profile"
                >
                  <FaGithub className="mr-2 h-4 w-4" aria-hidden="true" />
                  {t("View Profile", "Lihat Profil")}
                </a>
              </Button>
            </div>

            {/* Repository grid */}
            {repos.length > 0 ? (
              <>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {repos.map((repo, i) => (
                    <RepoCard key={repo.id} repo={repo} index={i} />
                  ))}
                </div>
                <div className="text-center">
                  <Button
                    variant="outline"
                    className="rounded-full border-border hover:border-primary/40 text-sm h-10 px-6"
                    asChild
                  >
                    <a
                      href={`https://github.com/${user?.login ?? "arkham55"}?tab=repositories`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                      {t("View All Repositories", "Lihat Semua Repositori")}
                    </a>
                  </Button>
                </div>
              </>
            ) : (
              /* Fallback state when API is unavailable */
              <div className="glass rounded-2xl border border-border/40 p-10 text-center">
                <FaGithub
                  className="h-10 w-10 text-muted-foreground mx-auto mb-3"
                  aria-hidden="true"
                />
                <p className="text-muted-foreground text-sm">
                  {t("Could not load GitHub data. View profile directly at ", "Gagal memuat data GitHub. Lihat profil langsung di ")}
                  <a
                    href={`https://github.com/${user?.login ?? "arkham55"}`}
                    className="text-primary underline underline-offset-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/{user?.login ?? "arkham55"}
                  </a>
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="glass rounded-2xl border border-border/40 p-10 text-center">
            <FaGithub
              className="h-10 w-10 text-muted-foreground mx-auto mb-3"
              aria-hidden="true"
            />
            <p className="text-muted-foreground text-sm">
              {t("Could not load GitHub data. View profile directly at ", "Gagal memuat data GitHub. Lihat profil langsung di ")}
              <a
                href="https://github.com/arkham55"
                className="text-primary underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/arkham55
              </a>
            </p>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
