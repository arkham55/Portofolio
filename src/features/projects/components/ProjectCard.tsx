"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { type Project, projectsTranslationId } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

const SNIPPETS: Record<string, { filename: string; code: React.ReactNode }> = {
  "harvest-estimator": {
    filename: "EstimatorController.php",
    code: (
      <pre className="text-slate-300 font-mono text-[9px] sm:text-[10px] leading-normal select-none w-full text-left">
        <span className="text-pink-400">public function</span> <span className="text-blue-400">estimate</span><span className="text-slate-400">(Request </span><span className="text-indigo-300">$request</span><span className="text-slate-400">) {"{"}</span>{"\n"}
        <span className="text-indigo-300">  $area</span> <span className="text-slate-400">= </span><span className="text-indigo-300">$request</span><span className="text-slate-400">-&gt;</span><span className="text-blue-400">input</span><span className="text-slate-400">(</span><span className="text-emerald-300">&apos;field_area&apos;</span><span className="text-slate-400">);</span>{"\n"}
        <span className="text-indigo-300">  $factor</span> <span className="text-slate-400">= </span><span className="text-indigo-300">$request</span><span className="text-slate-400">-&gt;</span><span className="text-blue-400">input</span><span className="text-slate-400">(</span><span className="text-emerald-300">&apos;crop_factor&apos;</span><span className="text-slate-400">);</span>{"\n\n"}
        <span className="text-slate-500">  // Estimate harvest in tons</span>{"\n"}
        <span className="text-indigo-300">  $yield</span> <span className="text-slate-400">= (</span><span className="text-indigo-300">$area</span> <span className="text-slate-400">* </span><span className="text-indigo-300">$factor</span><span className="text-slate-400">) / </span><span className="text-yellow-400">1000</span><span className="text-slate-400">;</span>{"\n"}
        <span className="text-pink-400">  return</span> <span className="text-blue-400">view</span><span className="text-slate-400">(</span><span className="text-emerald-300">&apos;harvest.result&apos;</span><span className="text-slate-400">, </span><span className="text-blue-400">compact</span><span className="text-slate-400">(</span><span className="text-emerald-300">&apos;yield&apos;</span><span className="text-slate-400">));</span>{"\n"}
        <span className="text-slate-400">{"}"}</span>
      </pre>
    ),
  },
  "sistem-pendataan-lab": {
    filename: "LabLogController.php",
    code: (
      <pre className="text-slate-300 font-mono text-[9px] sm:text-[10px] leading-normal select-none w-full text-left">
        <span className="text-pink-400">public function</span> <span className="text-blue-400">registerLog</span><span className="text-slate-400">(Request </span><span className="text-indigo-300">$request</span><span className="text-slate-400">) {"{"}</span>{"\n"}
        <span className="text-slate-500">  // Log student laboratory visit</span>{"\n"}
        <span className="text-indigo-300">  $log</span> <span className="text-slate-400">= </span><span className="text-yellow-400">LabLog</span><span className="text-slate-400">::</span><span className="text-blue-400">create</span><span className="text-slate-400">([</span>{"\n"}
        <span className="text-emerald-300">    &apos;student_id&apos;</span> <span className="text-slate-400">=&gt; </span><span className="text-blue-400">Auth</span><span className="text-slate-400">::</span><span className="text-blue-400">id</span><span className="text-slate-400">(),</span>{"\n"}
        <span className="text-emerald-300">    &apos;lab_id&apos;</span>     <span className="text-slate-400">=&gt; </span><span className="text-indigo-300">$request</span><span className="text-slate-400">-&gt;</span><span className="text-slate-300">lab_id</span><span className="text-slate-400">,</span>{"\n"}
        <span className="text-emerald-300">    &apos;purpose&apos;</span>    <span className="text-slate-400">=&gt; </span><span className="text-indigo-300">$request</span><span className="text-slate-400">-&gt;</span><span className="text-slate-300">purpose</span><span className="text-slate-400">,</span>{"\n"}
        <span className="text-emerald-300">    &apos;time_in&apos;</span>    <span className="text-slate-400">=&gt; </span><span className="text-blue-400">now</span><span className="text-slate-400">()</span>{"\n"}
        <span className="text-slate-400">  ]);</span>{"\n"}
        <span className="text-pink-400">  return</span> <span className="text-blue-400">redirect</span><span className="text-slate-400">()-&gt;</span><span className="text-blue-400">back</span><span className="text-slate-400">();</span>{"\n"}
        <span className="text-slate-400">{"}"}</span>
      </pre>
    ),
  },
  "sistem-kasir": {
    filename: "CashierController.php",
    code: (
      <pre className="text-slate-300 font-mono text-[9px] sm:text-[10px] leading-normal select-none w-full text-left">
        <span className="text-pink-400">public function</span> <span className="text-blue-400">checkout</span><span className="text-slate-400">(Request </span><span className="text-indigo-300">$request</span><span className="text-slate-400">) {"{"}</span>{"\n"}
        <span className="text-slate-500">  // Process Minimarket POS checkout</span>{"\n"}
        <span className="text-pink-400">  DB</span><span className="text-slate-400">::</span><span className="text-blue-400">transaction</span><span className="text-slate-400">(</span><span className="text-pink-400">function</span><span className="text-slate-400">() </span><span className="text-pink-400">use</span><span className="text-slate-400"> (</span><span className="text-indigo-300">$request</span><span className="text-slate-400">) {"{"}</span>{"\n"}
        <span className="text-yellow-400">    $order</span> <span className="text-slate-400">= </span><span className="text-yellow-400">Order</span><span className="text-slate-400">::</span><span className="text-blue-400">create</span><span className="text-slate-400">([</span><span className="text-emerald-300">&apos;total&apos;</span> <span className="text-slate-400">=&gt; </span><span className="text-indigo-300">$request</span><span className="text-slate-400">-&gt;</span><span className="text-slate-300">total</span><span className="text-slate-400">]);</span>{"\n"}
        <span className="text-yellow-400">    $order</span><span className="text-slate-400">-&gt;</span><span className="text-blue-400">deductInventory</span><span className="text-slate-400">();</span>{"\n"}
        <span className="text-slate-400">  {"}"});</span>{"\n"}
        <span className="text-pink-400">  return</span> <span className="text-blue-400">response</span><span className="text-slate-400">()-&gt;</span><span className="text-blue-400">json</span><span className="text-slate-400">([</span><span className="text-emerald-300">&apos;success&apos;</span> <span className="text-slate-400">=&gt; </span><span className="text-pink-400">true</span><span className="text-slate-400">]);</span>{"\n"}
        <span className="text-slate-400">{"}"}</span>
      </pre>
    ),
  },
  "sistem-rekomendasi-laptop": {
    filename: "app.py",
    code: (
      <pre className="text-slate-300 font-mono text-[9px] sm:text-[10px] leading-normal select-none w-full text-left">
        <span className="text-pink-400">@app.route</span><span className="text-slate-400">(</span><span className="text-emerald-300">&apos;/recommend&apos;</span><span className="text-slate-400">, methods=[</span><span className="text-emerald-300">&apos;POST&apos;</span><span className="text-slate-400">])</span>{"\n"}
        <span className="text-pink-400">def</span> <span className="text-blue-400">recommend_laptop</span><span className="text-slate-400">():</span>{"\n"}
        <span className="text-indigo-300">    budget</span> <span className="text-slate-400">= float(request.form[</span><span className="text-emerald-300">&apos;budget&apos;</span><span className="text-slate-400">])</span>{"\n"}
        <span className="text-indigo-300">    laptops</span> <span className="text-slate-400">= Laptop.</span><span className="text-blue-400">query</span><span className="text-slate-400">.</span><span className="text-blue-400">filter</span><span className="text-slate-400">(Laptop.price &lt;= budget).</span><span className="text-blue-400">all</span><span className="text-slate-400">()</span>{"\n"}
        <span className="text-pink-400">    return</span> <span className="text-blue-400">render_template</span><span className="text-slate-400">(</span><span className="text-emerald-300">&apos;results.html&apos;</span><span className="text-slate-400">, items=laptops)</span>
      </pre>
    ),
  },
  "edubadget": {
    filename: "predictor.py",
    code: (
      <pre className="text-slate-300 font-mono text-[9px] sm:text-[10px] leading-normal select-none w-full text-left">
        <span className="text-pink-400">def</span> <span className="text-blue-400">predict_spending</span><span className="text-slate-400">(income, lifestyle_index):</span>{"\n"}
        <span className="text-slate-500">    # Load pre-trained model and predict budget limits</span>{"\n"}
        <span className="text-indigo-300">    model</span> <span className="text-slate-400">= joblib.</span><span className="text-blue-400">load</span><span className="text-slate-400">(</span><span className="text-emerald-300">&apos;ml/budget_model.pkl&apos;</span><span className="text-slate-400">)</span>{"\n"}
        <span className="text-indigo-300">    features</span> <span className="text-slate-400">= np.</span><span className="text-blue-400">array</span><span className="text-slate-400">([[income, lifestyle_index]])</span>{"\n"}
        <span className="text-pink-400">    return</span> <span className="text-indigo-300">model</span><span className="text-slate-400">.</span><span className="text-blue-400">predict</span><span className="text-slate-400">(features)[</span><span className="text-yellow-400">0</span><span className="text-slate-400">]</span>
      </pre>
    ),
  },
};

export function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  const snippetInfo = SNIPPETS[project.id];
  const { language } = useLanguage();
  const trans = language === "id" ? projectsTranslationId[project.id] : null;
  const subtitle = trans?.subtitle || project.subtitle;
  const overview = trans?.overview || project.overview;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="h-full flex w-full"
    >
      <div
        className="cyber-panel p-5 sm:p-6 flex flex-col justify-between overflow-hidden group cursor-pointer w-full"
        onClick={() => onOpenDetails(project)}
      >
        <div className="space-y-4">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-extrabold text-foreground tracking-tight group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-[10px] text-accent font-semibold tracking-wider uppercase">
              {"// "}
              {subtitle}
            </p>
          </div>
          
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
            {overview}
          </p>

          {/* IDE/Terminal mockup window */}
          <div className="border border-white/10 rounded-xl overflow-hidden bg-slate-950/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] w-full">
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-slate-900/50">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-rose-500/80" />
                <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[9px] text-muted-foreground font-mono">
                {snippetInfo?.filename || "index.js"}
              </span>
              <div className="w-8" />
            </div>
            <div className="p-3.5 overflow-x-auto min-h-[110px] flex items-center justify-start">
              {snippetInfo?.code}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 mt-4 border-t border-white/5">
          <div className="flex flex-wrap gap-1 max-w-[65%]">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[8px] font-bold uppercase tracking-wider py-0.5 px-2 bg-primary/5 border border-primary/20 text-primary rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => onOpenDetails(project)}
              className="h-7 w-7 rounded-lg border border-primary/20 flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/50 transition-colors"
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
