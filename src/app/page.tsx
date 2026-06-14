import ContactForm from "@/components/ContactForm";
import HeroMesh from "@/components/HeroMesh";
import ProjectGrid from "@/components/ProjectCard";
import SkillsDisplay from "@/components/SkillsDisplay";

const metrics = [
  ["Advanced Engineering", "Full Stack", "React & Next.js Ecosystems"],
  ["Intelligence Architecture", "AI Integration", "Production Prompt Engineering"],
  ["Delivery", "6+", "Major Applications Deployed"],
  ["Ecosystem Contributions", "350+", "GitHub Stars"],
] as const;

const timelineBullets = [
  "Engineered data enrichment pipelines and programmatic lead sourcing workflows.",
  "Architected validation pipelines utilizing automated verification frameworks.",
  "Formulated custom Python script systems to eliminate manual data aggregation bottlenecks.",
] as const;

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A0A0F]/80">
      <HeroMesh />
      <div className="grid-mask fixed inset-0 -z-20" />

      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#00D4FF]/40 bg-[#00D4FF]/10 px-4 py-2 text-sm font-bold text-[#00D4FF]">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#00D4FF] shadow-[0_0_18px_#00D4FF]" />
            Available for Immediate Deployment
          </div>
          <p className="text-sm font-bold uppercase tracking-[0.5em] text-[#FF3366]">Lucknow, UP, India</p>
          <h1 className="mt-5 text-5xl font-black leading-tight md:text-7xl">Ashish Yadav</h1>
          <h2 className="mt-4 bg-gradient-to-r from-[#00D4FF] via-white to-[#7B2FBE] bg-clip-text text-2xl font-black text-transparent md:text-4xl">
            Full Stack Developer & AI Automation Engineer
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-300">
            I engineer resilient React, Next.js, Node.js, and Python systems that convert ambiguous business friction into automated,
            production-grade workflows. My web-slinger engineering philosophy is simple: map the network, connect the highest-leverage
            nodes, and ship elegant interfaces backed by intelligent automation.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {metrics.map(([label, value, detail]) => (
            <div key={label} className="glass-panel rounded-3xl p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{label}</p>
              <p className="mt-3 text-2xl font-black text-white">{value}</p>
              <p className="mt-2 text-sm text-[#00D4FF]">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#00D4FF]">Professional Timeline</p>
        <h2 className="mt-4 text-4xl font-black">TaskMinions — Data Systems & Automation Analyst</h2>
        <p className="mt-2 font-bold text-[#FF3366]">Present</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {timelineBullets.map((item) => (
            <div key={item} className="glass-panel rounded-3xl p-6 text-slate-300">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#FF3366]">Selected Platforms</p>
        <h2 className="mb-10 mt-4 text-4xl font-black">Project Systems</h2>
        <ProjectGrid />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#00D4FF]">Technical Core</p>
        <h2 className="mb-10 mt-4 text-4xl font-black">Stack Matrix</h2>
        <SkillsDisplay />
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#FF3366]">Contact Portal</p>
          <h2 className="mt-4 text-4xl font-black">Deploy Ashish on your next mission.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Send a concise brief and I will respond with the fastest path to architecture, automation, and delivery impact.
          </p>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
