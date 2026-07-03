/** GitHub language colour palette (subset of most common languages). */
export const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  PHP: "#4F5D95",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Blade: "#f7523f",
  Vue: "#41b883",
  Go: "#00ADD8",
  Rust: "#dea584",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  Ruby: "#701516",
  Swift: "#F05138",
};

export function getLangColor(lang: string | null): string {
  if (!lang) return "#6e7681";
  return LANGUAGE_COLORS[lang] ?? "#6e7681";
}
