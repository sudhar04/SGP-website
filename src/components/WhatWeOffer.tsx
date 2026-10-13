
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
            tracking-[-8px] text-white/[0.035]
            text-[150px] sm:text-[230px]
            lg:text-[320px] xl:text-[370px]"
        >
          SGP
        </div>
      </div>

      {/* Main container: aligned with navbar logo and Contact Us button */}
      <div
        className="relative z-10 mx-auto w-full max-w-[1360px]
          px-5 py-12
          sm:px-8 sm:py-14
          lg:px-10 lg:py-[64px]
          xl:px-12"
      >
        {/* Section heading */}
        <div
          className="mb-8 flex flex-col items-start justify-between gap-5
            sm:mb-10
            lg:mb-11 lg:flex-row lg:items-end lg:gap-8"
        >
          <div className="max-w-[760px]">
            <p
              className="mb-3 text-[13px] font-bold uppercase
                leading-5 tracking-[1.2px] text-[#ffbd00]
                sm:text-sm"
            >
              What We Offer
            </p>

            <h2
              className="whitespace-pre-line text-[30px] font-extrabold
                leading-[1.1] tracking-[-1px]
                sm:text-[38px]
                lg:text-[48px] lg:leading-[1.04]
                lg:tracking-[-1.5px]
                xl:text-[52px]"
            >
              {"Complete Real Estate,\nFinance & DRA Solutions"}
            </h2>
          </div>

          <a
            href="/services"
            className="group inline-flex shrink-0 items-center gap-2
              text-[14px] font-semibold text-[#a9b1be]
              transition-colors duration-200
              hover:text-[#ffbd00]
              lg:mb-1"
          >
            View All Services

            <ArrowUpRight
              size={18}
              strokeWidth={1.8}
              className="transition-transform duration-200
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>

        {/* Service cards */}
        <div
          className="grid grid-cols-1 items-stretch gap-4
            sm:grid-cols-2 sm:gap-5
            lg:grid-cols-3 lg:gap-5
            xl:gap-[22px]"
        >
          {services.map((service) => (
            <article
              key={service.number}
              className={`group relative flex min-w-0 flex-col
                overflow-hidden rounded-[22px]
                border border-white/[0.09]
                bg-[#242a33]/90 p-5
                transition-all duration-300
                hover:-translate-y-1
                hover:border-white/20
                ${service.hoverClass}
                sm:p-6
                lg:rounded-[24px] lg:p-6
                xl:p-[27px]`}
            >
              {/* Card number */}
              <span
                aria-hidden="true"
                className="absolute right-5 top-5
                  font-mono text-[30px] font-bold leading-none
                  tracking-[-2px] text-[#39414c]
                  transition-colors duration-300
                  group-hover:text-white/35
                  sm:right-6 sm:top-6 sm:text-[34px]
                  lg:right-6 lg:top-6"
              >
                {service.number}
              </span>

              {/* Service icon */}
              <div
                className="mb-5 flex h-10 w-11 shrink-0
                  items-center justify-start
                  transition-transform duration-300
                  group-hover:scale-110"
              >
                <span
                  role="img"
                  aria-label={service.title.replace("\n", " ")}
                  className="text-[35px] leading-none
                    sm:text-[37px]"
                >
                  {service.icon}
                </span>
              </div>

              {/* Service title */}
              <h3
                className="mb-3 whitespace-pre-line
                  pr-12 text-[21px] font-bold
                  leading-[1.4] tracking-[-0.35px] text-white
                  sm:text-[22px]
                  lg:text-[22px]"
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="mb-4 max-w-[370px]
                  text-[14px] font-normal leading-[1.65]
                  text-[#9ba7b8]
                  transition-colors duration-300
                  group-hover:text-white/90
                  sm:text-[15px]"
              >
                {service.description}
              </p>

              {/* Learn More */}
              <a
                href={service.href}
                className="group/link mt-1 inline-flex w-fit
                  items-center gap-[7px]
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
                  aria-hidden="true"
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}




