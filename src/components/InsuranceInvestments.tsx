import { useRef } from "react";
import {
  ArrowRight,
  CarFront,
  HeartHandshake,
  HeartPulse,
  PiggyBank,
  ChartNoAxesCombined,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const insuranceServices = [
  {
    title: "Motor Insurance",
    description:
      "Comprehensive cover for cars, bikes, and commercial vehicles with cashless claims.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=85",
    icon: CarFront,
  },
  {
    title: "Life Insurance",
    description:
      "Secure your family's future with term and wealth-building life cover plans.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
    icon: HeartHandshake,
  },
  {
    title: "Health Insurance",
    description:
      "Cashless hospitalization and family health plans from top insurers.",
    image: null,
    icon: HeartPulse,
    gradient: "from-emerald-500 via-emerald-600 to-emerald-900",
  },
  {
    title: "Fixed Deposits",
    description:
      "Safe, predictable returns with flexible tenure fixed deposit schemes.",
    image:
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=900&q=85",
    icon: PiggyBank,
  },
  {
    title: "Mutual Funds & Share Trading",
    description:
      "Grow wealth with expert-managed funds and smart equity trading support.",
    image: null,
    icon: ChartNoAxesCombined,
    gradient: "from-teal-500 via-cyan-600 to-teal-900",
  },
];

const benefits = [
  {
    title: "Personalized Solutions",
    description: "Financial products tailored to your needs.",
  },
  {
    title: "Trusted Guidance",
    description: "Support to help you make informed decisions.",
  },
  {
    title: "Multiple Options",
    description: "Explore insurance and investment opportunities.",
  },
];

export default function InsuranceInvestments() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="insurance-investments"
      className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* Keep the same horizontal alignment as Navbar.tsx */}
      <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-10 xl:px-12">
        {/* Section heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 lg:mb-16"
        >
          <span className="mb-3 block text-sm font-medium text-blue-600 sm:text-base">
            Protect &amp; Grow
          </span>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#151B26] sm:text-4xl lg:text-[40px]">
            Insurance &amp; Investments
          </h2>

          <p className="mx-auto mt-4 max-w-[700px] text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            Safeguard what matters and grow your wealth — comprehensive
            insurance and smart investment solutions, all in one place.
          </p>
        </motion.div>

        {/* Responsive service cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {insuranceServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                }}
                className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:border-blue-200 hover:bg-white hover:shadow-xl"
              >
                {/* Image / gradient banner */}
                <div
                  className={`relative h-[190px] shrink-0 overflow-hidden sm:h-[190px] lg:h-[190px] ${
                    service.gradient
                      ? `bg-gradient-to-br ${service.gradient}`
                      : "bg-slate-200"
                  }`}
                >
                  {service.image && (
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  )}

                  {/* Subtle image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                  {/* Main icon */}
                  {!service.image && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon
                        size={64}
                        strokeWidth={1.8}
                        className="text-white/85 transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  )}

                  {/* Small icon badge */}
                  <div className="absolute bottom-3 left-3 flex h-12 w-12 items-center justify-center rounded-xl border border-white/25 bg-white/20 text-white shadow-sm backdrop-blur-md transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Card content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-lg font-bold leading-snug text-[#111827] transition-colors duration-300 group-hover:text-blue-600">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 text-[15px] leading-6 text-slate-500">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Benefits panel */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 p-6 text-white shadow-sm sm:mt-14 sm:p-9 lg:mt-16 lg:p-10"
        >
          <h3 className="text-center text-xl font-bold sm:text-2xl">
            Why Choose Our Insurance &amp; Investment Services?
          </h3>

          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-white/15 bg-white/10 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                <h4 className="text-base font-semibold">
                  {benefit.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-blue-100">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-10 flex justify-center sm:mt-12"
        >
          <a
            href="#contact"
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Get Started Today
            <ArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};