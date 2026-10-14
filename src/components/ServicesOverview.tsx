import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    icon: "🏢",
    title: "Bank NPA Properties",
    description:
      "Below-market bank-seized properties — verified, legal, ready to buy.",
    gradient: "from-[#2454CC] to-[#3679E8]",
  },
  {
    number: "02",
    icon: "💰",
    title: "All Bank Loans",
    description:
      "Home, business, and personal loans at best rates — processed in 7 days.",
    gradient: "from-[#08765B] to-[#10A879]",
  },
  {
    number: "03",
    icon: "🏠",
    title: "Property Consultancy",
    description:
      "Expert buy/sell advisory, market analysis, and post-sale management.",
    gradient: "from-[#C87908] to-[#EAB308]",
  },
  {
    number: "04",
    icon: "📈",
    title: "Finance & Investment",
    description:
      "Smart investments — mutual funds, deposits & wealth-building solutions.",
    gradient: "from-[#6926C9] to-[#9849E5]",
  },
  {
    number: "05",
    icon: "📢",
    title: "Marketing for Properties",
    description:
      "Strategic listing, lead generation & digital campaigns to sell your property faster.",
    gradient: "from-[#C9194C] to-[#D83F91]",
  },
  {
    number: "06",
    icon: "🏛️",
    title: "Debt Recovery Agency (DRA)",
    description:
      "Authorized DRA for all banks — fast, RBI-compliant NPA account recovery.",
    gradient: "from-[#B91F24] to-[#D83232]",
  },
];

export default function ServicesOverview() {
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
      className="w-full scroll-mt-[90px] bg-[#F8F9FB] pb-16 pt-[110px] sm:pb-20 lg:pb-24"
    >
      {/* Align content with the navbar logo and Contact Us button */}
      <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-10 xl:px-12">
        {/* Section heading */}
        <div
          className={`mb-9 text-center transition-all duration-700 ease-out sm:mb-11 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#FFB900] sm:text-sm">
            What We Offer
          </p>

          <h2 className="mx-auto mt-3 max-w-4xl text-2xl font-bold leading-tight tracking-tight text-[#172333] sm:text-3xl lg:text-[38px]">
            Complete Real Estate, Finance &amp; DRA Solutions
          </h2>
        </div>

        {/* Responsive service cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[22px]">
          {services.map((service, index) => (
            <article
              key={service.number}
              style={{
                transitionDelay: isVisible
                  ? `${index * 80}ms`
                  : "0ms",
              }}
                className={`group relative flex min-h-[220px] flex-col overflow-hidden rounded-[16px] bg-gradient-to-br ${service.gradient} p-6 text-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg sm:min-h-[232px] sm:p-[26px] lg:min-h-[240px] ${
                isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}

            >
              {/* Subtle border on hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[16px] border border-white/0 transition-colors duration-300 group-hover:border-white/25"
              />

              {/* Background number */}
              <span
                aria-hidden="true"
                className="absolute right-6 top-7 text-[28px] font-bold leading-none text-white/20 transition-colors duration-300 group-hover:text-white/35 sm:right-7"
              >
                {service.number}
              </span>

              {/* Icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center text-[37px] leading-none">
                <span role="img" aria-label="">
                  {service.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-lg font-bold leading-snug tracking-tight sm:text-xl">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-auto pt-6 text-sm leading-[1.75] text-white/95 sm:text-[15px]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


