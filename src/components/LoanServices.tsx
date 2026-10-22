import {
  ArrowRight,
  ArrowLeftRight,
  BriefcaseBusiness,
  CalendarClock,
  CarFront,
  CreditCard,
  House,
  Landmark,
  ShieldCheck,
  Smile,
  Wallet,
  Zap,
  Building2,
} from "lucide-react";
import { useState } from "react";
import EnquiryModal from "./EnquiryModal";
import { motion, useReducedMotion } from "framer-motion";

const loans = [
  {
    title: "Personal Loan",
    description:
      "Instant funds for weddings, travel, or emergencies with minimal paperwork.",
    image: null,
    icon: Wallet,
    gradient: "from-pink-500 via-pink-600 to-pink-900",
    imagePosition: "center",
  },
  {
    title: "Business Loan (Secured & Unsecured)",
    description:
      "Grow your enterprise with collateral-free or secured business funding.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
    icon: BriefcaseBusiness,
    gradient: "from-blue-500 to-blue-800",
    imagePosition: "center",
  },
  {
    title: "Home Loan (Construction & Purchase)",
    description:
      "Build or buy your dream home at the lowest interest rates.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
    icon: House,
    gradient: "from-blue-500 to-blue-800",
    imagePosition: "center",
  },
  {
    title:
      "Loan Against Property (Residential, Commercial & Industrial)",
    description:
      "Unlock the value of your property for high-ticket funding.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85",
    icon: Building2,
    gradient: "from-cyan-600 to-blue-700",
    imagePosition: "center",
  },
  {
    title: "Balance Transfer (BT + Top-Up)",
    description:
      "Transfer existing loans to lower rates and get an extra top-up.",
    image: null,
    icon: ArrowLeftRight,
    gradient: "from-cyan-600 to-blue-900",
    imagePosition: "center",
  },
  {
    title: "Vehicle Finance (New & Used)",
    description:
      "Drive home your new or pre-owned car, bike, or commercial vehicle.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=85",
    icon: CarFront,
    gradient: "from-slate-800 to-slate-950",
    imagePosition: "center",
  },
  {
    title: "Working Capital",
    description:
      "Keep your business running with flexible short-term working capital.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85",
    icon: Landmark,
    gradient: "from-blue-500 to-indigo-700",
    imagePosition: "center",
  },
  {
    title: "OD / CC Facilities",
    description:
      "Overdraft and cash credit limits to manage your cash flow effortlessly.",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=900&q=85",
    icon: CreditCard,
    gradient: "from-emerald-600 to-green-900",
    imagePosition: "center",
  },
];

const benefits = [
  {
    title: "Quick Processing",
    description: "Sanction in as fast as 48 hours",
    icon: Zap,
  },
  {
    title: "Flexible Tenure",
    description: "Repayment from 1 to 25 years",
    icon: CalendarClock,
  },
  {
    title: "CIBIL Issues Considered",
    description: "Solutions even with low credit scores",
    icon: ShieldCheck,
  },
  {
    title: "Customer Satisfaction",
    description: "1000+ happy clients and counting",
    icon: Smile,
  },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function LoanServices() {
  const shouldReduceMotion = useReducedMotion();
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const animationProps = shouldReduceMotion
    ? {}
    : {
        variants: reveal,
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.12 },
        transition: {
          duration: 0.65,
          ease: "easeOut" as const,
        },
      };

  return (
    <section
      id="loan-services"
      className="relative w-full overflow-hidden bg-[#f4f8fc] py-14 sm:py-16 lg:py-20"
    >
      {/* Shared container: keep this aligned with Navbar.tsx */}
      <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-10 xl:px-12">
        {/* Section heading */}
        <motion.div
          {...animationProps}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14"
        >
          <span className="mb-3 inline-block text-sm font-medium tracking-wide text-[#0866ff] sm:text-base">
            Financial Services
          </span>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#171d28] sm:text-4xl lg:text-[40px]">
            All Loans Under One Roof
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#708198] sm:text-lg sm:leading-7">
            From personal needs to large business funding — we partner
            with 20+ banks to get you the best rates and fastest approvals.
          </p>
        </motion.div>

        {/* Loan cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 xl:gap-6">
          {loans.map((loan, index) => {
            const Icon = loan.icon;

            return (
              <motion.article
                key={loan.title}
                {...animationProps}
                transition={
                  shouldReduceMotion
                    ? undefined
                    : {
                        duration: 0.55,
                        delay: (index % 4) * 0.08,
                        ease: "easeOut",
                      }
                }
                className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image or gradient banner */}
                <div
                  className={`relative h-[175px] shrink-0 overflow-hidden bg-gradient-to-br sm:h-[175px] lg:h-[165px] xl:h-[190px] ${loan.gradient}`}
                >
                  {loan.image ? (
                    <img
                      src={loan.image}
                      alt={loan.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      style={{
                        objectPosition: loan.imagePosition,
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon
                        size={56}
                        strokeWidth={1.8}
                        className="text-white/90 transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  )}

                  {loan.image && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5 transition-colors duration-300 group-hover:from-black/45" />
                  )}

                  {/* Floating icon */}
                  <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl border border-white/25 bg-white/20 text-white shadow-lg backdrop-blur-md transition-all duration-300 group-hover:border-white/50 group-hover:bg-white/30">
                    <Icon size={21} strokeWidth={1.9} />
                  </div>
                </div>

                {/* Card content */}
                <div className="flex flex-col p-4 sm:p-5">
                  <h3 className="text-[16px] font-bold leading-6 text-[#101827] transition-colors duration-300 group-hover:text-blue-600">
                    {loan.title}
                  </h3>

                  <p className="mt-2 text-[15px] leading-[1.65] text-[#708198]">
                    {loan.description}
                  </p>

                  
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Loan benefits panel */}
        <motion.div
          {...animationProps}
          className="mt-12 rounded-[24px] bg-gradient-to-br from-[#0866ff] via-[#1765ee] to-[#3276d0] p-5 text-white shadow-sm sm:mt-14 sm:rounded-[28px] sm:p-8 lg:mt-14 lg:p-10"
        >
          <h3 className="text-center text-xl font-bold sm:text-2xl">
            Why Choose Our Loan Services?
          </h3>

          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  {...animationProps}
                  transition={
                    shouldReduceMotion
                      ? undefined
                      : {
                          duration: 0.5,
                          delay: index * 0.07,
                          ease: "easeOut",
                        }
                  }
                  className="group flex min-h-[145px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.10] px-4 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.17] sm:px-3"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-[#ffca05] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon size={25} strokeWidth={2} />
                  </div>

                  <h4 className="text-sm font-bold leading-5 sm:text-[15px]">
                    {benefit.title}
                  </h4>

                  <p className="mt-1 text-xs leading-5 text-blue-50 sm:text-[13px]">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Apply CTA */}
        <motion.div
          {...animationProps}
          className="mt-9 flex justify-center sm:mt-11"
        >
          <button
            type="button"
            onClick={() => setIsEnquiryOpen(true)}
            className="group inline-flex min-h-[52px] w-full max-w-[240px] items-center justify-center gap-3 rounded-xl bg-[#ffbf00] px-7 py-4 text-center text-sm font-semibold text-gray-950 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#f5b400] hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1e40af] sm:w-auto"
          >
            Apply for a Loan
            <ArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </motion.div>
      </div>

      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </section>
  );
}

