import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BedDouble,
  Maximize,
  MapPin,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import prop1 from '../assets/1.png';
import prop2 from '../assets/3.png';

type Property = {
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
    title: "Independent Villa with Garden",
    price: "₹2.5 Crores",
    location: "ECR, Chennai",
    area: "3200 sqft",
    bedrooms: "4 BHK",
    category: "Residential",
    badge: "Premium",
    badgeColor: "bg-blue-600",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Commercial Office Space",
    price: "₹1.2 Crore",
    location: "Anna Nagar, Chennai",
    area: "2500 sqft",
    category: "Commercial",
    badge: "Hot Deal",
    badgeColor: "bg-orange-500",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "3BHK Bank NPA Apartment",
    price: "₹38 Lakhs",
    location: "RS Puram, Coimbatore",
    area: "1100 sqft",
    bedrooms: "3 BHK",
    category: "Residential",
    badge: "NPA Deal",
    badgeColor: "bg-red-500",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Commercial Showroom Space",
    price: "₹75 Lakhs",
    location: "Gandhipuram, Coimbatore",
    area: "1800 sqft",
    category: "Commercial",
    badge: "Hot Deal",
    badgeColor: "bg-orange-500",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Independent Villa - 4BHK",
    price: "₹1.8 Crores",
    location: "Saravanampatti, Coimbatore",
    area: "2600 sqft",
    bedrooms: "4 BHK",
    category: "Residential",
    badge: "Premium",
    badgeColor: "bg-blue-600",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Residential Plot - 1200 sqft",
    price: "₹28 Lakhs",
    location: "Peelamedu, Coimbatore",
    area: "1200 sqft",
    category: "Land",
    badge: "New Listing",
    badgeColor: "bg-emerald-500",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Textile Mill Godown",
    price: "₹1.2 Crores",
    location: "Tiruppur Road, Coimbatore",
    area: "6000 sqft",
    category: "Industrial",
    badge: "Limited Availability",
    badgeColor: "bg-amber-500",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "2BHK Bank Auction Flat",
    price: "₹29 Lakhs",
    location: "Singanallur, Coimbatore",
    area: "900 sqft",
    bedrooms: "2 BHK",
    category: "Residential",
    badge: "NPA Deal",
    badgeColor: "bg-red-500",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Commercial Office - 1st Floor",
    price: "₹55 Lakhs",
    location: "Avinashi Road, Coimbatore",
    area: "1400 sqft",
    category: "Commercial",
    badge: "Hot Deal",
    badgeColor: "bg-orange-500",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Agricultural Land - 3 Acres",
    price: "₹45 Lakhs",
    location: "Pollachi, Coimbatore",
    area: "3 Acres",
    category: "Land",
    badge: "New Listing",
    badgeColor: "bg-emerald-500",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "3BHK Premium Apartment",
    price: "₹85 Lakhs",
    location: "Race Course, Coimbatore",
    area: "1600 sqft",
    bedrooms: "3 BHK",
    category: "Residential",
    badge: "Premium",
    badgeColor: "bg-blue-600",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Bank NPA Shop Complex",
    price: "₹42 Lakhs",
    location: "Ukkadam, Coimbatore",
    area: "1000 sqft",
    category: "Commercial",
    badge: "NPA Deal",
    badgeColor: "bg-red-500",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Warehouse - 8000 sqft",
    price: "₹1.1 Crores",
    location: "Kinathukadavu, Coimbatore",
    area: "8000 sqft",
    category: "Industrial",
    badge: "Limited Availability",
    badgeColor: "bg-amber-500",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "1BHK Compact Flat",
    price: "₹18 Lakhs",
    location: "Podanur, Coimbatore",
    area: "550 sqft",
    bedrooms: "1 BHK",
    category: "Residential",
    badge: "NPA Deal",
    badgeColor: "bg-red-500",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
  },
];

export default function Properties() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

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
      `https://wa.me/?text=${encodeURIComponent(message)}`,
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
          animate={
            isVisible
              ? { opacity: 1, y: 0 }
              : undefined
          }
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-8 flex flex-col items-start justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end"
        >
          <div>
            <p className="mb-2 text-sm font-medium text-blue-600 sm:text-base">
              Featured Listings
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              Top Properties
            </h2>
          </div>

          <a
            href="#all-properties"
            className="
              group inline-flex shrink-0 items-center justify-center gap-3
              rounded-xl border border-gray-200 bg-gray-50
              px-5 py-2.5 text-sm font-medium text-gray-900
              transition-all duration-300 ease-out
              hover:-translate-y-0.5 hover:border-gray-300
              hover:bg-white hover:shadow-md
              active:translate-y-0
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-blue-500 focus-visible:ring-offset-2
            "
          >
            View All
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        {/* Responsive property grid */}
        <div
          id="all-properties"
          className="
            grid grid-cols-1
            gap-5
            sm:grid-cols-2 sm:gap-6
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {properties.map((property, index) => (
            <motion.article
              key={`${property.title}-${index}`}
              initial={revealInitial}
              animate={
                isVisible
                  ? { opacity: 1, y: 0 }
                  : undefined
              }
              transition={{
                duration: 0.5,
                delay: prefersReducedMotion
                  ? 0
                  : (index % 4) * 0.07,
                ease: "easeOut",
              }}
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: -5,
                      transition: { duration: 0.22 },
                    }
              }
              className="
                group relative flex min-w-0 flex-col
                overflow-hidden rounded-[18px]
                border border-gray-100 bg-white
                shadow-sm
                transition-shadow duration-300
                hover:shadow-lg
              "
            >
              {/* Property image */}
              <div className="relative h-[225px] shrink-0 overflow-hidden sm:h-[220px] xl:h-[233px]">
                <img
                  src={property.image}
                  alt={property.title}
                  loading="lazy"
                  className="
                    h-full w-full object-cover object-center
                    transition-transform duration-500 ease-out
                    group-hover:scale-[1.045]
                  "
                />

                {/* Dark gradient for readable price */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Deal badge */}
                <span
                  className={`
                    absolute left-3 top-3 z-10
                    max-w-[calc(100%-24px)] truncate
                    rounded-full px-3 py-1.5
                    text-xs font-semibold text-white
                    shadow-sm sm:left-3.5 sm:top-3.5
                    ${property.badgeColor}
                  `}
                >
                  {property.badge}
                </span>

                {/* Price */}
                <p className="absolute bottom-3 left-3.5 z-10 text-lg font-bold text-white drop-shadow-md sm:bottom-4 sm:text-xl">
                  {property.price}
                </p>
              </div>

              {/* Property details */}
              <div className="flex flex-1 flex-col p-4 sm:p-[17px]">
                <h3
                  title={property.title}
                  className="
                    mb-2 truncate text-base font-semibold
                    text-gray-950 sm:text-[17px]
                  "
                >
                  {property.title}
                </h3>

                <p className="mb-3 flex min-w-0 items-center gap-1.5 text-sm text-slate-500">
                  <MapPin
                    size={16}
                    className="shrink-0 text-slate-500"
                  />

                  <span className="truncate">
                    {property.location}
                  </span>
                </p>

                {/* Area, bedrooms and category */}
                <div className="mb-4 flex min-h-6 flex-wrap items-center gap-x-3 gap-y-2 text-xs text-slate-500 sm:text-[13px]">
                  <span className="inline-flex items-center gap-1.5">
                    <Maximize
                      size={14}
                      className="shrink-0"
                    />
                    {property.area}
                  </span>

                  {property.bedrooms && (
                    <span className="inline-flex items-center gap-1.5">
                      <BedDouble
                        size={15}
                        className="shrink-0"
                      />
                      {property.bedrooms}
                    </span>
                  )}

                  <span className="rounded-full bg-gray-100 px-2.5 py-1 text-slate-500 transition-colors duration-200 group-hover:bg-blue-50 group-hover:text-blue-600">
                    {property.category}
                  </span>
                </div>

                {/* Enquire button */}
                <button
                  type="button"
                  onClick={() => handleEnquiry(property)}
                  className="
                    mt-auto inline-flex w-full items-center
                    justify-center rounded-xl
                    bg-[#FFBE00] px-4 py-2.5
                    text-sm font-semibold text-gray-950
                    shadow-sm
                    transition-all duration-200 ease-out
                    hover:-translate-y-0.5 hover:bg-[#F5B400]
                    hover:shadow-md
                    active:translate-y-0 active:scale-[0.99]
                    focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-amber-500
                    focus-visible:ring-offset-2
                  "
                >
                  Enquire Now
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}