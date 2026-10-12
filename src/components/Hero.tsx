import heroCity from "../assets/hero-city.jpg";
import directorImage from "../assets/managing-director.jpg";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Star,
  Building2,
  Landmark,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";

const trustBadges = [
  { icon: Star, label: "15+ Years" },
  { icon: Building2, label: "20+ Banks" },
  { icon: Landmark, label: "Authorized DRA" },
  { icon: ShieldCheck, label: "Verified Listings" },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.65,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
        delayChildren: 0.08,
      },
    },
  };

  const openWhatsApp = () => {
    const phone = "919787747775";
    const message =
      "Hello SGP Promoters, I would like to enquire about your properties and services.";

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="home"
      className="relative isolate w-full overflow-hidden bg-[#18232c] text-white min-h-[720px] lg:min-h-[min(100vh,850px)]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroCity})` }}
        aria-hidden="true"
      />

      {/* Light overlay: keep the original city image visible */}
      <div
        className="absolute inset-0 -z-10 bg-black/15"
        aria-hidden="true"
      />

      {/* Subtle contrast behind the text */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101a20]/60 via-[#101a20]/25 to-transparent"
        aria-hidden="true"
      />

      {/* Hero container aligned with Navbar and Footer */}
      <div className="mx-auto flex w-full max-w-[1360px] items-center px-5 pb-16 pt-[140px] sm:px-8 sm:pb-14 sm:pt-[150px] lg:min-h-[min(100vh,850px)] lg:px-10 lg:pb-12 lg:pt-[110px] xl:px-12">
        <div className="grid w-full grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 xl:gap-12">

          {/* Left content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative z-10 w-full max-w-[650px]"
          >
            {/* Trust badge */}
            <motion.div variants={reveal}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FFBE00]/40 bg-[#FFBE00]/10 px-3.5 py-2 text-xs font-semibold text-[#FFBE00] sm:px-4 sm:text-sm">
                <Star size={15} fill="currentColor" />
                Trusted by 1000+ Clients
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={reveal}
              className="mt-6 text-[clamp(2rem,3.6vw,3.65rem)] font-bold leading-[1.04] tracking-[-0.035em] text-white"
            >
              Verified Bank
              <br className="hidden sm:block" /> Auction Properties,
              <br />
              Loans &amp; DRA
              <br />
              Services
              <span className="mt-1.5 block text-[#FFBE00]">
                All Under One Roof
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={reveal}
              className="mt-5 max-w-[520px] text-sm leading-6 text-gray-100 sm:text-base sm:leading-7 lg:text-lg"
            >
              Buy, invest, or finance with confidence — premium bank auction
              deals, loans, and authorized DRA services for all banks.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={reveal}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <a
                href="#properties"
                className="inline-flex min-h-[44px] items-center justify-center gap-3 rounded-xl bg-[#FFBE00] px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#F5B400] sm:px-6 sm:text-base"
              >
                View Properties
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/40 bg-black/10 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-[#FFBE00] hover:bg-white/10 sm:px-6 sm:text-base"
              >
                Enquire Now
              </a>
            </motion.div>

            {/* Phone link */}
            <motion.a
              variants={reveal}
              href="tel:+919787747775"
              className="mt-5 inline-flex flex-wrap items-center gap-2 text-sm text-gray-100 transition hover:text-[#FFBE00] sm:text-base"
            >
              <Phone size={16} />
              <span>+91 97877 47775</span>
              <span className="hidden sm:inline">
                — Call our MD directly
              </span>
            </motion.a>

            {/* Trust badges */}
            <motion.div
              variants={reveal}
              className="mt-6 flex flex-wrap gap-2 sm:gap-3"
            >
              {trustBadges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/20 px-3 py-2 text-xs font-semibold text-white sm:text-sm"
                >
                  <Icon
                    size={14}
                    className="shrink-0 text-[#FFBE00]"
                  />
                  {label}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Managing Director portrait */}
          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : 25,
              scale: reduceMotion ? 1 : 0.98,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[250px] pb-7 sm:max-w-[280px] lg:max-w-[270px] lg:justify-self-center xl:max-w-[300px]"
          >
            <div className="overflow-hidden rounded-[18px] border-[3px] border-white/30 bg-white/10">
              <img
                src={directorImage}
                alt="Managing Director Mr. Natrajan"
                className="aspect-[4/5] w-full object-cover object-center"
                loading="eager"
              />
            </div>

            {/* Director name card */}
            <div className="absolute bottom-0 left-[-8px] rounded-xl bg-white px-4 py-2.5 sm:left-[-12px]">
              <p className="text-xs text-gray-500">
                Managing Director
              </p>
              <p className="text-sm font-bold text-gray-950">
                Mr. Natrajan
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <button
        type="button"
        onClick={openWhatsApp}
        aria-label="Contact SGP Promoters on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#19C768] text-white transition duration-300 hover:scale-105 hover:bg-green-600 sm:bottom-7 sm:right-8 sm:h-14 sm:w-14"
      >
        <MessageCircle size={24} />
      </button>
    </section>
  );
}


