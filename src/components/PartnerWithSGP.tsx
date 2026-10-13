
import { ArrowRight, Handshake, TrendingUp } from "lucide-react";

export default function PartnerWithSGP() {
  return (
    <section
      id="partners"
      className="w-full overflow-x-clip bg-[#f8fafc] text-[#111827]"
    >
      {/* Container aligned with navbar logo and Contact Us button */}
      <div
        className="mx-auto w-full max-w-[1360px] box-border
          px-5 py-10
          sm:px-8 sm:py-12
          lg:px-10 lg:py-[44px]
          xl:px-12"
      >
        {/* Heading */}
        <header
          className="mx-auto mb-8 max-w-[620px] text-center
            sm:mb-10 lg:mb-[42px]"
        >
          <p
            className="mb-2.5 text-[14px] font-medium leading-5
              text-[#075cff] sm:text-[15px]"
          >
            Grow Together
          </p>

          <h2
            className="mb-3 text-[27px] font-bold leading-[1.2]
              tracking-[-0.65px] text-[#111827]
              sm:text-[32px] lg:text-[36px]"
          >
            Partner With SGP Promoters
          </h2>

          <p
            className="mx-auto max-w-[570px] text-[14px]
              font-normal leading-[1.65] text-[#718096]
              sm:text-[16px] sm:leading-[1.55]"
          >
            Whether you're an investor seeking strong returns or a real estate
            professional looking to expand your network — we have the right
            opportunity for you.
          </p>
        </header>

        {/* Partner cards */}
        <div className="grid grid-cols-1 gap-5 sm:gap-5 lg:grid-cols-2 lg:gap-6">
          {/* Investment partners */}
          <article
            className="flex min-w-0 flex-col items-start
              rounded-[18px] border border-[#d8e7ff]
              bg-[#eff6ff] p-5
              transition-shadow duration-200 hover:shadow-md
              sm:p-6 lg:p-7"
          >
            <div
              className="mb-4 flex h-[48px] w-[48px] shrink-0
                items-center justify-center rounded-[13px]
                bg-gradient-to-br from-[#2865f5] to-[#2144b8]
                text-white shadow-sm"
            >
              <TrendingUp size={25} strokeWidth={2.2} aria-hidden="true" />
            </div>

            <p
              className="mb-2.5 text-[12px] font-bold uppercase
                leading-[18px] tracking-[1.3px]
                text-[#2865f5] sm:text-[13px]"
            >
              Investment Partners
            </p>

            <h3
              className="mb-3 text-[18px] font-bold leading-[1.35]
                tracking-[-0.2px] text-[#111827] sm:text-[20px]"
            >
              Grow Your Wealth With Us
            </h3>

            <p
              className="mb-5 text-[14px] font-normal leading-[1.7]
                text-[#718096] sm:text-[15px] sm:leading-[1.65]"
            >
              Are you looking for high-return investment opportunities in real
              estate? Partner with SGP Promoters and gain exclusive access to
              curated bank auction properties, NPA deals, and emerging market
              opportunities — backed by 15+ years of expertise.
            </p>

            <a
              href="/contact"
              className="inline-flex max-w-full items-center justify-center
                gap-2.5 rounded-[11px]
                bg-gradient-to-r from-[#2865f5] to-[#2144b8]
                px-4 py-[9px] text-center text-[13px] font-semibold
                leading-5 text-white shadow-sm
                transition-all duration-200 hover:-translate-y-0.5
                hover:shadow-md focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-blue-500
                focus-visible:ring-offset-2 sm:text-[14px]"
            >
              <span>Explore Investment Opportunities</span>
              <ArrowRight
                size={16}
                strokeWidth={2}
                className="shrink-0"
                aria-hidden="true"
              />
            </a>
          </article>

          {/* Channel partners */}
          <article
            className="flex min-w-0 flex-col items-start
              rounded-[18px] border border-[#ffebad]
              bg-[#fffbeb] p-5
              transition-shadow duration-200 hover:shadow-md
              sm:p-6 lg:p-7"
          >
            <div
              className="mb-4 flex h-[48px] w-[48px] shrink-0
                items-center justify-center rounded-[13px]
                bg-gradient-to-br from-[#ff9d00] to-[#f05a00]
                text-white shadow-sm"
            >
              <Handshake size={25} strokeWidth={2.2} aria-hidden="true" />
            </div>

            <p
              className="mb-2.5 text-[12px] font-bold uppercase
                leading-[18px] tracking-[1.3px]
                text-[#f28a00] sm:text-[13px]"
            >
              Channel Partners
            </p>

            <h3
              className="mb-3 text-[18px] font-bold leading-[1.35]
                tracking-[-0.2px] text-[#111827] sm:text-[20px]"
            >
              Join Our Partner Network
            </h3>

            <p
              className="mb-5 text-[14px] font-normal leading-[1.7]
                text-[#718096] sm:text-[15px] sm:leading-[1.65]"
            >
              Are you a real estate professional, broker, or consultant? Become
              an SGP Promoters Channel Partner and earn attractive referral
              commissions while offering your clients access to the best bank
              auction properties and financial services in the region.
            </p>

            <a
              href="/contact"
              className="inline-flex max-w-full items-center justify-center
                gap-2.5 rounded-[11px]
                bg-gradient-to-r from-[#ff9d00] to-[#f05a00]
                px-4 py-[9px] text-center text-[13px] font-semibold
                leading-5 text-white shadow-sm
                transition-all duration-200 hover:-translate-y-0.5
                hover:shadow-md focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-orange-500
                focus-visible:ring-offset-2 sm:text-[14px]"
            >
              <span>Become a Channel Partner</span>
              <ArrowRight
                size={16}
                strokeWidth={2}
                className="shrink-0"
                aria-hidden="true"
              />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}


