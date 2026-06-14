type Project = {
  core: string;
  href: string;
  label: string;
  title: string;
};

const projects: Project[] = [
  {
    title: "Project Levitas",
    label: "High Priority Platform",
    core: "Multi-body gravity research ecosystem and aerospace simulation environment featuring real-time N-body gravitational math, aerodynamic coefficient systems, and a telemetry analyzer.",
    href: "https://vercel.app",
  },
  {
    title: "Project Aegis ATC",
    label: "High Priority Platform",
    core: "Multi-threaded Air Traffic Control airspace simulation architecture integrating terminal radar modeling, conflict alerts, and a fast-rendering WebGL/Canvas workspace pipeline.",
    href: "https://air-traffic-control-simulator.vercel.app/",
  },
  {
    title: "dev-universe",
    label: "Strategic Open Source Map",
    core: "Production repository discovery environment sorting developer infrastructure components across Web Engineering, Artificial Intelligence, and DevOps pipelines.",
    href: "https://project-levitas.vercel.app/",
  },
  {
    title: "dev-launchpad",
    label: "Source Framework",
    core: "Open-source configuration kit compiling automated workflow modules, baseline AI configurations, template suites, and productivity checklists.",
    href: "https://github.com/ashish7802/dev-launchpad",
  },
  {
    title: "llm-engineer-toolkit",
    label: "Source Framework",
    core: "Production-grade utility kit compiling optimized prompts, robust RAG patterns, structured FastAPI boilerplates, and orchestration tools for language model applications.",
    href: "https://github.com/ashish7802/llm-engineer-toolkit",
  },
  {
    title: "maps-lead-scraper",
    label: "Source Framework",
    core: "Native data extraction asset using Playwright headless execution loops for asynchronous location parsing and programmatic CSV/JSON exporting.",
    href: "https://github.com/ashish7802/maps-lead-scraper",
  },
];

export default function ProjectGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, index) => (
        <article
          key={project.title}
          className="glass-panel group relative overflow-hidden rounded-3xl p-6 transition duration-500 hover:-translate-y-2 hover:border-cyan-300/50"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#00D4FF] via-[#7B2FBE] to-[#FF3366]" />
          <div className="mb-6 flex h-40 items-center justify-center rounded-2xl border border-white/10 bg-[#12121A]/70">
            <svg viewBox="0 0 240 150" className="h-full w-full" role="img" aria-label={`${project.title} system diagram`}>
              <defs>
                <linearGradient id={`project-gradient-${index}`} x1="0" x2="1">
                  <stop stopColor="#00D4FF" />
                  <stop offset=".55" stopColor="#7B2FBE" />
                  <stop offset="1" stopColor="#FF3366" />
                </linearGradient>
              </defs>
              <path
                d="M20 120 C70 20 160 20 220 118"
                fill="none"
                stroke={`url(#project-gradient-${index})`}
                strokeWidth="2"
                opacity=".85"
              />
              <circle cx="60" cy="75" r="18" fill="none" stroke="#00D4FF" opacity=".75" />
              <circle cx="132" cy="55" r="28" fill="none" stroke="#7B2FBE" opacity=".8" />
              <circle cx="184" cy="86" r="15" fill="none" stroke="#FF3366" opacity=".8" />
              <path d="M60 75 L132 55 L184 86 L220 118" stroke="#fff" strokeOpacity=".22" fill="none" />
            </svg>
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#00D4FF]">{project.label}</p>
          <h3 className="mt-3 text-2xl font-black text-white">{project.title}</h3>
          <p className="mt-4 min-h-28 text-sm leading-7 text-slate-300">{project.core}</p>
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full border border-[#00D4FF]/60 px-5 py-3 text-sm font-bold text-white transition hover:bg-[#00D4FF] hover:text-[#0A0A0F]"
          >
            Launch Link
          </a>
        </article>
      ))}
    </div>
  );
}
