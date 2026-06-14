"use client";

import { FormEvent, useRef, useState } from "react";

type Burst = {
  id: number;
  x: number;
  y: number;
};

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [bursts, setBursts] = useState<Burst[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    setBursts(
      Array.from({ length: 16 }, (_, id) => ({
        id,
        x: 15 + Math.random() * 70,
        y: 15 + Math.random() * 70,
      })),
    );
    formRef.current?.reset();
    window.setTimeout(() => setBursts([]), 900);
  };

  return (
    <form ref={formRef} onSubmit={submit} className="glass-panel relative overflow-hidden rounded-3xl p-6 md:p-8">
      <div className="pointer-events-none absolute inset-0">
        {bursts.map((burst) => (
          <span
            key={burst.id}
            className="absolute h-3 w-3 rounded-full bg-[#00D4FF]"
            style={{ left: `${burst.x}%`, top: `${burst.y}%`, animation: "orbBurst .9s ease-out forwards" }}
          />
        ))}
      </div>

      <div className="grid gap-5">
        <label className="text-sm font-bold text-slate-200">
          Name
          <input
            required
            name="name"
            autoComplete="name"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0A0A0F]/80 px-4 py-3 text-white outline-none transition focus:border-[#00D4FF]"
            placeholder="Your name"
          />
        </label>
        <label className="text-sm font-bold text-slate-200">
          Email
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0A0A0F]/80 px-4 py-3 text-white outline-none transition focus:border-[#00D4FF]"
            placeholder="you@example.com"
          />
        </label>
        <label className="text-sm font-bold text-slate-200">
          Message
          <textarea
            required
            name="message"
            rows={5}
            className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-[#0A0A0F]/80 px-4 py-3 text-white outline-none transition focus:border-[#00D4FF]"
            placeholder="Tell me about the mission."
          />
        </label>
        <button type="submit" className="rounded-full bg-gradient-to-r from-[#00D4FF] via-[#7B2FBE] to-[#FF3366] px-6 py-4 font-black text-white shadow-[0_0_35px_rgba(0,212,255,.25)] transition hover:scale-[1.02]">
          Transmit Brief
        </button>
        {sent ? (
          <p role="status" className="rounded-2xl border border-[#00D4FF]/30 bg-[#00D4FF]/10 p-4 text-sm font-bold text-[#00D4FF]">
            Signal locked. Your message has been staged locally for secure follow-up.
          </p>
        ) : null}
      </div>
    </form>
  );
}
