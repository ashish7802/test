type ProjectVisual = "levitas" | "aegis" | "universe" | "launchpad" | "toolkit" | "scraper";

type Project = {
  core: string;
  href: string;
  label: string;
  title: string;
  visual: ProjectVisual;
};

const projects: Project[] = [
  {
    title: "Project Levitas",
    label: "High Priority Platform",
    core: "Multi-body gravity research ecosystem and aerospace simulation environment featuring real-time N-body gravitational math, aerodynamic coefficient systems, and a telemetry analyzer.",
    href: "https://vercel.app",
    visual: "levitas",
  },
  {
    title: "Project Aegis ATC",
    label: "High Priority Platform",
    core: "Multi-threaded Air Traffic Control airspace simulation architecture integrating terminal radar modeling, conflict alerts, and a fast-rendering WebGL/Canvas workspace pipeline.",
    href: "https://air-traffic-control-simulator.vercel.app/",
    visual: "aegis",
  },
  {
    title: "dev-universe",
    label: "Strategic Open Source Map",
    core: "Production repository discovery environment sorting developer infrastructure components across Web Engineering, Artificial Intelligence, and DevOps pipelines.",
    href: "https://project-levitas.vercel.app/",
    visual: "universe",
  },
  {
    title: "dev-launchpad",
    label: "Source Framework",
    core: "Open-source configuration kit compiling automated workflow modules, baseline AI configurations, template suites, and productivity checklists.",
    href: "https://github.com/ashish7802/dev-launchpad",
    visual: "launchpad",
  },
  {
    title: "llm-engineer-toolkit",
    label: "Source Framework",
    core: "Production-grade utility kit compiling optimized prompts, robust RAG patterns, structured FastAPI boilerplates, and orchestration tools for language model applications.",
    href: "https://github.com/ashish7802/llm-engineer-toolkit",
    visual: "toolkit",
  },
  {
    title: "maps-lead-scraper",
    label: "Source Framework",
    core: "Native data extraction asset using Playwright headless execution loops for asynchronous location parsing and programmatic CSV/JSON exporting.",
    href: "https://github.com/ashish7802/maps-lead-scraper",
    visual: "scraper",
  },
];

function ProjectVisualImage({ type, title }: { type: ProjectVisual; title: string }) {
  const shared = {
    className: "hologram-ring h-full w-full drop-shadow-[0_0_20px_rgba(0,212,255,.25)]",
    role: "img",
    "aria-label": `${title} technical preview`,
    viewBox: "0 0 240 150",
  } as const;

  if (type === "levitas") {
    return (
      <svg {...shared}>
        <defs>
          <radialGradient id="levitas-planet" cx="50%" cy="45%" r="55%">
            <stop stopColor="#00D4FF" />
            <stop offset=".55" stopColor="#7B2FBE" />
            <stop offset="1" stopColor="#0A0A0F" />
          </radialGradient>
        </defs>
        <ellipse cx="120" cy="74" rx="88" ry="34" fill="none" stroke="#00D4FF" strokeOpacity=".42" />
        <ellipse cx="120" cy="74" rx="64" ry="24" fill="none" stroke="#FF3366" strokeOpacity=".48" transform="rotate(-18 120 74)" />
        <circle cx="120" cy="74" r="27" fill="url(#levitas-planet)" />
        <circle cx="56" cy="48" r="9" fill="#00D4FF" opacity=".86" />
        <circle cx="184" cy="100" r="12" fill="#FF3366" opacity=".8" />
        <path d="M42 124 H198 M54 114 H178 M78 104 H206" stroke="#fff" strokeOpacity=".16" />
        <path d="M34 30 C86 62 136 24 206 50" fill="none" stroke="#fff" strokeOpacity=".18" />
      </svg>
    );
  }

  if (type === "aegis") {
    return (
      <svg {...shared}>
        <circle cx="120" cy="76" r="54" fill="none" stroke="#00D4FF" strokeOpacity=".55" />
        <circle cx="120" cy="76" r="32" fill="none" stroke="#7B2FBE" strokeOpacity=".6" />
        <path d="M120 76 L196 48" stroke="#00D4FF" strokeWidth="2" />
        <path d="M42 76 H198 M120 20 V132" stroke="#fff" strokeOpacity=".14" />
        <path d="M74 44 l18 8 -18 8 5-8z M160 98 l22 10 -22 10 6-10z" fill="#FF3366" />
        <path d="M86 104 C112 88 138 86 170 72" fill="none" stroke="#00D4FF" strokeDasharray="4 5" />
        <rect x="24" y="112" width="78" height="18" rx="4" fill="#12121A" stroke="#00D4FF" strokeOpacity=".5" />
        <path d="M34 122 H92" stroke="#00D4FF" strokeOpacity=".65" />
      </svg>
    );
  }

  if (type === "universe") {
    return (
      <svg {...shared}>
        <path d="M120 22 L194 64 V118 L120 140 L46 118 V64z" fill="none" stroke="#7B2FBE" strokeOpacity=".55" />
        <circle cx="120" cy="78" r="16" fill="#00D4FF" opacity=".86" />
        {([
          [70, 58, "#FF3366"],
          [174, 58, "#00D4FF"],
          [82, 112, "#7B2FBE"],
          [166, 112, "#FF3366"],
          [120, 126, "#00D4FF"],
        ] as const).map(([cx, cy, color]) => (
          <g key={`${cx}-${cy}`}>
            <line x1="120" y1="78" x2={cx} y2={cy} stroke="#fff" strokeOpacity=".18" />
            <circle cx={cx} cy={cy} r="10" fill={color} opacity=".82" />
          </g>
        ))}
        <path d="M56 32 H98 M142 32 H184 M42 86 H78 M164 86 H208" stroke="#fff" strokeOpacity=".16" />
      </svg>
    );
  }

  if (type === "launchpad") {
    return (
      <svg {...shared}>
        <path d="M120 22 C148 44 158 82 140 120 H100 C82 82 92 44 120 22z" fill="#12121A" stroke="#00D4FF" strokeWidth="2" />
        <circle cx="120" cy="68" r="15" fill="#7B2FBE" stroke="#fff" strokeOpacity=".4" />
        <path d="M96 118 L72 136 L104 128 M144 118 L168 136 L136 128" fill="none" stroke="#FF3366" strokeWidth="3" />
        <path d="M112 120 C110 132 116 140 120 144 C124 140 130 132 128 120" fill="#FF3366" opacity=".9" />
        <rect x="34" y="34" width="44" height="16" rx="4" fill="#00D4FF" opacity=".22" />
        <rect x="162" y="42" width="48" height="16" rx="4" fill="#7B2FBE" opacity=".25" />
        <path d="M44 42 H68 M172 50 H202" stroke="#fff" strokeOpacity=".5" />
      </svg>
    );
  }

  if (type === "toolkit") {
    return (
      <svg {...shared}>
        <rect x="38" y="28" width="164" height="94" rx="14" fill="#12121A" stroke="#00D4FF" strokeOpacity=".6" />
        <path d="M66 62 C72 42 96 42 102 62 C122 64 124 92 104 96 H70 C48 94 46 66 66 62z" fill="#7B2FBE" opacity=".46" />
        <path d="M126 52 H176 M126 72 H188 M126 92 H164" stroke="#00D4FF" strokeWidth="4" strokeLinecap="round" />
        <circle cx="76" cy="78" r="5" fill="#00D4FF" />
        <circle cx="94" cy="78" r="5" fill="#FF3366" />
        <path d="M76 78 H94 M85 66 V92" stroke="#fff" strokeOpacity=".35" />
      </svg>
    );
  }

  return (
    <svg {...shared}>
      <path d="M40 100 C68 54 96 78 120 48 C152 14 194 50 204 92" fill="none" stroke="#00D4FF" strokeWidth="4" strokeLinecap="round" />
      <path d="M40 100 H204 V124 H40z" fill="#12121A" stroke="#7B2FBE" strokeOpacity=".6" />
      <circle cx="78" cy="78" r="10" fill="#FF3366" />
      <circle cx="126" cy="50" r="10" fill="#00D4FF" />
      <circle cx="178" cy="66" r="10" fill="#7B2FBE" />
      <path d="M58 114 H112 M128 114 H188" stroke="#fff" strokeOpacity=".24" />
      <path d="M78 78 L126 50 L178 66" stroke="#fff" strokeOpacity=".22" />
    </svg>
  );
}

export default function ProjectGrid() {
  return (
    <div className="depth-stage grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <article
          key={project.title}
          className="glass-panel glass-panel-3d energy-sweep group relative overflow-hidden rounded-3xl p-6 transition duration-500 hover:border-cyan-300/50"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#00D4FF] via-[#7B2FBE] to-[#FF3366]" />
          <div className="mb-6 flex h-40 items-center justify-center rounded-2xl border border-white/10 bg-[#12121A]/70">
            <ProjectVisualImage type={project.visual} title={project.title} />
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
