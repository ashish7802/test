type StackGroup = {
  category: string;
  skills: string[];
};

const stack: StackGroup[] = [
  {
    category: "Front-End Architecture",
    skills: ["React.js", "Next.js", "TailwindCSS", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    category: "Back-End Systems",
    skills: ["Node.js", "Express.js", "Python Core", "RESTful API Engineering"],
  },
  { category: "Persistence Layers", skills: ["MongoDB", "PostgreSQL", "SQLite"] },
  {
    category: "Automation & Engineering Tools",
    skills: ["Git", "GitHub", "Playwright Automation", "CLI Architecture", "npm execution"],
  },
  {
    category: "Applied AI Frameworks",
    skills: ["LLM APIs Integration", "Production Prompt Engineering", "Web Scraping Engines", "Orchestration Scripts"],
  },
  {
    category: "Interface Integrations",
    skills: ["Google Maps API", "Google Sheets Cloud API", "Slack Webhooks Engine"],
  },
];

export default function SkillsDisplay() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {stack.map((group) => (
        <section
          key={group.category}
          className="glass-panel group rounded-3xl p-6 transition duration-500 hover:border-[#FF3366]/50"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-[#00D4FF] shadow-[0_0_22px_#00D4FF] group-hover:animate-pulse" />
            <h3 className="text-lg font-black text-white">{group.category}</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-sm text-slate-200 transition group-hover:border-[#00D4FF]/40"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
