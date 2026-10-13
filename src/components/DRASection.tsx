import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Gavel,
  CircleCheck,
  ArrowRight,
  Phone,
} from "lucide-react";
import EnquiryModal from "./EnquiryModal";

const DRA_IMAGE =
  "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=85";

const features = [
  "Authorized Debt Recovery Agency for all banks & NBFCs",
  "Recovery strictly under RBI & SARFAESI guidelines",
  "Soft recovery, hard recovery & legal notice support",
  "Field investigations, tracking & borrower locate",
  "Property possession, valuation & auction support",
  "One-Time Settlement (OTS) & NPA account resolution",
];

const statistics = [
  { value: "20+", label: "Banks Served" },
  { value: "₹500Cr+", label: "Debt Recovered" },
  { value: "15+", label: "Years Experience" },
  { value: "100%", label: "RBI-Compliant" },
];

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
}

function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const hiddenTransform = {
    up: "translate3d(0, 28px, 0)",
    left: "translate3d(-32px, 0, 0)",
    right: "translate3d(32px, 0, 0)",
    scale: "scale(0.96)",
  }[direction];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0, 0, 0) scale(1)" : hiddenTransform,
        transition: `opacity 750ms ease ${delay}ms, transform 750ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function DRASection() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <section
      id="dra"
      aria-labelledby="dra-heading"
      className="relative isolate w-full overflow-hidden bg-gradient-to-br from-[#4d0c0c] via-[#84201e] to-[#191923] text-white"
    >
      {/* Decorative background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-red-500/10 blur-[100px]"
      />

      <div className="mx-auto w-full max-w-[1360px] px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16 xl:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12 xl:gap-[52px]">
          {/* LEFT COLUMN */}
          <div className="min-w-0">
            {/* Profile badge */}
            <Reveal direction="up">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/15 px-4 py-2 text-xs font-bold tracking-[0.07em] text-red-100 sm:text-sm">
                <Gavel size={16} className="text-[#FFBE00]" />
                OUR MAIN PROFILE
              </div>
            </Reveal>

            {/* Main heading */}
            <Reveal delay={100} direction="left">
              <h2
                id="dra-heading"
                className="max-w-[650px] text-[34px] font-extrabold leading-[1.04] tracking-[-0.035em] sm:text-[42px] md:text-[48px] lg:text-[46px] xl:text-[52px]"
              >
                Debt Recovery Agency{" "}
                <span className="text-[#FFBE00]">(DRA)</span> for All Banks
              </h2>
            </Reveal>

            {/* Description */}
            <Reveal delay={180}>
              <p className="mt-5 max-w-[560px] text-[15px] leading-[1.8] text-white/80 sm:text-base sm:leading-[1.75]">
                SGP Promoters is a licensed Debt Recovery Agency providing
                professional NPA account recovery services for all banks
                and financial institutions — strictly under applicable
                regulatory guidelines, with a fast, ethical, and compliant
                process.
              </p>
            </Reveal>

            {/* Feature cards */}
            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((feature, index) => (
                <Reveal
                  key={feature}
                  delay={220 + index * 90}
                  direction="up"
                  className="h-full"
                >
                  <div className="flex h-full min-h-[68px] items-start gap-3 rounded-[14px] border border-white/10 bg-white/[0.055] px-3.5 py-3.5 transition-colors duration-300 hover:border-[#FFBE00]/40 hover:bg-white/[0.09] sm:min-h-[68px] sm:px-3.5">
                    <CircleCheck
                      size={20}
                      strokeWidth={2}
                      className="mt-0.5 shrink-0 text-[#FFBE00]"
                    />

                    <span className="text-sm font-medium leading-[1.45] text-white/90 sm:text-[14px]">
                      {feature}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* CTA buttons */}
            <Reveal delay={300} direction="up">
              <div className="mt-7 flex flex-col gap-3 min-[440px]:flex-row min-[440px]:flex-wrap">
                <button
                  type="button"
                  onClick={() => setIsEnquiryOpen(true)}
                  className="group inline-flex min-h-[49px] items-center justify-center gap-3 rounded-xl bg-[#FFBE00] px-5 py-3 text-center text-sm font-bold text-gray-950 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#f4b500] hover:shadow-xl sm:px-6 sm:text-[15px]"
                >
                  Engage Our DRA Services
                  <ArrowRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                <a
                  href="tel:+919787747775"
                  className="inline-flex min-h-[49px] items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/[0.025] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-[#FFBE00]/60 hover:bg-white/10 sm:min-w-[220px] sm:px-6 sm:text-[15px]"
                >
                  <Phone size={17} />
                  +91 97877 47775
                </a>
              </div>
            </Reveal>
          </div>

          {/* RIGHT COLUMN */}
          <div className="min-w-0">
            {/* Main image */}
            <Reveal direction="right" delay={150}>
              <div className="group relative h-[240px] overflow-hidden rounded-[24px] border border-white/10 bg-[#411b20] sm:h-[320px] lg:h-[300px] xl:h-[344px]">
                <img
                  src={DRA_IMAGE}
                  alt="Professional preparing financial and recovery documentation"
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.035]"
                />

                {/* Dark red overlay, similar to the reference */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#360d13]/90 via-[#591c22]/20 to-[#210b10]/10" />
              </div>
            </Reveal>

            {/* Statistics */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              {statistics.map((stat, index) => (
                <Reveal
                  key={stat.label}
                  delay={300 + index * 100}
                  direction="up"
                  className="h-full"
                >
                  <article className="flex min-h-[88px] flex-col items-center justify-center rounded-[18px] border border-white/10 bg-white/[0.105] px-2 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#FFBE00]/35 hover:bg-white/[0.14] sm:min-h-[88px] sm:rounded-[18px] lg:min-h-[88px] xl:min-h-[88px]">
                    <p className="text-[25px] font-extrabold leading-tight tracking-tight text-[#FFBE00] sm:text-[28px]">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-xs font-medium text-white/70 sm:text-[13px]">
                      {stat.label}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />

    </section>
  );
}
