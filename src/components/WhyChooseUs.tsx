import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const features = [
  {
    title: "15+ Years Experience",
    description: "Deep industry roots",
  },
  {
    title: "20+ Bank Tie-ups",
    description: "Pan-India reach",
  },
  {
    title: "Fastest Loan Processing",
    description: "Approved in 7 days",
  },
  {
    title: "Zero Hidden Charges",
    description: "100% transparent",
  },
  {
    title: "Dedicated Manager",
    description: "Personal assistance",
  },
  {
    title: "Legal Team Onboard",
    description: "Full documentation",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Scroll reveal animation
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    // Respect accessibility preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-choose-us"
      className="relative w-full overflow-hidden bg-white text-[#191e27]"
    >
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-24 h-[420px] w-[420px]
          rounded-full bg-blue-50/60 blur-[100px]"
      />

      {/* Navbar-aligned content container */}
      <div
        className="relative mx-auto w-full max-w-[1360px]
          px-5 pb-16 pt-[68px]
          sm:px-8 sm:pb-20 sm:pt-[76px]
          lg:px-10 lg:pb-[84px] lg:pt-[76px]
          xl:px-12"
      >
        <div
          className="grid grid-cols-1 items-center
            gap-12 lg:grid-cols-[1fr_1fr]
            lg:gap-[58px] xl:gap-[68px]"
        >
          {/* LEFT: Heading and feature cards */}
          <div
            className={`min-w-0 transition-all duration-700 ease-out
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
          >
            {/* Eyebrow */}
            <p
              className="mb-[15px] text-[12px] font-semibold uppercase
                leading-5 tracking-[1.4px] text-[#1765ff]
                sm:text-[13px]"
            >
              Why Choose Us
            </p>

            {/* Main heading */}
            <h2
              className="max-w-[640px] text-[36px] font-extrabold
                leading-[1.04] tracking-[-1.5px] text-[#191e27]
                sm:text-[46px] sm:leading-[1.04]
                lg:text-[50px] xl:text-[52px]
                xl:tracking-[-1.8px]"
            >
              The Smartest Choice
              <span className="block text-[#1765ff]">
                For Your Property
              </span>
            </h2>

            {/* Supporting text */}
            <p
              className="mt-[24px] max-w-[490px] text-[15px]
                font-normal leading-[1.8] text-[#718096]
                sm:text-[17px] sm:leading-[1.7]"
            >
              Every advantage is designed to save you time, money, and
              stress — from search to registration.
            </p>

            {/* Feature cards */}
            <div
              className="mt-[34px] grid grid-cols-1 gap-3
                min-[420px]:grid-cols-2 sm:mt-[42px]
                sm:gap-[13px]"
            >
              {features.map((feature, index) => (
                <article
                  key={feature.title}
                  className={`group relative flex min-h-[108px]
                    flex-col justify-center overflow-hidden
                    rounded-[18px] border border-[#e8edf3]
                    bg-[#f8f9fb] px-[17px] py-[15px]
                    transition-all duration-300 ease-out
                    hover:-translate-y-1
                    hover:border-[#c8dcff]
                    hover:bg-white
                    hover:shadow-[0_10px_28px_rgba(23,101,255,0.09)]
                    sm:min-h-[116px] sm:px-[17px]
                    ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-5 opacity-0"
                    }`}
                  style={{
                    transitionDelay: isVisible
                      ? `${120 + index * 90}ms`
                      : "0ms",
                  }}
                >
                  {/* Blue accent line */}
                  <span
                    aria-hidden="true"
                    className="mb-[14px] block h-[26px] w-[6px]
                      origin-top rounded-full
                      bg-gradient-to-b from-[#1765ff] to-[#7eb2ff]
                      transition-all duration-300
                      group-hover:h-[32px]
                      group-hover:shadow-[0_0_12px_rgba(23,101,255,0.35)]"
                  />

                  {/* Feature title */}
                  <h3
                    className="text-[13px] font-semibold
                      leading-[1.45] tracking-[-0.15px]
                      text-[#111827] sm:text-[14px]"
                  >
                    {feature.title}
                  </h3>

                  {/* Feature description */}
                  <p
                    className="mt-[3px] text-[12px]
                      leading-[1.5] text-[#718096]
                      transition-colors duration-300
                      group-hover:text-[#52647d]
                      sm:text-[13px]"
                  >
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* RIGHT: Statistics panel */}
          <div
            className={`relative min-w-0
              transition-all duration-1000 ease-out
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            style={{
              transitionDelay: isVisible ? "180ms" : "0ms",
            }}
          >
            {/* Main blue panel */}
            <div
              className="group relative flex min-h-[340px]
                flex-col items-center justify-center
                overflow-hidden rounded-[25px]
                bg-gradient-to-br from-[#2470f8]
                via-[#1264f5] to-[#2169e5]
                px-5 py-10 text-center text-white
                shadow-sm transition-all duration-500
                hover:shadow-[0_24px_55px_rgba(23,101,255,0.20)]
                sm:min-h-[380px] sm:rounded-[27px]
                sm:px-8 sm:py-12
                lg:min-h-[396px] lg:px-10"
            >
              {/* Decorative light effect */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-24
                  h-[260px] w-[260px] rounded-full
                  bg-white/[0.07] blur-3xl
                  transition-transform duration-700
                  group-hover:translate-x-[-25px]
                  group-hover:translate-y-[20px]"
              />

              <div className="relative z-10 flex w-full flex-col items-center">
                {/* Main number */}
                <div
                  className="text-[94px] font-extrabold
                    leading-[0.98] tracking-[-5px] text-white
                    sm:text-[118px] sm:tracking-[-6px]
                    lg:text-[136px] xl:text-[144px]"
                >
                  1000
                </div>

                {/* Yellow highlight */}
                <h3
                  className="mt-[17px] text-[22px] font-bold
                    leading-tight tracking-[-0.5px]
                    text-[#ffbd00]
                    sm:mt-[20px] sm:text-[27px]"
                >
                  + Satisfied Clients
                </h3>

                {/* Description */}
                <p
                  className="mx-auto mt-[15px] max-w-[365px]
                    text-[14px] font-normal leading-[1.55]
                    text-white/70 sm:text-[15px]"
                >
                  Across residential, commercial, institutional, and
                  NPA property deals
                </p>

                {/* Properties link */}
                <a
                  href="/properties"
                  className="group/link mt-[29px] inline-flex
                    items-center gap-[9px] rounded-full
                    px-4 py-2 text-[14px] font-medium
                    text-white/90 transition-all duration-300
                    hover:bg-white/10 hover:text-white
                    focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-white"
                >
                  View our properties

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.8}
                    aria-hidden="true"
                    className="transition-transform duration-300
                      group-hover/link:translate-x-1
                      group-hover/link:-translate-y-1"
                  />
                </a>
              </div>
            </div>

            {/* Deals badge: normal flow on mobile to avoid covering the properties link;
                keep the original floating overlap on tablet and desktop. */}
            <div
              className="relative z-20 mx-auto mt-4
                flex min-w-[168px] w-fit
                flex-col items-center justify-center
                rounded-[17px] bg-[#ffbd00]
                px-5 py-[15px] text-center
                shadow-[0_14px_28px_rgba(0,0,0,0.12)]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_18px_32px_rgba(0,0,0,0.18)]
                sm:absolute sm:bottom-[-12px] sm:left-[-26px]
                sm:mx-0 sm:mt-0 sm:min-w-[168px] sm:translate-x-0
                sm:items-start sm:px-[25px]
                sm:py-[17px] sm:text-left
                lg:left-[-26px]"
            >
              <p
                className="whitespace-nowrap text-[25px]
                  font-extrabold leading-[1.15]
                  tracking-[-0.7px] text-[#10151d]
                  sm:text-[26px]"
              >
                ₹500Cr+
              </p>

              <p className="mt-[4px] whitespace-nowrap text-[12px] font-medium text-[#292929]">
                Total Deals Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
