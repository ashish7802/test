const stack = [
  ["Front-End Architecture", ["React.js", "Next.js", "TailwindCSS", "JavaScript (ES6+)", "HTML5", "CSS3"]],
  ["Back-End Systems", ["Node.js", "Express.js", "Python Core", "RESTful API Engineering"]],
  ["Persistence Layers", ["MongoDB", "PostgreSQL", "SQLite"]],
  ["Automation & Engineering Tools", ["Git", "GitHub", "Playwright Automation", "CLI Architecture", "npm execution"]],
  ["Applied AI Frameworks", ["LLM APIs Integration", "Production Prompt Engineering", "Web Scraping Engines", "Orchestration Scripts"]],
  ["Interface Integrations", ["Google Maps API", "Google Sheets Cloud API", "Slack Webhooks Engine"]],
];

export default function SkillsDisplay() {
  return <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{stack.map(([category, skills]) => <section key={category as string} className="glass-panel group rounded-3xl p-6 transition duration-500 hover:border-[#FF3366]/50"><div className="mb-5 flex items-center gap-3"><span className="h-3 w-3 rounded-full bg-[#00D4FF] shadow-[0_0_22px_#00D4FF] group-hover:animate-pulse"/><h3 className="text-lg font-black text-white">{category as string}</h3></div><div className="flex flex-wrap gap-3">{(skills as string[]).map((skill) => <span key={skill} className="rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-sm text-slate-200 transition group-hover:border-[#00D4FF]/40">{skill}</span>)}</div></section>)}</div>;
}
