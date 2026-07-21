import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Download,
  Gauge,
  Wallet,
  Zap,
  ShieldCheck,
  CircuitBoard,
  Cpu,
  Cog,
  Sparkles,
  AlertTriangle,
  Scissors,
  Flame,
  Factory,
  TrendingDown,
  Leaf,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";

import heroImage from "@/assets/hero-actuator.jpg";
import logoAsset from "@/assets/spindledrive-logo.asset.json";

const SOCIAL_PREVIEW_URL = "https://spindle-smart-motion.lovable.app/spindledrive-github-social-preview.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: SOCIAL_PREVIEW_URL },
      { name: "twitter:image", content: SOCIAL_PREVIEW_URL },
    ],
  }),
  component: Landing,
});

const NAV = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "How It Works", href: "#how" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

function Landing() {
  return (
    <div className="relative overflow-x-hidden">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Impact />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-navy-deep/70 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img
            src={logoAsset.url}
            alt="SpindleDrive logo"
            className="h-10 w-10 shrink-0 rounded-md object-contain"
            width={40}
            height={40}
          />
          <div className="min-w-0 leading-tight">
            <div className="font-display truncate text-base font-extrabold tracking-tight sm:text-lg">
              SPINDLEDRIVE
            </div>
            <div className="truncate text-[10px] font-medium uppercase tracking-[0.18em] text-electric-glow/80">
              Smart Motion · Stronger Looms
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-silver/80 transition hover:bg-white/5 hover:text-white"
            >
              {n.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary ml-2 py-2 text-sm">
            Request a Demo
          </a>
        </nav>

        <button
          className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-white/10 bg-white/5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-navy-deep/95 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-silver/90 hover:bg-white/5"
              >
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2 text-sm">
              Request a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-electric-glow">
            <Sparkles className="h-3.5 w-3.5" /> Industry 4.0 Retrofit Platform
          </div>
          <h1 className="mt-6 font-display text-4xl leading-[1.05] font-extrabold sm:text-5xl lg:text-6xl">
            <span className="text-gradient">Transforming Traditional Looms</span>
            <br />
            into Smart Industry 4.0 Machines.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-silver/85 sm:text-lg">
            SpindleDrive is a modular, retrofittable smart rotary actuator that upgrades outdated
            mechanical power looms into high-precision, electronically controlled weaving machines
            at <span className="font-semibold text-white">1/10th the cost</span> of imported
            equipment.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Request a Demo <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#solution" className="btn-outline">
              <Download className="h-4 w-4" /> Download Pitch Deck
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-white/5 pt-8">
            {[
              { k: "10×", v: "Lower CapEx" },
              { k: "6 mo", v: "Payback" },
              { k: "<2 hr", v: "Install Time" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                  {s.k}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-silver/60">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="glass-card relative overflow-hidden rounded-3xl p-2">
            <img
              src={heroImage}
              alt="SpindleDrive smart rotary actuator mounted on a textile loom"
              width={1600}
              height={1200}
              className="h-auto w-full rounded-2xl"
            />
          </div>
          <div className="glass-card float-slow absolute -left-4 top-8 hidden rounded-2xl p-4 sm:block">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-innovation/20 text-innovation">
                <Gauge className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-silver/60">Tension</div>
                <div className="font-display text-base font-bold">200 Hz Loop</div>
              </div>
            </div>
          </div>
          <div
            className="glass-card float-slow absolute -bottom-4 right-4 hidden rounded-2xl p-4 sm:block"
            style={{ animationDelay: "1.2s" }}
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-electric/20 text-electric-glow">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-silver/60">Rating</div>
                <div className="font-display text-base font-bold">IP65 Sealed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROBLEM ---------------- */
function Problem() {
  const items = [
    {
      icon: Wallet,
      title: "High Capital Costs",
      body: "Imported automatic looms cost 3.5M–7M PKR — impossible for local factories to afford.",
    },
    {
      icon: Scissors,
      title: "Fabric Defects & Scrap",
      body: "Manual weight-and-lever systems cause tension sags and visible starting marks on cloth.",
    },
    {
      icon: Flame,
      title: "Energy Wastage",
      body: "Continuous mechanical friction brakes waste massive amounts of industrial electricity.",
    },
  ];
  return (
    <Section id="problem" eyebrow="Why We Exist" title="The reality inside Punjab's weaving sheds.">
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="glass-card glass-card-hover rounded-2xl p-7">
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-destructive/15 text-destructive">
              <it.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold">{it.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-silver/80">{it.body}</p>
            <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-wider text-destructive/80">
              <AlertTriangle className="h-3.5 w-3.5" /> Pain Point
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- SOLUTION ---------------- */
function Solution() {
  const features = [
    {
      icon: Gauge,
      title: "Closed-Loop Tension Control",
      body: "14-bit magnetic encoder & load cell feedback maintain mathematically perfect yarn tension 200 times per second.",
    },
    {
      icon: Wallet,
      title: "10× CapEx Savings",
      body: "Upgrade existing machinery for under 150,000 PKR instead of buying new imported machines.",
    },
    {
      icon: TrendingDown,
      title: "6-Month ROI",
      body: "Pays for itself through a 15–20% reduction in electricity bills and zero B-grade fabric scrap.",
    },
    {
      icon: ShieldCheck,
      title: "IP65 Lint-Proof Casing",
      body: "Rugged, vibration-isolated aluminum housing built to survive harsh, dusty textile mill environments.",
    },
  ];
  return (
    <Section
      id="solution"
      eyebrow="The SpindleDrive Advantage"
      title="The Smart Bolt-On Retrofit Kit."
      subtitle="Installs on existing loom frames in under 2 hours with zero factory tear-down."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {features.map((f) => (
          <div key={f.title} className="glass-card glass-card-hover rounded-2xl p-7">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-innovation/15 text-innovation">
                <f.icon className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-silver/80">{f.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
function HowItWorks() {
  const steps = [
    {
      icon: Gauge,
      title: "Sensor Reading",
      body: "Whip-roller load cell measures real-time warp thread tension.",
    },
    {
      icon: Cpu,
      title: "Smart FOC Processing",
      body: "Embedded microcontroller calculates exact torque requirements instantly.",
    },
    {
      icon: Cog,
      title: "Direct Actuation",
      body: "High-torque brushless DC motor with 50:1 planetary gearbox adjusts speed smoothly.",
    },
    {
      icon: CircuitBoard,
      title: "Flawless Fabric",
      body: "Eliminates starting marks and enables digital PPI tuning via touchscreen.",
    },
  ];
  return (
    <Section
      id="how"
      eyebrow="Technical Architecture"
      title="How SpindleDrive delivers precision, 200 times a second."
    >
      <div className="relative">
        <div
          className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent lg:block"
          aria-hidden
        />
        <ol className="grid gap-6 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <div className="glass-card glass-card-hover flex h-full flex-col rounded-2xl p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="relative grid h-14 w-14 place-items-center rounded-full border border-electric/40 bg-navy-deep text-electric-glow">
                    <s.icon className="h-6 w-6" />
                    <span className="pulse-ring absolute inset-0 rounded-full" aria-hidden />
                  </div>
                  <span className="font-display text-4xl font-extrabold text-electric/25">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-silver/80">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/* ---------------- IMPACT ---------------- */
function Impact() {
  const items = [
    {
      icon: Factory,
      title: "Built with Punjab's Supply Chain",
      body: "Designed and manufactured using Punjab's existing CNC and casting supply chains.",
    },
    {
      icon: TrendingDown,
      title: "40% Less Downtime",
      body: "Empowers local weavers to produce export-quality fabrics with far fewer stoppages.",
    },
    {
      icon: Leaf,
      title: "Energy-Positive Industry",
      body: "Supports energy sustainability across Pakistan's industrial manufacturing sector.",
    },
  ];
  return (
    <Section
      id="impact"
      eyebrow="Made for Punjab"
      title="Economic & local impact, engineered in."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="glass-card glass-card-hover rounded-2xl p-7">
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-electric/15 text-electric-glow">
              <it.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold">{it.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-silver/80">{it.body}</p>
          </div>
        ))}
      </div>

      <div className="glass-card mt-12 grid gap-6 rounded-3xl p-8 sm:grid-cols-4 sm:p-10">
        {[
          { k: "40%", v: "Downtime cut" },
          { k: "15–20%", v: "Energy savings" },
          { k: "150K", v: "PKR retrofit cost" },
          { k: "<2h", v: "Install per loom" },
        ].map((s) => (
          <div key={s.k} className="text-center">
            <div className="font-display text-3xl font-extrabold text-gradient sm:text-4xl">
              {s.k}
            </div>
            <div className="mt-2 text-xs uppercase tracking-widest text-silver/60">{s.v}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    factory: "",
    looms: "",
    city: "",
    phone: "",
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="glass-card overflow-hidden rounded-3xl">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_1fr]">
            <div className="border-b border-white/5 p-8 sm:p-12 lg:border-b-0 lg:border-r">
              <div className="text-xs font-semibold uppercase tracking-widest text-electric-glow">
                Get in Touch
              </div>
              <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Ready to Upgrade
                <br />
                <span className="text-gradient">Your Weaving Shed?</span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-silver/80 sm:text-base">
                Book a free site assessment. Our engineers will visit your factory, benchmark your
                looms, and quote a pilot retrofit.
              </p>

              <div className="mt-8 space-y-4 text-sm">
                <ContactLine icon={Mail} label="hello@spindledrive.com" />
                <ContactLine icon={Phone} label="+92 300 000 0000" />
                <ContactLine icon={MapPin} label="Faisalabad · Punjab · Pakistan" />
              </div>
            </div>

            <div className="p-8 sm:p-12">
              {submitted ? (
                <div className="flex h-full flex-col items-start justify-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-innovation/15 text-innovation">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-2xl font-bold">Request received.</h3>
                  <p className="text-sm text-silver/80">
                    Our team will call you within 48 hours to schedule your site assessment.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-4">
                  <Field
                    label="Full Name"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    required
                  />
                  <Field
                    label="Factory Name"
                    value={form.factory}
                    onChange={(v) => setForm({ ...form, factory: v })}
                    required
                  />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label="Number of Looms"
                      type="number"
                      value={form.looms}
                      onChange={(v) => setForm({ ...form, looms: v })}
                    />
                    <Field
                      label="City"
                      value={form.city}
                      onChange={(v) => setForm({ ...form, city: v })}
                    />
                  </div>
                  <Field
                    label="Phone Number"
                    type="tel"
                    value={form.phone}
                    onChange={(v) => setForm({ ...form, phone: v })}
                    required
                  />
                  <button type="submit" className="btn-primary mt-2 justify-center">
                    Book a Site Assessment <ArrowRight className="h-4 w-4" />
                  </button>
                  <p className="text-xs text-silver/50">
                    By submitting you agree to be contacted by our engineering team.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLine({
  icon: Icon,
  label,
}: {
  icon: typeof Mail;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/5 text-electric-glow">
        <Icon className="h-4 w-4" />
      </div>
      <span className="text-silver/90">{label}</span>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-silver/70">
        {label}
        {required && <span className="ml-1 text-innovation">*</span>}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        maxLength={120}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-silver/40 focus:border-electric focus:bg-white/10 focus:ring-2 focus:ring-electric/30"
      />
    </label>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-deep/60 py-10">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
        <div className="flex min-w-0 items-center gap-3">
          <img
            src={logoAsset.url}
            alt="SpindleDrive"
            width={36}
            height={36}
            className="h-9 w-9 shrink-0 rounded-md object-contain"
          />
          <div className="min-w-0">
            <div className="font-display truncate font-extrabold">SPINDLEDRIVE</div>
            <div className="truncate text-xs text-silver/60">
              Smart Motion · Stronger Looms · Modular smart actuator for textile loom automation.
            </div>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-silver/70">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-white">
              {n.label}
            </a>
          ))}
          <a href="mailto:hello@spindledrive.com" className="hover:text-white">
            Email
          </a>
        </nav>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-white/5 px-5 pt-6 text-xs text-silver/50 sm:px-8">
        © 2026 SpindleDrive — Proudly Built in Punjab.
      </div>
    </footer>
  );
}

/* ---------------- shared ---------------- */
function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-electric-glow">
            <Zap className="h-3 w-3" />
            {eyebrow}
          </div>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-sm text-silver/80 sm:text-base">{subtitle}</p>
          )}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
