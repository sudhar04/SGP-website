import { useEffect, useRef, useState } from "react";
import {
  Users,
  Building,
  Award,
  TrendingUp,
} from "lucide-react";

const stats = [
  { value: "1000+", label: "Happy Clients", Icon: Users },
  { value: "500+", label: "Properties Sold", Icon: Building },
  { value: "20+", label: "Bank Partners", Icon: Award },
  { value: "15+", label: "Years Experience", Icon: TrendingUp },
];

export default function AboutStats() {
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
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F8F9FB] py-10 sm:py-12 lg:py-14"
    >
      {/* Match the navbar container exactly */}
      <div
        className="
          mx-auto grid w-full max-w-[1360px]
          grid-cols-1 gap-5
          px-5 sm:grid-cols-2 sm:px-8
          lg:grid-cols-4 lg:gap-6 lg:px-10
          xl:px-12
        "
      >
        {stats.map(({ value, label, Icon }, index) => (
          <div
            key={label}
            className={`
              group flex min-h-[165px] flex-col
              items-center justify-center rounded-[18px]
              border border-[#E9EDF2] bg-white
              px-5 py-6 text-center
              transition-all duration-500 ease-out
              hover:-translate-y-1 hover:border-blue-100
              hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)]
              sm:min-h-[180px]
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }
            `}
            style={{
              transitionDelay: isVisible
                ? `${index * 100}ms`
                : "0ms",
            }}
          >
            <div
              className="
                flex h-[52px] w-[52px] items-center
                justify-center rounded-[14px] bg-[#E5EFFF]
                text-[#0866FF]
                transition-all duration-300
                group-hover:scale-105 group-hover:bg-[#0866FF]
                group-hover:text-white
              "
            >
              <Icon size={25} strokeWidth={2} />
            </div>

            <h3 className="mt-3 text-[30px] font-bold leading-tight text-[#0866FF] sm:text-[32px]">
              {value}
            </h3>

            <p className="mt-1 text-sm text-[#687B91] sm:text-[15px]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

