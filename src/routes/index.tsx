import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef, type FormEvent, type ReactNode } from "react";
import { motion, useInView, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Play,
  Gauge,
  Wallet,
  ShieldCheck,
  CircuitBoard,
  Cpu,
  Cog,
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
  Radio,
  Layers,
  Wifi,
  Thermometer,
  Zap,
  Plus,
  Minus,
  Users,
  Wrench,
  Award,
  Rocket,
  Building2,
  Shirt,
  Package,
  Boxes,
  ChevronRight,
} from "lucide-react";

import heroImage from "@/assets/actuator-hero.jpg";
import logoAsset from "@/assets/spindledrive-logo.asset.json";

const SOCIAL_PREVIEW_URL =
  "https://spindle-smart-motion.lovable.app/spindledrive-github-social-preview.jpg";

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
  { label: "Product", href: "#product" },
  { label: "Specs", href: "#specs" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "FAQ", href: "#faq" },
];

function Landing() {
  return (
    <div className="relative overflow-x-hidden bg-white text-ink">
      <Nav />
      <Hero />
      <TrustBar />
      <Problem />
      <Solution />
      <ExplodedView />
      <Features />
      <Specs />
      <HowItWorks />
      <Applications />
      <Roadmap />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

/* ============================================================
   NAV
   ============================================================ */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-white/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
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
            <div className="font-display truncate text-[15px] font-extrabold tracking-tight text-ink sm:text-base">
              SPINDLEDRIVE
            </div>
            <div className="truncate text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
              Smart Motion · Stronger Looms
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink-soft transition hover:bg-brand-soft hover:text-brand-deep"
            >
              {n.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary ml-2 py-2 text-sm">
            Request Demo
          </a>
        </nav>

        <button
          className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-line bg-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-ink hover:bg-brand-soft"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 text-sm"
            >
              Request Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ============================================================
   HERO
   ============================================================ */
function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-70" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 right-[-20%] h-[600px] w-[600px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(0,87,217,0.25), transparent)" }}
        aria-hidden
      />
      <Particles />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <span className="chip">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            Industry 4.0 · Retrofit Platform
          </span>

          <h1 className="mt-6 font-display text-[2.4rem] leading-[1.05] font-extrabold text-ink sm:text-5xl lg:text-[3.75rem]">
            Transforming Traditional Looms into{" "}
            <span className="text-gradient">Smart Industry 4.0</span> Machines.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            SpindleDrive is a modular, retrofittable smart rotary actuator that
            upgrades mechanical power looms into high-precision, electronically
            controlled weaving machines — at{" "}
            <span className="font-semibold text-ink">1/10th the cost</span> of
            imported equipment.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Request Demo <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#solution" className="btn-outline">
              <Play className="h-4 w-4" /> Learn More
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-8">
            <Stat value={10} suffix="×" label="Lower CapEx" />
            <Stat value={6} suffix=" mo" label="Payback" />
            <Stat value={200} suffix=" Hz" label="Control Loop" />
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative"
        >
          <div className="relative aspect-square">
            {/* concentric rings */}
            <div
              className="absolute inset-6 rounded-full border border-dashed border-brand/30 spin-slow"
              aria-hidden
            />
            <div
              className="absolute inset-16 rounded-full border border-brand/15"
              aria-hidden
            />
            <div
              className="absolute inset-0 rounded-full opacity-60 blur-2xl"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(0,87,217,0.18), transparent 70%)",
              }}
              aria-hidden
            />

            <motion.img
              src={heroImage}
              alt="SpindleDrive smart rotary actuator"
              width={1408}
              height={1408}
              className="relative z-10 h-full w-full object-contain drop-shadow-2xl"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating meters */}
            <FloatingMeter
              className="left-0 top-8"
              icon={Gauge}
              tone="brand"
              label="Tension Loop"
              value="200 Hz"
              delay={0.4}
            />
            <FloatingMeter
              className="right-0 top-1/3"
              icon={Thermometer}
              tone="signal"
              label="Torque"
              value="12 N·m"
              delay={0.7}
            />
            <FloatingMeter
              className="bottom-6 left-8"
              icon={ShieldCheck}
              tone="brand"
              label="Enclosure"
              value="IP65"
              delay={1.0}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingMeter({
  className,
  icon: Icon,
  label,
  value,
  tone,
  delay = 0,
}: {
  className?: string;
  icon: React.ElementType;
  label: string;
  value: string;
  tone: "brand" | "signal";
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className={`absolute z-20 hidden sm:block ${className}`}
    >
      <div className="glass-card float-slow flex items-center gap-3 rounded-2xl px-4 py-3">
        <div
          className={`grid h-10 w-10 place-items-center rounded-lg ${
            tone === "brand"
              ? "bg-brand-soft text-brand"
              : "bg-signal-soft text-signal"
          }`}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-ink-soft">
            {label}
          </div>
          <div className="font-display text-sm font-bold text-ink">{value}</div>
        </div>
      </div>
    </motion.div>
  );
}

function Particles() {
  const dots = Array.from({ length: 18 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {dots.map((_, i) => {
        const left = (i * 53) % 100;
        const top = (i * 37) % 100;
        const size = 2 + (i % 3);
        const style = {
          left: `${left}%`,
          top: `${top}%`,
          width: size,
          height: size,
          "--dx": `${(i % 2 === 0 ? 1 : -1) * (30 + (i % 5) * 8)}px`,
          "--dy": `${-(50 + (i % 6) * 12)}px`,
          animation: `particle-drift ${8 + (i % 5)}s ease-out ${i * 0.4}s infinite`,
        } as React.CSSProperties;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-brand/40"
            style={style}
          />
        );
      })}
    </div>
  );
}

/* ============================================================
   TRUST BAR
   ============================================================ */
function TrustBar() {
  const items = [
    "Punjab Innovation Hub",
    "MADE IN PAKISTAN",
    "ISO 9001 · IN REVIEW",
    "PSDF PARTNER",
    "TDAP EXPORT READY",
  ];
  return (
    <div className="border-y border-line bg-surface/60">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 py-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft sm:px-8">
        {items.map((i) => (
          <span key={i} className="opacity-70 hover:opacity-100 transition">
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   COUNT-UP STAT
   ============================================================ */
function Stat({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (n) => Math.round(n).toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 1.4, ease: [0.2, 0.8, 0.2, 1] });
      return controls.stop;
    }
  }, [inView, count, value]);

  return (
    <div>
      <div className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
        <motion.span ref={ref}>{rounded}</motion.span>
        {suffix}
      </div>
      <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-ink-soft">
        {label}
      </div>
    </div>
  );
}

/* ============================================================
   SECTION SHELL
   ============================================================ */
function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  bg,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  bg?: "white" | "surface";
}) {
  return (
    <section id={id} className={`section-pad relative ${bg === "surface" ? "bg-surface" : "bg-white"}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            {eyebrow && <span className="chip">{eyebrow}</span>}
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
                {subtitle}
              </p>
            )}
          </div>
        </FadeUp>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}

function FadeUp({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ============================================================
   PROBLEM
   ============================================================ */
function Problem() {
  const items = [
    {
      icon: Wallet,
      title: "High Capital Costs",
      body: "Imported automatic looms cost 3.5M–7M PKR — impossible for local mills to afford at scale.",
      metric: "3.5M+ PKR",
    },
    {
      icon: Scissors,
      title: "Fabric Defects & Scrap",
      body: "Manual weight-and-lever tension causes visible starting marks, wasting 8–12% of output.",
      metric: "12% Scrap",
    },
    {
      icon: Flame,
      title: "Energy Wastage",
      body: "Mechanical friction brakes bleed industrial electricity — a fixed operating tax on every mill.",
      metric: "20% Loss",
    },
  ];
  return (
    <Section
      id="problem"
      eyebrow="Industry Problems"
      title="Punjab's weaving sector is stuck in the 1980s."
      subtitle="14,000+ shuttleless looms operate on decades-old mechanical controls. The cost of modernizing them, until now, has been prohibitive."
      bg="surface"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <FadeUp key={it.title} delay={i * 0.08}>
            <div className="glass-card glass-card-hover h-full rounded-2xl p-7">
              <div className="flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-signal-soft text-signal">
                  <it.icon className="h-6 w-6" />
                </div>
                <div className="font-display text-2xl font-extrabold text-signal">
                  {it.metric}
                </div>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-ink">
                {it.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{it.body}</p>
              <div className="mt-6 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-signal">
                <AlertTriangle className="h-3.5 w-3.5" /> Pain Point
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}

/* ============================================================
   SOLUTION
   ============================================================ */
function Solution() {
  return (
    <Section
      id="solution"
      eyebrow="The SpindleDrive Solution"
      title="The smart bolt-on retrofit kit."
      subtitle="Installs on existing loom frames in under two hours. No factory tear-down. No imports. Just precision."
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <FadeUp>
          <div className="relative">
            <div className="absolute inset-0 blueprint-grid-fine rounded-3xl opacity-70" aria-hidden />
            <div className="relative rounded-3xl border border-line bg-white p-8 shadow-soft">
              <img
                src={heroImage}
                alt="SpindleDrive actuator detail"
                loading="lazy"
                width={1408}
                height={1408}
                className="mx-auto h-auto w-full max-w-md object-contain"
              />
              <div className="pointer-events-none absolute inset-x-8 bottom-6 flex justify-between text-[10px] font-mono uppercase tracking-widest text-ink-soft">
                <span>Ø 120mm</span>
                <span>· 210mm ·</span>
                <span>2.4kg</span>
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="space-y-4">
            {[
              {
                icon: Gauge,
                title: "Closed-Loop Tension Control",
                body: "14-bit magnetic encoder + load-cell feedback maintains mathematically perfect yarn tension 200 times per second.",
              },
              {
                icon: Wallet,
                title: "10× CapEx Savings",
                body: "Upgrade existing machinery for under 150,000 PKR instead of buying a new imported machine at 3.5M+.",
              },
              {
                icon: TrendingDown,
                title: "6-Month ROI",
                body: "Pays for itself via 15–20% lower electricity bills and zero B-grade fabric scrap output.",
              },
              {
                icon: ShieldCheck,
                title: "IP65 Lint-Proof Casing",
                body: "Vibration-isolated aluminum housing built to survive harsh, dusty textile mill environments.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="group flex gap-5 rounded-2xl border border-transparent bg-white p-5 transition hover:border-line hover:shadow-soft"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand transition group-hover:bg-brand group-hover:text-white">
                  <f.icon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-bold text-ink">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}

/* ============================================================
   EXPLODED PRODUCT VIEW
   ============================================================ */
function ExplodedView() {
  const [exploded, setExploded] = useState(false);
  const parts = [
    {
      key: "housing",
      label: "IP65 Aluminum Housing",
      spec: "Anodized · Vibration Isolated",
      x: 0,
      y: exploded ? -120 : 0,
      icon: ShieldCheck,
    },
    {
      key: "stator",
      label: "BLDC Stator",
      spec: "3-phase · FOC Control",
      x: exploded ? -160 : 0,
      y: exploded ? -30 : 0,
      icon: Zap,
    },
    {
      key: "gearbox",
      label: "50:1 Planetary Gearbox",
      spec: "Precision Ground Steel",
      x: exploded ? 160 : 0,
      y: exploded ? -30 : 0,
      icon: Cog,
    },
    {
      key: "encoder",
      label: "14-bit Magnetic Encoder",
      spec: "Absolute Position · 16,384 CPR",
      x: exploded ? -160 : 0,
      y: exploded ? 100 : 0,
      icon: Radio,
    },
    {
      key: "controller",
      label: "Edge Controller",
      spec: "ARM Cortex-M7 · Modbus RTU",
      x: exploded ? 160 : 0,
      y: exploded ? 100 : 0,
      icon: Cpu,
    },
    {
      key: "shaft",
      label: "Output Shaft",
      spec: "Keyed · 20mm hardened",
      x: 0,
      y: exploded ? 200 : 0,
      icon: Layers,
    },
  ];

  return (
    <Section
      id="product"
      eyebrow="Interactive Product View"
      title="Every part, engineered on purpose."
      subtitle="Tap the button to see the exploded architecture of the SpindleDrive smart actuator."
      bg="surface"
    >
      <div className="mb-8 flex justify-center">
        <button
          onClick={() => setExploded((v) => !v)}
          className="btn-outline"
          aria-pressed={exploded}
        >
          {exploded ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          {exploded ? "Collapse view" : "Explode view"}
        </button>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_320px] lg:items-center">
        <div className="relative aspect-square overflow-hidden rounded-3xl border border-line bg-white shadow-soft">
          <div className="absolute inset-0 blueprint-grid-fine opacity-60" aria-hidden />
          <motion.img
            src={heroImage}
            alt="SpindleDrive core"
            className="absolute inset-0 m-auto h-2/3 w-2/3 object-contain"
            animate={{ scale: exploded ? 0.55 : 1, rotate: exploded ? -8 : 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          />

          {parts.map((p, i) => (
            <motion.div
              key={p.key}
              className="absolute left-1/2 top-1/2"
              animate={{ x: p.x, y: p.y, opacity: exploded ? 1 : 0 }}
              transition={{ duration: 0.7, delay: exploded ? i * 0.04 : 0, ease: [0.2, 0.8, 0.2, 1] }}
              style={{ translateX: "-50%", translateY: "-50%" }}
            >
              <div className="glass-card flex items-center gap-3 rounded-xl px-3 py-2 text-left">
                <div className="grid h-8 w-8 place-items-center rounded-md bg-brand-soft text-brand">
                  <p.icon className="h-4 w-4" />
                </div>
                <div className="pr-1">
                  <div className="text-[11px] font-bold text-ink">{p.label}</div>
                  <div className="text-[10px] uppercase tracking-wider text-ink-soft">
                    {p.spec}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-3">
          {parts.map((p) => (
            <div
              key={p.key}
              className="flex items-start gap-3 rounded-xl border border-line bg-white p-4"
            >
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
                <p.icon className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-bold text-ink">{p.label}</div>
                <div className="text-xs text-ink-soft">{p.spec}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
   FEATURES
   ============================================================ */
function Features() {
  const features = [
    { icon: Gauge, title: "200 Hz Closed-Loop", body: "Sub-millisecond tension correction." },
    { icon: Cpu, title: "Field-Oriented Control", body: "Silky torque delivery, no cogging." },
    { icon: Wifi, title: "Modbus / MQTT", body: "OPC-UA ready for factory SCADA." },
    { icon: ShieldCheck, title: "IP65 Sealed", body: "Lint, dust, humidity — no problem." },
    { icon: Layers, title: "Modular Firmware", body: "OTA updates over factory Wi-Fi." },
    { icon: Zap, title: "Regenerative Braking", body: "Feeds energy back to the grid." },
    { icon: Radio, title: "14-bit Encoder", body: "16,384 CPR absolute position." },
    { icon: Wrench, title: "Tool-Free Install", body: "Bolt-on. Zero factory downtime." },
  ];
  return (
    <Section
      id="features"
      eyebrow="Key Features"
      title="Built for the mills that built Punjab."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <FadeUp key={f.title} delay={(i % 4) * 0.05}>
            <div className="glass-card glass-card-hover h-full rounded-2xl p-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-ink">
                {f.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{f.body}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}

/* ============================================================
   SPECIFICATIONS TABLE
   ============================================================ */
function Specs() {
  const rows = [
    ["Continuous Torque", "12 N·m", "Peak: 24 N·m"],
    ["Rated Speed", "3,000 RPM", "No-load: 4,200 RPM"],
    ["Input Voltage", "48 VDC", "24–60 VDC range"],
    ["Control Loop", "200 Hz", "FOC / SVPWM"],
    ["Encoder Resolution", "14-bit / 16,384 CPR", "Magnetic absolute"],
    ["Gearbox Ratio", "50 : 1", "Planetary, hardened steel"],
    ["Communication", "Modbus RTU · CAN · MQTT", "OPC-UA (Q3 2026)"],
    ["Enclosure Rating", "IP65", "Vibration: 5G / 10–500 Hz"],
    ["Operating Temp", "-10°C to +65°C", "Passive convection"],
    ["Weight", "2.4 kg", "Housing: 6061-T6 aluminum"],
  ];
  return (
    <Section
      id="specs"
      eyebrow="Technical Specifications"
      title="Precision, quantified."
      bg="surface"
    >
      <FadeUp>
        <div className="glass-card overflow-hidden rounded-2xl">
          <div className="grid grid-cols-[1.2fr_1fr_1.2fr] gap-4 border-b border-line bg-brand-soft/60 px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-brand-deep">
            <div>Parameter</div>
            <div>Value</div>
            <div className="hidden sm:block">Detail</div>
          </div>
          <div className="divide-y divide-line">
            {rows.map(([p, v, d]) => (
              <div
                key={p}
                className="grid grid-cols-[1.2fr_1fr_1.2fr] items-center gap-4 px-6 py-4 text-sm transition hover:bg-brand-soft/30"
              >
                <div className="font-medium text-ink">{p}</div>
                <div className="font-mono font-semibold text-brand">{v}</div>
                <div className="hidden text-ink-soft sm:block">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}

/* ============================================================
   HOW IT WORKS
   ============================================================ */
function HowItWorks() {
  const steps = [
    { icon: Gauge, title: "Sensor Reading", body: "Whip-roller load cell measures real-time warp thread tension." },
    { icon: Cpu, title: "Smart FOC Processing", body: "Embedded microcontroller calculates exact torque, 200×/sec." },
    { icon: Cog, title: "Direct Actuation", body: "BLDC motor + 50:1 planetary gearbox adjusts speed smoothly." },
    { icon: CircuitBoard, title: "Flawless Fabric", body: "Zero starting marks. Digital PPI tuning via touchscreen." },
  ];
  return (
    <Section id="how" eyebrow="How It Works" title="Precision, 200 times per second.">
      <div className="relative">
        <div
          className="absolute left-0 right-0 top-16 hidden h-px lg:block"
          aria-hidden
        >
          <div className="shimmer-line h-full w-full" />
        </div>
        <ol className="grid gap-6 lg:grid-cols-4">
          {steps.map((s, i) => (
            <FadeUp key={s.title} delay={i * 0.1}>
              <li className="relative">
                <div className="glass-card glass-card-hover flex h-full flex-col rounded-2xl p-7">
                  <div className="flex items-center justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl border border-brand/30 bg-white text-brand shadow-soft">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <span className="font-display text-4xl font-extrabold text-brand/20">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
                  {i < steps.length - 1 && (
                    <ChevronRight className="absolute -right-5 top-16 hidden h-6 w-6 text-brand/40 lg:block" />
                  )}
                </div>
              </li>
            </FadeUp>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/* ============================================================
   APPLICATIONS
   ============================================================ */
function Applications() {
  const apps = [
    { icon: Shirt, title: "Denim & Apparel", body: "Consistent PPI for export-grade denim mills." },
    { icon: Package, title: "Home Textiles", body: "Bedsheets, curtains, and furnishing fabrics." },
    { icon: Boxes, title: "Technical Textiles", body: "Geotextiles, filtration, and industrial cloth." },
    { icon: Building2, title: "Contract Manufacturing", body: "OEM retrofit programs for mill groups." },
  ];
  return (
    <Section
      id="applications"
      eyebrow="Applications"
      title="One platform. Every loom category."
      bg="surface"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {apps.map((a, i) => (
          <FadeUp key={a.title} delay={i * 0.06}>
            <div className="glass-card glass-card-hover h-full rounded-2xl p-6">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-signal-soft text-signal">
                <a.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-ink">{a.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{a.body}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}

/* ============================================================
   ROADMAP
   ============================================================ */
function Roadmap() {
  const items = [
    { q: "Q1 2026", title: "Alpha Pilot", body: "5 looms retrofitted in Faisalabad. Data collection begins.", status: "done" },
    { q: "Q2 2026", title: "Beta Release", body: "50-mill rollout with closed-loop tension firmware v1.0.", status: "active" },
    { q: "Q3 2026", title: "OPC-UA + Cloud", body: "Factory dashboard, predictive maintenance, OTA updates.", status: "next" },
    { q: "Q4 2026", title: "Export Program", body: "Bangladesh & Turkey mill partnerships via TDAP.", status: "next" },
    { q: "2027", title: "Full Loom Platform", body: "Weft-insertion actuator + jacquard control module.", status: "next" },
  ];
  return (
    <Section id="roadmap" eyebrow="Product Roadmap" title="From pilot to platform.">
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-line md:left-1/2" aria-hidden />
        <ol className="space-y-8">
          {items.map((it, i) => {
            const rightSide = i % 2 === 1;
            return (
              <FadeUp key={it.q} delay={i * 0.06}>
                <li
                  className={`relative grid gap-4 pl-12 md:grid-cols-2 md:pl-0 ${
                    rightSide ? "md:[&>*:first-child]:col-start-2" : ""
                  }`}
                >
                  <span
                    className={`absolute left-2.5 top-3 grid h-4 w-4 place-items-center rounded-full border-2 md:left-1/2 md:-translate-x-1/2 ${
                      it.status === "done"
                        ? "border-brand bg-brand"
                        : it.status === "active"
                        ? "border-signal bg-white"
                        : "border-line bg-white"
                    }`}
                    aria-hidden
                  >
                    {it.status === "active" && (
                      <span className="h-2 w-2 animate-ping rounded-full bg-signal" />
                    )}
                  </span>
                  <div
                    className={`glass-card rounded-2xl p-6 ${
                      rightSide ? "md:ml-8" : "md:mr-8"
                    }`}
                  >
                    <div
                      className={`chip ${it.status === "active" ? "chip-signal" : ""}`}
                    >
                      {it.q}
                    </div>
                    <h3 className="mt-3 font-display text-lg font-bold text-ink">
                      {it.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{it.body}</p>
                  </div>
                </li>
              </FadeUp>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}

/* ============================================================
   TEAM
   ============================================================ */
function Team() {
  const team = [
    { name: "Ahmad Raza", role: "CEO · Mechatronics Lead", bio: "10+ years in industrial automation. Ex-Descon.", icon: Rocket },
    { name: "Sana Malik", role: "CTO · Embedded Systems", bio: "Firmware & FOC control specialist. NUST alum.", icon: Cpu },
    { name: "Bilal Chaudhry", role: "COO · Textile Domain", bio: "3rd-gen mill operator in Faisalabad.", icon: Factory },
    { name: "Dr. Kamran Ali", role: "Advisor · Power Electronics", bio: "Professor, UET Lahore. IEEE Senior Member.", icon: Award },
  ];
  return (
    <Section id="team" eyebrow="Team" title="Engineers who grew up on shop floors." bg="surface">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((m, i) => (
          <FadeUp key={m.name} delay={i * 0.06}>
            <div className="glass-card glass-card-hover h-full rounded-2xl p-6 text-center">
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-brand-soft to-white text-brand shadow-soft">
                <m.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-ink">{m.name}</h3>
              <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-brand">
                {m.role}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{m.bio}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}

/* ============================================================
   FAQ
   ============================================================ */
function FAQ() {
  const items = [
    {
      q: "How long does a SpindleDrive install take on an existing loom?",
      a: "Under two hours per loom. Our field engineers bolt the actuator onto existing frames, wire the control unit, and calibrate tension — no factory shutdown required.",
    },
    {
      q: "Will it work with my Sulzer, Picanol, or Tsudakoma loom?",
      a: "Yes. SpindleDrive ships with mounting adapters for all major shuttleless loom families produced between 1975 and today.",
    },
    {
      q: "What's the total cost per loom?",
      a: "Retail is under 150,000 PKR per actuator, including installation, one year of support, and OTA firmware updates.",
    },
    {
      q: "How does it save 15–20% energy?",
      a: "By eliminating mechanical friction brakes and using regenerative braking, kinetic energy is fed back into the mill's DC bus instead of being wasted as heat.",
    },
    {
      q: "Do you offer financing or lease-to-own?",
      a: "Yes. We partner with SME Bank Punjab and select mill groups to offer 6- and 12-month payment plans.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" eyebrow="FAQ" title="Answers for the mill floor.">
      <div className="mx-auto max-w-3xl space-y-3">
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <FadeUp key={it.q} delay={i * 0.04}>
              <div
                className={`glass-card overflow-hidden rounded-2xl transition ${
                  isOpen ? "border-brand/40 shadow-lift" : ""
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-display text-base font-bold text-ink sm:text-lg">
                    {it.q}
                  </span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line transition ${
                      isOpen ? "bg-brand text-white" : "bg-white text-brand"
                    }`}
                    aria-hidden
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-ink-soft sm:text-base">
                        {it.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeUp>
          );
        })}
      </div>
    </Section>
  );
}

/* ============================================================
   CONTACT
   ============================================================ */
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

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section id="contact" className="section-pad relative bg-surface">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeUp>
          <div className="glass-card overflow-hidden rounded-3xl">
            <div className="grid gap-0 lg:grid-cols-[1fr_1.1fr]">
              <div className="relative overflow-hidden border-b border-line bg-gradient-to-br from-brand to-brand-deep p-8 text-white sm:p-12 lg:border-b-0 lg:border-r">
                <div className="absolute inset-0 blueprint-grid-fine opacity-15" aria-hidden />
                <div className="relative">
                  <span className="chip chip-signal !text-signal">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
                    Book a Free Site Assessment
                  </span>
                  <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                    Ready to Upgrade Your Weaving Shed?
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
                    Our engineers will visit your factory, benchmark your looms,
                    and quote a pilot retrofit — free of cost.
                  </p>

                  <div className="mt-10 space-y-4 text-sm">
                    <ContactLine icon={Mail} label="hello@spindledrive.com" />
                    <ContactLine icon={Phone} label="+92 300 000 0000" />
                    <ContactLine icon={MapPin} label="Faisalabad · Punjab · Pakistan" />
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-12">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="ok"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex h-full flex-col items-start justify-center gap-4"
                    >
                      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-signal-soft text-signal">
                        <CheckCircle2 className="h-7 w-7" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-ink">
                        Request received.
                      </h3>
                      <p className="text-sm text-ink-soft">
                        Our team will call you within 48 hours to schedule your
                        site assessment.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={onSubmit}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Your Name" value={form.name} onChange={set("name")} required />
                        <Field label="Factory Name" value={form.factory} onChange={set("factory")} required />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Number of Looms" type="number" value={form.looms} onChange={set("looms")} required />
                        <Field label="City" value={form.city} onChange={set("city")} required />
                      </div>
                      <Field label="Phone (WhatsApp)" type="tel" value={form.phone} onChange={set("phone")} required />
                      <button type="submit" className="btn-primary w-full sm:w-auto">
                        Send Request <ArrowRight className="h-4 w-4" />
                      </button>
                      <p className="text-xs text-ink-soft">
                        We reply within 48 hours. No spam — engineers only.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function Field({
  label,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-soft">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-1.5 w-full rounded-lg border border-line bg-white px-4 py-2.5 text-sm text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </label>
  );
}

function ContactLine({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-9 w-9 place-items-center rounded-lg bg-white/15 text-white">
        <Icon className="h-4 w-4" />
      </div>
      <span className="text-white/90">{label}</span>
    </div>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logoAsset.url}
                alt="SpindleDrive"
                className="h-10 w-10 rounded-md object-contain"
                width={40}
                height={40}
              />
              <div className="font-display text-lg font-extrabold tracking-tight text-ink">
                SPINDLEDRIVE
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
              Smart Motion. Stronger Looms. A modular smart actuator platform
              upgrading Punjab's textile industry to Industry 4.0.
            </p>
          </div>

          <FooterCol
            title="Product"
            links={[
              ["Solution", "#solution"],
              ["Exploded View", "#product"],
              ["Specifications", "#specs"],
              ["Applications", "#applications"],
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              ["Roadmap", "#roadmap"],
              ["Team", "#team"],
              ["FAQ", "#faq"],
              ["Contact", "#contact"],
            ]}
          />
          <FooterCol
            title="Contact"
            links={[
              ["hello@spindledrive.com", "mailto:hello@spindledrive.com"],
              ["+92 300 000 0000", "tel:+923000000000"],
              ["Faisalabad, Punjab", "#contact"],
            ]}
          />
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-line pt-8 text-xs text-ink-soft sm:flex-row sm:items-center">
          <div>© 2026 SpindleDrive — Proudly Built in Punjab.</div>
          <div className="flex items-center gap-2">
            <Users className="h-3.5 w-3.5" />
            <span>An engineering startup for the Pakistani textile sector.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <div className="text-[11px] font-bold uppercase tracking-widest text-ink">
        {title}
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="text-ink-soft transition hover:text-brand">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
