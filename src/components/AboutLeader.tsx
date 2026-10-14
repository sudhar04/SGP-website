import { useEffect, useRef, useState } from "react";
import directorImage from "../assets/managing-director.jpg";

export default function AboutLeader() {
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
      className="w-full bg-[#F8F9FB] pt-10 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20"
    >
      <div
        className="
          mx-auto grid w-full max-w-[1200px]
          grid-cols-1 items-center gap-8
          px-5 sm:px-8
          md:grid-cols-2 md:gap-8
          lg:gap-12 lg:px-10
        "
      >
        {/* Leader portrait */}
        <div
          className={`
            group relative mx-auto w-full max-w-[500px]
            overflow-hidden rounded-2xl bg-white
            shadow-[0_16px_35px_rgba(0,0,0,0.10)]
            transition-all duration-700 ease-out
            hover:-translate-y-1 hover:shadow-xl
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }
          `}
        >
          <div className="flex h-[300px] w-full items-stretch justify-center overflow-hidden sm:h-[360px] lg:h-[420px]">
            <img
              src={directorImage}
              alt="Mr. Natrajan, Managing Director and Founder of SGP Promoters"
              className="
                h-full w-full object-cover object-top
                transition-transform duration-500
                group-hover:scale-[1.02]
                sm:w-[65%]
              "
            />
          </div>
        </div>

        {/* Leader information */}
        <div
          className={`
            w-full min-w-0
            transition-all duration-700 delay-150 ease-out
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }
          `}
        >
          <span className="text-sm font-medium tracking-wide text-[#0866FF] sm:text-base">
            Our Leader
          </span>

          <h1 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-[#172333] transition-colors duration-300 hover:text-[#0866FF] sm:text-3xl lg:text-[34px]">
            Mr. Natrajan
          </h1>

          <p className="mt-2 text-sm font-medium text-[#687B91] sm:text-base">
            Managing Director &amp; Founder
          </p>

          <div className="mt-5 space-y-4 text-sm leading-[1.8] text-[#687B91] sm:text-[15px]">
            <p>
              With over 15 years of experience in real estate and financial
              services, Mr. Natrajan founded SGP Promoters with a simple
              mission — to make property investment transparent, accessible,
              and profitable for everyone.
            </p>

            <p>
              Under his leadership, SGP Promoters has grown from a small
              consultancy to a trusted name in bank NPA properties, financial
              services, and authorized Debt Recovery Agency (DRA) services,
              serving over 1000 happy clients across India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

