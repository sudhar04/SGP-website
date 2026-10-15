import { useEffect, useRef, useState } from "react";
import {
  Building2,
  Landmark,
  HandCoins,
  GraduationCap,
  Megaphone,
  Gavel,
  CircleCheck,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: "bank-npa",
    title: "Bank NPA Properties",
    description:
      "Get exclusive access to bank-seized and NPA properties at below-market rates. All properties are legally verified and come with clean titles.",
    icon: Building2,
    color: "text-blue-600",
    iconBg: "bg-blue-50",
    features: [
      "Below market value pricing",
      "Bank-verified documentation",
      "Legal clearance guaranteed",
      "Multiple property types",
      "Pan-India availability",
      "Expert negotiation support",
    ],
    reverse: false,
  },
  {
    id: "bank-loans",
    title: "All Bank Loans",
    description:
      "We partner with 20+ banks to offer you the best interest rates and fastest loan processing for home loans, business loans, and personal loans.",
    icon: Landmark,
    color: "text-emerald-600",
    iconBg: "bg-emerald-50",
    features: [
      "Home Loans from 8.5%",
      "Business Loans",
      "Personal Loans",
      "Loan Against Property",
      "Fast processing in 7 days",
      "Minimal documentation",
    ],
    reverse: true,
  },
  {
    id: "property-consultancy",
    title: "Property Consultancy",
    description:
      "Expert guidance for buying, selling, and investing in real estate. Our consultants help you maximize ROI on every property decision.",
    icon: HandCoins,
    color: "text-amber-600",
    iconBg: "bg-amber-50",
    features: [
      "Buy/Sell advisory",
      "Investment planning",
      "Market analysis & valuation",
      "Due diligence",
      "Registration support",
      "Post-sale management",
    ],
    reverse: false,
  },
  {
    id: "finance",
    title: "Finance & Investment",
    description:
      "Smart investment and wealth-building solutions — from mutual funds and fixed deposits to share trading and tax-saving investments, tailored to grow your money.",
    icon: GraduationCap,
    color: "text-purple-600",
    iconBg: "bg-purple-50",
    features: [
      "Investment planning",
      "Mutual funds & SIPs",
      "Fixed deposits",
      "Share trading guidance",
      "Wealth management",
      "Tax-saving investments",
    ],
    reverse: true,
  },
  {
    id: "marketing",
    title: "Marketing for Properties",
    description:
      "Strategic property marketing — professional listings, targeted lead generation, digital campaigns, and sales support to help you sell your property faster and at the best price.",
    icon: Megaphone,
    color: "text-rose-600",
    iconBg: "bg-rose-50",
    features: [
      "Professional photography & listing",
      "Targeted digital campaigns",
      "Lead generation & qualification",
      "Pan-India buyer network",
      "Negotiation & closing support",
      "Dedicated sales manager",
    ],
    reverse: false,
  },
  {
    id: "dra",
    title: "Debt Recovery Agency (DRA)",
    description:
      "SGP Promoters is an authorized Debt Recovery Agency (DRA) providing professional NPA account recovery services for all banks and financial institutions, strictly under RBI & SARFAESI guidelines.",
    icon: Gavel,
    color: "text-red-600",
    iconBg: "bg-rose-50",
    features: [
      "Authorized for all banks & NBFCs",
      "RBI-compliant recovery process",
      "Soft & hard recovery",
      "Legal notice & SARFAESI support",
      "Field investigations & tracking",
      "Property possession & auction support",
    ],
    reverse: true,
  },
];

export default function AllServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll<HTMLElement>(
      "[data-reveal]"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(
              (entry.target as HTMLElement).dataset.index
            );

            setVisibleItems((previous) =>
              previous.includes(index)
                ? previous
                : [...previous, index]
            );

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-[#f8fafc] py-12 sm:py-16 lg:py-20"
    >
      {/* Same horizontal container and alignment as Navbar */}
      <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-10 xl:px-12">
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleItems.includes(index);

            return (
              <article
                key={service.id}
                data-reveal
                data-index={index}
                className={`grid min-w-0 grid-cols-1 items-center gap-8 transition-all duration-700 ease-out lg:grid-cols-2 lg:gap-12 xl:gap-16 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                {/* Service introduction */}
                <div
                  className={`min-w-0 ${
                    service.reverse
                      ? "lg:order-2"
                      : "lg:order-1"
                  }`}
                >
                  <div
                    className={`mb-5 flex h-[68px] w-[68px] items-center justify-center rounded-[20px] ${service.iconBg} transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-md`}
                  >
                    <Icon
                      size={32}
                      strokeWidth={2}
                      className={service.color}
                      aria-hidden="true"
                    />
                  </div>

                  <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-[32px]">
                    {service.title}
                  </h2>

                  <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-500 sm:text-base sm:leading-7">
                    {service.description}
                  </p>

                  <a
                    href="/contact"
                    className="group mt-6 inline-flex items-center gap-4 rounded-xl bg-[#ffbe00] px-5 py-3 text-sm font-semibold text-slate-950 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#f5b400] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 active:scale-[0.98]"
                  >
                    Talk to Our Expert
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>

                {/* Service feature cards */}
                <div
                  className={`grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5 ${
                    service.reverse
                      ? "lg:order-1"
                      : "lg:order-2"
                  }`}
                >
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={feature}
                      style={{
                        transitionDelay: isVisible
                          ? `${featureIndex * 65}ms`
                          : "0ms",
                      }}
                      className={`group flex min-h-[58px] min-w-0 items-center gap-3 rounded-[14px] border border-slate-200/80 bg-white px-4 py-3.5 shadow-[0_1px_2px_rgba(15,23,42,0.02)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/60 hover:shadow-[0_10px_25px_rgba(37,99,235,0.09)] ${
                        isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-3 opacity-0"
                      }`}
                    >
                      <CircleCheck
                        size={20}
                        strokeWidth={2}
                        className="shrink-0 text-blue-600 transition-transform duration-300 group-hover:scale-110"
                        aria-hidden="true"
                      />

                      <span className="min-w-0 text-[14px] leading-5 text-slate-800 sm:text-[15px]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
