import { useEffect, useRef, useState } from "react";
import {
  Award,
  ShieldCheck,
  Landmark,
  Clock,
  BadgeCheck,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "15+ Years Experience",
    description:
      "A trusted name in bank auction properties and finance since 2009.",
  },
  {
    icon: ShieldCheck,
    title: "Verified & Legal",
    description:
      "Every property and transaction is legally verified with clean titles.",
  },
  {
    icon: Landmark,
    title: "20+ Bank Partnerships",
    description:
      "Strong tie-ups with leading banks for the best loan rates and NPA deals.",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description:
      "Loans sanctioned in as fast as 7 days with minimal documentation.",
  },
  {
    icon: BadgeCheck,
    title: "RBI-Authorized DRA",
    description:
      "Compliant NPA recovery under RBI & SARFAESI guidelines for all banks.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description:
      "A personal expert guiding you through every step, start to finish.",
  },
];

export default function WhyChooseServices() {
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
      { threshold: 0.12 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full scroll-mt-[90px] bg-white py-8 sm:py-10 lg:py-12"
    >
      {/* Same horizontal alignment as the navbar */}
      <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-10 xl:px-12">
        {/* Main blue container */}
        <div
          className={`rounded-[24px] bg-gradient-to-r from-[#1261F5] via-[#1768F5] to-[#3477D0] px-5 py-8 shadow-sm transition-all duration-700 ease-out sm:px-8 sm:py-10 lg:px-11 lg:py-11 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          {/* Heading */}
          <h2 className="mb-8 text-center text-xl font-bold tracking-tight text-white sm:mb-9 sm:text-2xl lg:text-[26px]">
            Why Choose Our Services?
          </h2>

          {/* Feature cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  style={{
                    transitionDelay: isVisible
                      ? `${index * 80}ms`
                      : "0ms",
                  }}
                  className={`group flex min-w-0 items-start gap-4 rounded-[17px] border border-white/10 bg-white/[0.09] p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.15] hover:shadow-lg sm:p-5 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                >
                  {/* Icon */}
                  <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] bg-white/20 transition-colors duration-300 group-hover:bg-white/25">
                    <Icon
                      size={25}
                      strokeWidth={2}
                      className="text-[#FFCA05]"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold leading-snug text-white sm:text-[15px]">
                      {feature.title}
                    </h3>

                    <p className="mt-1.5 text-[13px] leading-[1.65] text-blue-50 sm:text-sm">
                      {feature.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}



