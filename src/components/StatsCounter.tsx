import { useEffect, useRef, useState } from "react";

interface CounterItem {
  id: number;
  value: number;
  suffix: string;
  label: string;
  color: string;
  duration?: number;
}

const counterItems: CounterItem[] = [
  {
    id: 1,
    value: 1000,
    suffix: "+",
    label: "Happy Clients",
    color: "text-blue-500",
    duration: 1800,
  },
  {
    id: 2,
    value: 5000,
    suffix: "Cr+",
    label: "Deals Closed",
    color: "text-amber-500",
    duration: 2000,
  },
  {
    id: 3,
    value: 20,
    suffix: "+",
    label: "Bank Partners",
    color: "text-emerald-500",
    duration: 1600,
  },
  {
    id: 4,
    value: 15,
    suffix: "+",
    label: "Years of Trust",
    color: "text-purple-500",
    duration: 1600,
  },
];

interface AnimatedCounterProps {
  value: number;
  duration: number;
  suffix: string;
}

function AnimatedCounter({
  value,
  duration,
  suffix,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = counterRef.current;

    if (!element) return;

    let animationFrame = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;

        hasAnimated.current = true;

        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 4);

          setCount(
            progress === 1
              ? value
              : Math.floor(easedProgress * value)
          );

          if (progress < 1) {
            animationFrame = requestAnimationFrame(animate);
          }
        };

        animationFrame = requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [value, duration]);

  return (
    <span ref={counterRef} className="tabular-nums">
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section
      aria-label="SGP Promoters achievements"
      className="w-full bg-gray-50 py-10 sm:py-12 lg:py-16"
    >
      {/* Match the Navbar container exactly */}
      <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {counterItems.map((item) => (
            <article
              key={item.id}
              className="
                group flex min-w-0 min-h-[132px] flex-col
                items-center justify-center rounded-[24px]
                border border-gray-100 bg-white px-3 py-6
                text-center shadow-[0_8px_24px_rgba(15,23,42,0.08)]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_14px_32px_rgba(15,23,42,0.12)]
                sm:min-h-[145px] sm:rounded-[26px] sm:px-4 sm:py-7
                lg:min-h-[150px]
              "
            >
              <h3
                className={`text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[42px] ${item.color}`}
              >
                <AnimatedCounter
                  value={item.value}
                  duration={item.duration ?? 1800}
                  suffix={item.suffix}
                />
              </h3>

              <p className="mt-2 text-sm font-medium text-slate-500 sm:text-base">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


