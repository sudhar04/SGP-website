import { useEffect, useRef, useState } from "react";

const milestones = [
  {
    year: "2009",
    description:
      "SGP Promoters founded with a vision to democratize property investment",
  },
  {
    year: "2012",
    description: "Partnered with first 5 banks for NPA property deals",
  },
  {
    year: "2015",
    description: "Expanded into full-service financial advisory",
  },
  {
    year: "2018",
    description: "Crossed 500+ successful property transactions",
  },
  {
    year: "2021",
    description: "Launched finance & investment division",
  },
  {
    year: "2024",
    description:
      "Authorized as Debt Recovery Agency (DRA) for all banks — 1000+ happy clients & 20+ banking partnerships",
  },
];

export default function CompanyJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F8F9FB] px-5 pb-16 pt-[110px] sm:px-8 sm:pb-20 lg:pb-24"
    >
      <div className="mx-auto w-full max-w-[900px]">
        {/* Section heading */}
        <div
          className={`
            mx-auto max-w-[700px] text-center
            transition-all duration-700 ease-out
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }
          `}
        >
          <span className="text-sm font-medium text-[#0866FF] sm:text-base">
            Our Story
          </span>

          <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-[#172333] sm:text-4xl">
            Company Journey
          </h2>

          <p className="mx-auto mt-4 max-w-[680px] text-sm leading-[1.8] text-[#687B91] sm:text-base">
            From humble beginnings to becoming a trusted partner for property
            buyers and investors, our journey has been defined by integrity,
            expertise, and results.
          </p>
        </div>

        {/* Timeline */}
        <div className="mx-auto mt-12 max-w-[740px] sm:mt-16">
          <div className="space-y-3">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`
                  group flex items-start gap-4
                  transition-all duration-500 ease-out
                  sm:gap-6
                  ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }
                `}
                style={{
                  transitionDelay: isVisible
                    ? `${150 + index * 100}ms`
                    : "0ms",
                }}
              >
                {/* Year badge */}
                <div
                  className="
                    relative z-10 flex h-[46px] w-[46px] shrink-0
                    items-center justify-center rounded-full
                    bg-[#E1ECFC] text-[13px] font-bold text-[#0866FF]
                    transition-all duration-300
                    group-hover:scale-105 group-hover:bg-[#0866FF]
                    group-hover:text-white
                    sm:h-[52px] sm:w-[52px] sm:text-sm
                  "
                >
                  {milestone.year}
                </div>

                {/* Milestone description */}
                <p
                  className="
                    min-w-0 flex-1 pt-[9px]
                    text-sm leading-[1.7] text-[#172333]
                    transition-colors duration-300
                    group-hover:text-[#0866FF]
                    sm:pt-3 sm:text-base
                  "
                >
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
