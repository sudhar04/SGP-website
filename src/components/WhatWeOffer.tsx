import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Bank NPA\nProperties",
    description:
      "Below-market bank-seized properties — verified, legal, ready to buy.",
    icon: "🏢",
    href: "/properties",
    hoverClass:
      "hover:bg-gradient-to-br hover:from-blue-700 hover:to-blue-500",
  },
  {
    number: "02",
    title: "All Bank\nLoans",
    description:
      "Home, business, and personal loans at best rates — processed in 7 days.",
    icon: "💰",
    href: "/services",
    hoverClass:
      "hover:bg-gradient-to-br hover:from-emerald-700 hover:to-emerald-500",
  },
  {
    number: "03",
    title: "Property\nConsultancy",
    description:
      "Expert buy/sell advisory, market analysis, and post-sale management.",
    icon: "🏡",
    href: "/services",
    hoverClass:
      "hover:bg-gradient-to-br hover:from-amber-600 hover:to-yellow-400",
  },
  {
    number: "04",
    title: "Finance &\nInvestment",
    description:
      "Smart investments — mutual funds, deposits & wealth-building solutions.",
    icon: "📈",
    href: "/services",
    hoverClass:
      "hover:bg-gradient-to-br hover:from-purple-700 hover:to-purple-500",
  },
  {
    number: "05",
    title: "Marketing for\nProperties",
    description:
      "Strategic listing, lead generation & digital campaigns to sell your property faster.",
    icon: "📣",
    href: "/services",
    hoverClass:
      "hover:bg-gradient-to-br hover:from-pink-600 hover:to-pink-500",
  },
  {
    number: "06",
    title: "Debt Recovery\nAgency (DRA)",
    description:
      "Authorized DRA for all banks — fast, RBI-compliant NPA account recovery.",
    icon: "🏛️",
    href: "/services",
    hoverClass:
      "hover:bg-gradient-to-br hover:from-red-700 hover:to-red-500",
  },
];

export default function WhatWeOffer() {
  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[#171c24] text-white"
    >
      {/* Background watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[48%] z-0
          select-none overflow-hidden"
      >
        <div
          className="whitespace-nowrap text-center font-black leading-none
            tracking-[-12px] text-white/[0.035]
            text-[180px] sm:text-[260px]
            lg:text-[340px] xl:text-[370px]"
        >
          SGP
        </div>
      </div>

      {/* Main container */}
      <div
        className="relative z-10 mx-auto w-full max-w-[1324px]
          px-5 pb-16 pt-10
          sm:px-8 sm:pb-20 sm:pt-12
          lg:box-border lg:pl-[28px] lg:pr-0
          lg:pb-[84px] lg:pt-[72px]"
      >
        {/* Section heading */}
        <div
          className="mb-10 flex flex-col items-start justify-between gap-6
            sm:mb-12
            lg:mb-[60px] lg:flex-row lg:items-end lg:gap-8"
        >
          <div className="max-w-[760px]">
            <p
              className="mb-[14px] text-[13px] font-bold uppercase
                tracking-[1.2px] text-[#ffbd00] sm:text-sm"
            >
              What We Offer
            </p>

            <h2
              className="whitespace-pre-line text-[32px] font-extrabold
                leading-[1.08] tracking-[-1.1px]
                sm:text-[42px]
                lg:text-[52px] lg:leading-[1.02]
                lg:tracking-[-1.7px]"
            >
              {"Complete Real Estate,\nFinance & DRA Solutions"}
            </h2>
          </div>

          <a
            href="/services"
            className="group mb-1 inline-flex shrink-0 items-center gap-2
              text-[14px] font-semibold text-[#a9b1be]
              transition-colors duration-200 hover:text-[#ffbd00]"
          >
            View All Services
            <ArrowUpRight
              size={18}
              strokeWidth={1.8}
              className="transition-transform duration-200
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* Service cards */}
        <div
          className="grid grid-cols-1 gap-5
            sm:grid-cols-2
            lg:grid-cols-3 lg:gap-[21px]"
        >
          {services.map((service) => (
            <article
              key={service.number}
              className={`group relative flex min-h-[310px] flex-col
                overflow-hidden rounded-[24px]
                border border-white/[0.09]
                bg-[#242a33]/90 p-6
                transition-all duration-300
                hover:-translate-y-1
                hover:border-white/20
                ${service.hoverClass}
                sm:min-h-[320px] sm:p-[25px]
                lg:h-[370px] lg:min-h-0
                lg:rounded-[26px] lg:p-[27px]`}
            >
              {/* Card number */}
              <span
                aria-hidden="true"
                className="absolute right-[25px] top-[25px]
                  font-mono text-[36px] font-bold leading-none
                  tracking-[-2px] text-[#39414c]
                  transition-colors duration-300
                  group-hover:text-white/35"
              >
                {service.number}
              </span>

              {/* Service icon */}
              <div
                className="mb-[26px] flex h-[34px] w-[42px]
                  items-center justify-start
                  transition-transform duration-300
                  group-hover:scale-110"
              >
                <span
                  role="img"
                  aria-label={service.title.replace("\n", " ")}
                  className="text-[39px] leading-none"
                >
                  {service.icon}
                </span>
              </div>

              {/* Service title */}
              <h3
                className="min-h-[64px] whitespace-pre-line
                  text-[23px] font-bold leading-[1.45]
                  tracking-[-0.35px] text-white
                  sm:text-[24px] sm:leading-[1.4]"
              >
                {service.title}
              </h3>

              {/* Description and link */}
              <div className="mt-auto pt-5">
                <p
                  className="mb-[20px] max-w-[370px]
                    text-[15px] font-normal leading-[1.65]
                    text-[#9ba7b8]
                    transition-colors duration-300
                    group-hover:text-white/90"
                >
                  {service.description}
                </p>

                <a
                  href={service.href}
                  className="group/link inline-flex items-center gap-[7px]
                    text-[14px] font-medium text-[#9ba7b8]
                    transition-colors duration-200
                    hover:text-white
                    group-hover:text-white"
                >
                  Learn More
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.8}
                    className="transition-transform duration-200
                      group-hover/link:-translate-y-0.5
                      group-hover/link:translate-x-0.5"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



