import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BedDouble,
  Maximize,
  MapPin,
  CalendarClock,
  CheckCircle2,
  Clock3,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import prop1 from '../assets/1.png';
import prop2 from '../assets/3.png';
import prop3 from '../assets/4.png';
import prop4 from '../assets/5.png';
import prop5 from '../assets/6.png';
import prop6 from '../assets/7.png';
import prop7 from '../assets/8.png';

type PropertyStatus = "live" | "upcoming" | "closed";

type Property = {
  status: PropertyStatus;
  title: string;
  price: string;
  location: string;
  area: string;
  bedrooms?: string;
  description?: string;
  category: string;
  badge: string;
  badgeColor: string;
  image: string;
};

const properties: Property[] = [
  {
    status: "live",
    title: "Premium 4 BHK House with 4 Cent Land",
    location: "Mathukkarai, Coimbatore – Palakkad Road",
    price: "₹70 Lakhs*",
    area: "4 Cents",
    category: "Residential",
    badge: "30% OFF",
    badgeColor: "bg-red-500",
    description:
      "East-facing 4-cent residential property with a spacious 4 BHK house and a peaceful, pollution-free atmosphere. Located approximately 500 metres from the L&T Bypass Road, with schools, colleges, hospitals, markets and transport facilities nearby. Bank loan available for eligible buyers.",
    image: prop2,
  },
  {
    status: "live",
    title: "3 BHK Individual House for Sale",
    location: "Peedampalli, near L&T Bypass Road, Coimbatore",
    price: "Contact for Price",
    area: "Not specified",
    bedrooms: "3 BHK",
    category: "Residential",
    badge: "Affordable Property",
    badgeColor: "bg-emerald-500",
    description:
      "Affordable 3 BHK individual house for sale in Peedampalli, near L&T Bypass Road. Convenient access to nearby facilities and amenities. Bank loan available for eligible buyers. Contact SGP Promoters, Coimbatore, for pricing and further details.",
    image: prop1,
  },
  {
    status: "live",
    title: "Residential House with Land",
    location: "Gudalur, Krishnagiri Main Road, Tamil Nadu",
    price: "Contact for Price",
    area: "250 Cents",
    bedrooms: "Not specified",
    category: "Residential",
    badge: "Bank Finance",
    badgeColor: "bg-blue-500",
    image:prop3,
  },
  {
    status: "live",
    title: "Prime Industrial Property - Factory Land & Building",
    location: "Kakkaveri, Rasipuram Taluk, Namakkal District",
    price: "₹33.10 Crore",
    area: "33.10 Acres",
    bedrooms: "Not applicable",
    category: "Commercial",
    badge: "Bank Auction",
    badgeColor: "bg-red-500",
    image: prop4,
  },
  {
    status: "live",
    title: "DTCP Approved Residential Plots - Bank Auction",
    location: "Chettipalayam, Pothanur, Near L & D Bypass Road, Coimbatore",
    price: "Contact for Price",
    area: "139.5 Cents",
    bedrooms: "Not applicable",
    category: "Land",
    badge: "Bank Auction",
    badgeColor: "bg-red-500",
    image: prop5,
  },
  {
    status: "live",
    title: "4 MW Solar Power Station - Bank Auction",
    location: "Kariyavallam, Vandhanallur Village, Theni District, Tamil Nadu",
    price: "Contact for Price",
    area: "16 Acres",
    bedrooms: "Not applicable",
    category: "Industrial",
    badge: "Bank Auction",
    badgeColor: "bg-red-500",
    image: prop6,
  },
  {
    status: "live",
    title: "Commercial Building - Bank Auction Property",
    location: "6th Street, Gandhipuram, Coimbatore, Tamil Nadu",
    price: "Contact for Price",
    area: "8.5 Cents",
    bedrooms: "Not applicable",
    category: "Commercial",
    badge: "Bank Auction",
    badgeColor: "bg-red-500",
    image: prop7,
  },
  {
    status: "live",
    title: "Fully Furnished 2 BHK House with Car Parking",
    location: "Saravanampatti, Near IT Park, Coimbatore",
    price: "Contact for Price",
    area: "5.5 Cents",
    bedrooms: "2 BHK",
    category: "Residential",
    badge: "Premium Property",
    badgeColor: "bg-blue-500",
    image: prop7,
  },
  {
    status: "live",
    title: "Private Sale Property with Scenic Hill Views",
    location: "Kotagiri Town, The Nilgiris, Tamil Nadu",
    price: "Contact for Price",
    area: "Not specified",
    bedrooms: "Not specified",
    category: "Commercial",
    badge: "Private Sale",
    badgeColor: "bg-green-500",
    image: prop4,
  },
];

export default function Properties() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStatus, setActiveStatus] = useState<PropertyStatus>("live");
  const prefersReducedMotion = useReducedMotion();

  const statusTabs: {
    id: PropertyStatus;
    label: string;
    description: string;
    icon: typeof CheckCircle2;
  }[] = [
    {
      id: "live",
      label: "Live Properties",
      description: "Currently available properties",
      icon: CheckCircle2,
    },
    {
      id: "upcoming",
      label: "Upcoming Properties",
      description: "Properties coming soon",
      icon: CalendarClock,
    },
    {
      id: "closed",
      label: "Closed Properties",
      description: "Sold or closed properties",
      icon: Clock3,
    },
  ];

  const filteredProperties = properties.filter(
    (property) => property.status === activeStatus
  );

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.03,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleEnquiry = (property: Property) => {
    const message = `Hello SGP Promoters! 👋

I am interested in the following property:

🏠 Property: ${property.title}
💰 Price: ${property.price}
📍 Location: ${property.location}
📐 Area: ${property.area}
${property.bedrooms ? `🛏️ Bedrooms: ${property.bedrooms}` : ""}

Please share more details about this property. Thank you!`;

    window.open(
      `https://wa.me/919787747775?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const revealInitial = prefersReducedMotion
    ? false
    : { opacity: 0, y: 24 };

  return (
    <section
      ref={sectionRef}
      id="properties"
      className="relative w-full scroll-mt-[100px] overflow-x-clip bg-white"
    >
      {/* MATCH THE NAVBAR CONTAINER EXACTLY */}
      <div
        className="
          mx-auto w-full max-w-[1360px]
          px-5 pb-14 pt-7
          sm:px-8 sm:pb-16 sm:pt-9
          lg:px-10
          xl:px-12
        "
      >
        {/* Section heading */}
        <motion.div
          initial={revealInitial}
          animate={isVisible ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-7 flex flex-col items-start justify-between gap-4 sm:mb-9 sm:flex-row sm:items-end"
        >
          <div>
            <p className="mb-2 text-sm font-medium text-blue-600 sm:text-base">
              Property Listings
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              Explore Properties
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
              Browse available listings, discover upcoming properties, and view completed deals.
            </p>
          </div>
        </motion.div>

        {/* Responsive status tabs */}
        <div
          className="mb-7 grid grid-cols-1 gap-3 sm:mb-9 sm:grid-cols-3 sm:gap-4"
          role="tablist"
          aria-label="Filter properties by status"
        >
          {statusTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeStatus === tab.id;
            const count = properties.filter(
              (property) => property.status === tab.id
            ).length;

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`property-tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls="property-results"
                onClick={() => setActiveStatus(tab.id)}
                className={`flex min-w-0 items-center gap-3 rounded-2xl border p-4 text-left transition-all duration-200 sm:p-5 ${
                  isActive
                    ? "border-blue-600 bg-blue-50 shadow-sm ring-1 ring-blue-600/10"
                    : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                    isActive ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <Icon size={21} aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className={`block text-sm font-bold sm:text-base ${isActive ? "text-blue-700" : "text-gray-900"}`}>
                    {tab.label}
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-slate-500 sm:text-sm">
                    {tab.description}
                  </span>
                </span>
                <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${isActive ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

{/* Responsive property grid */}
        <div
          id="property-results"
          role="tabpanel"
          aria-labelledby={`property-tab-${activeStatus}`}
          className="scroll-mt-28"
        >
          {filteredProperties.length > 0 ? (
            <>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm text-slate-500" aria-live="polite">
                  <span className="font-semibold text-gray-900">{filteredProperties.length}</span>{" "}
                  {filteredProperties.length === 1 ? "property" : "properties"} found
                </p>
                <a
                  href="#property-results"
                  className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  {statusTabs.find((tab) => tab.id === activeStatus)?.label}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                {filteredProperties.map((property, index) => (
                  <motion.article
                    key={`${property.title}-${index}`}
                    initial={revealInitial}
                    animate={isVisible ? { opacity: 1, y: 0 } : undefined}
                    transition={{
                      duration: 0.5,
                      delay: prefersReducedMotion ? 0 : (index % 4) * 0.07,
                      ease: "easeOut",
                    }}
                    whileHover={prefersReducedMotion ? undefined : { y: -5, transition: { duration: 0.22 } }}
                    className="group relative flex min-w-0 flex-col overflow-hidden rounded-[18px] border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
                  >
                    {/* Property image */}
                    <div className="relative h-[220px] shrink-0 overflow-hidden sm:h-[220px] xl:h-[233px]">
                      <img
                        src={property.image}
                        alt={property.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.045]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                      <span className={`absolute left-3 top-3 z-10 max-w-[calc(100%-24px)] truncate rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-sm sm:left-3.5 sm:top-3.5 ${property.badgeColor}`}>
                        {property.badge}
                      </span>

                      {property.status !== "live" && (
                        <span className={`absolute right-3 top-3 z-10 rounded-full px-3 py-1.5 text-xs font-bold text-white shadow-sm ${property.status === "upcoming" ? "bg-blue-600" : "bg-slate-700"}`}>
                          {property.status === "upcoming" ? "Coming Soon" : "Closed"}
                        </span>
                      )}

                      <p className="absolute bottom-3 left-3.5 z-10 text-lg font-bold text-white drop-shadow-md sm:bottom-4 sm:text-xl">
                        {property.price}
                      </p>
                    </div>

                    {/* Property details */}
                    <div className="flex flex-1 flex-col p-4 sm:p-[17px]">
                      <h3 title={property.title} className="mb-2 truncate text-base font-semibold text-gray-950 sm:text-[17px]">
                        {property.title}
                      </h3>

                      <p className="mb-3 flex min-w-0 items-center gap-1.5 text-sm text-slate-500">
                        <MapPin size={16} className="shrink-0 text-slate-500" />
                        <span className="truncate">{property.location}</span>
                      </p>

                      <div className="mb-4 flex min-h-6 flex-wrap items-center gap-x-3 gap-y-2 text-xs text-slate-500 sm:text-[13px]">
                        <span className="inline-flex items-center gap-1.5">
                          <Maximize size={14} className="shrink-0" />
                          {property.area}
                        </span>
                        {property.bedrooms && (
                          <span className="inline-flex items-center gap-1.5">
                            <BedDouble size={15} className="shrink-0" />
                            {property.bedrooms}
                          </span>
                        )}
                        <span className="rounded-full bg-gray-100 px-2.5 py-1 text-slate-500 transition-colors duration-200 group-hover:bg-blue-50 group-hover:text-blue-600">
                          {property.category}
                        </span>
                      </div>

                      {property.status === "live" ? (
                        <button
                          type="button"
                          onClick={() => handleEnquiry(property)}
                          className="mt-auto inline-flex w-full items-center justify-center rounded-xl bg-[#FFBE00] px-4 py-2.5 text-sm font-semibold text-gray-950 shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#F5B400] hover:shadow-md active:translate-y-0 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                        >
                          Enquire Now
                        </button>
                      ) : (
                        <div className={`mt-auto flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold ${property.status === "upcoming" ? "bg-blue-50 text-blue-700" : "bg-slate-100 text-slate-600"}`}>
                          {property.status === "upcoming" ? <CalendarClock size={16} /> : <CheckCircle2 size={16} />}
                          {property.status === "upcoming" ? "Coming Soon" : "Deal Closed"}
                        </div>
                      )}
                    </div>
                  </motion.article>
                ))}
              </div>
            </>
            ) : (
            <div className="flex min-h-[220px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-5 py-10 text-center sm:min-h-[280px]">
              <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
                {activeStatus === "upcoming" ? <CalendarClock size={27} /> : <CheckCircle2 size={27} />}
              </span>
              <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                {activeStatus === "upcoming" ? "Upcoming properties will appear here" : "Closed properties will appear here"}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                {activeStatus === "upcoming"
                  ? "There are no upcoming listings published yet. Please check back soon."
                  : "There are no closed listings to display yet."}
              </p>
              </div>
          )}
        </div>
      </div>
    </section>
  );
}