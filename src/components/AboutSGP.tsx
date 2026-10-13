import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, Star } from "lucide-react";
import natarajan from '../assets/managing-director.jpg';

const trustPoints = [
  "Direct MD involvement in every deal",
  "Transparent pricing, zero hidden costs",
  "End-to-end legal & documentation support",
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const animation = shouldReduceMotion
    ? {}
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.15 },
        variants: reveal,
      };

  return (
    <section
      id="about"
      className="w-full overflow-hidden bg-[#f8fafc] text-[#171c24]"
    >
      {/* Matches the navbar's horizontal container and alignment */}
      <div
        className="mx-auto w-full max-w-[1360px]
          px-5 py-12
          sm:px-8 sm:py-16
          lg:px-10 lg:py-[76px]
          xl:px-12"
      >
        <div
          className="grid grid-cols-1 items-center
            gap-10
            md:gap-12
            lg:grid-cols-2 lg:gap-[52px]"
        >
          {/* LEFT: Director image and statistic cards */}
          <motion.div
            {...animation}
            className="min-w-0"
          >
            <div
              className="grid grid-cols-[1.35fr_0.9fr]
                items-stretch gap-3
                sm:gap-[13px]"
            >
              {/* Director portrait */}
              <motion.div
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -5, scale: 1.01 }
                }
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative min-w-0
                  h-[300px] overflow-hidden
                  rounded-[24px] bg-[#e5e7eb]
                  shadow-[0_20px_40px_rgba(15,23,42,0.13)]
                  sm:h-[390px]
                  lg:h-[470px] lg:rounded-[27px]"
              >
                <img
                  src={natarajan}
                  alt="Mr. Natrajan, Managing Director of SGP Promoters"
                  className="absolute inset-0 h-full w-full
                    object-cover object-center
                    transition-transform duration-700
                    ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />

                {/* Portrait gradient overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0
                    bg-gradient-to-t
                    from-black/85 via-black/10 to-transparent"
                />

                {/* Client-style rating and director details */}
                <div
                  className="absolute inset-x-0 bottom-0
                    p-3 text-white
                    sm:p-4 lg:p-[17px]"
                >
                  <div
                    className="mb-1.5 flex items-center gap-[3px]"
                    aria-label="5 out of 5 stars"
                  >
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star
                        key={index}
                        size={14}
                        fill="#ffbd00"
                        stroke="#ffbd00"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  <h3
                    className="text-[14px] font-bold
                      leading-tight sm:text-[15px]"
                  >
                    Mr. Natrajan
                  </h3>

                  <p
                    className="mt-0.5 text-[12px]
                      leading-tight text-white/75 sm:text-[13px]"
                  >
                    Managing Director
                  </p>
                </div>
              </motion.div>

              {/* Statistic cards */}
              <div className="grid min-w-0 grid-rows-2 gap-3 sm:gap-[13px]">
                {/* Years of expertise */}
                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { y: -5, scale: 1.015 }
                  }
                  transition={{ duration: 0.25 }}
                  className="flex min-w-0 flex-col
                    items-center justify-center
                    rounded-[22px] bg-[#1261ed]
                    px-2 py-4 text-center text-white
                    transition-shadow duration-300
                    hover:shadow-[0_15px_30px_rgba(18,97,237,0.22)]
                    sm:rounded-[25px] sm:px-3
                    lg:rounded-[27px]"
                >
                  <span
                    className="text-[28px] font-extrabold
                      leading-none tracking-[-1px]
                      sm:text-[35px]
                      lg:text-[38px]"
                  >
                    15+
                  </span>

                  <p
                    className="mt-2 text-[11px] font-medium
                      leading-snug text-white/90
                      sm:text-[13px]"
                  >
                    Years of Expertise
                  </p>
                </motion.div>

                {/* Properties closed */}
                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { y: -5, scale: 1.015 }
                  }
                  transition={{ duration: 0.25 }}
                  className="flex min-w-0 flex-col
                    items-center justify-center
                    rounded-[22px] bg-[#ffbd00]
                    px-2 py-4 text-center text-[#171c24]
                    transition-shadow duration-300
                    hover:shadow-[0_15px_30px_rgba(255,189,0,0.2)]
                    sm:rounded-[25px] sm:px-3
                    lg:rounded-[27px]"
                >
                  <span
                    className="text-[29px] font-extrabold
                      leading-none tracking-[-1px]
                      sm:text-[35px]
                      lg:text-[38px]"
                  >
                    500+
                  </span>

                  <p
                    className="mt-2 text-[11px] font-medium
                      leading-snug text-[#38321d]/90
                      sm:text-[13px]"
                  >
                    Properties Closed
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: About content */}
          <motion.div
            {...animation}
            className="min-w-0"
          >
            {/* Eyebrow */}
            <p
              className="mb-3 text-[12px] font-semibold
                uppercase leading-5 tracking-[1.25px]
                text-[#1261ed] sm:text-[13px]"
            >
              About SGP Promoters
            </p>

            {/* Heading */}
            <h2
              className="text-[32px] font-extrabold
                leading-[1.08] tracking-[-1.15px]
                sm:text-[40px]
                lg:text-[44px]
                xl:text-[52px] xl:tracking-[-1.7px]"
            >
              Built on Trust,
              <br />
              <span className="text-[#1261ed]">
                Driven by Results
              </span>
            </h2>

            {/* Description */}
            <p
              className="mt-5 max-w-[640px]
                text-[14px] font-normal leading-[1.75]
                text-[#718096]
                sm:mt-6 sm:text-[16px] sm:leading-[1.75]"
            >
              SGP Promoters has been the most trusted name in bank NPA
              properties and financial advisory since 2009. We connect
              serious buyers with verified bank-seized properties and
              ensure smooth loan processing — all under one roof.
            </p>

            {/* Trust points */}
            <div className="mt-6 flex flex-col gap-3">
              {trustPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, x: 18 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.45,
                    delay: shouldReduceMotion ? 0 : index * 0.12,
                    ease: "easeOut",
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { x: 5, backgroundColor: "#e5efff" }
                  }
                  className="flex min-h-[51px] items-center
                    gap-3 rounded-[13px]
                    border border-[#d7e5ff]
                    bg-[#edf3fc] px-3.5 py-3
                    transition-colors duration-200
                    sm:min-h-[54px] sm:gap-3.5 sm:px-4"
                >
                  <BadgeCheck
                    size={21}
                    strokeWidth={1.9}
                    className="shrink-0 text-[#1261ed]"
                    aria-hidden="true"
                  />

                  <span
                    className="text-[13px] font-medium
                      leading-snug text-[#171c24]
                      sm:text-[14px] md:text-[15px]"
                  >
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="/about"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -3, scale: 1.02 }
              }
              whileTap={
                shouldReduceMotion
                  ? undefined
                  : { scale: 0.98 }
              }
              transition={{ duration: 0.2 }}
              className="mt-7 inline-flex min-h-[47px]
                items-center justify-center gap-2.5
                rounded-full bg-[#171c24]
                px-6 py-3 text-[13px] font-semibold
                text-white shadow-sm
                transition-colors duration-300
                hover:bg-[#1261ed]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#1261ed]
                focus-visible:ring-offset-2
                sm:mt-[34px] sm:px-[26px] sm:text-[14px]"
            >
              Our Full Story
              <ArrowUpRight
                size={17}
                strokeWidth={1.9}
                aria-hidden="true"
                className="transition-transform duration-200
                  group-hover:-translate-y-0.5"
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
