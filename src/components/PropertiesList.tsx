import { useEffect, useRef, useState } from "react";
import prop1 from '../assets/prop-1.png';
import prop2 from '../assets/prop-2.png';
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  Check,
  X,
  MapPin,
  Maximize,
  BedDouble,
} from "lucide-react";

type Property = {
  id: number;
  title: string;
  location: string;
  price: string;
  area: string;
  bedrooms?: string;
  category: string;
  badge: string;
  badgeColor: string;
  description?: string;
  image: string;
};

const properties: Property[] = [
  {
    id: 1,
    title: "Premium 4 BHK House with 4 Cent Land",
    location: "Mathukkarai, Coimbatore — Palakkad Road",
    price: "₹70 Lakhs*",
    area: "4 Cents",
    category: "Residential",
    badge: "30% OFF",
    badgeColor: "bg-red-500",
    description:"East-facing 4-cent residential property with a spacious 4 BHK house and a peaceful, pollution-free atmosphere. Located approximately 500 metres from the L&T Bypass Road, with schools, colleges, hospitals, markets and transport facilities nearby. Bank loan available for eligible buyers.",
    image:prop2,
  },
  {
    id: 2,
    title: "3 BHK Individual House for Sale",
    location: "Peedampalli, near L&T Bypass Road, Coimbatore",
    price: "Contact for Price",
    area: "Not specified",
    bedrooms: "3 BHK",
    category: "Residential",
    badge: "Affordable Property",
    badgeColor: "bg-emerald-500",
    description:"Affordable 3 BHK individual house for sale in Peedampalli, near L&T Bypass Road. Convenient access to nearby facilities and amenities. Bank loan available for eligible buyers. Contact SGP Promoters, Coimbatore, for pricing and further details.",
    image:prop1,
  },
  {
    id: 3,
    title: "Retail Shop in Prime Location",
    location: "T. Nagar, Chennai",
    price: "₹75 Lakhs",
    area: "600 sqft",
    category: "Commercial",
    badge: "Hot Deal",
    badgeColor: "bg-orange-500",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 4,
    title: "Independent Villa with Garden",
    location: "ECR, Chennai",
    price: "₹2.5 Crores",
    area: "3200 sqft",
    bedrooms: "4 BHK",
    category: "Residential",
    badge: "Premium",
    badgeColor: "bg-blue-600",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 5,
    title: "2BHK Flat - NPA Deal",
    location: "Tambaram, Chennai",
    price: "₹22 Lakhs",
    area: "850 sqft",
    bedrooms: "2 BHK",
    category: "Residential",
    badge: "NPA Deal",
    badgeColor: "bg-red-500",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 6,
    title: "Commercial Office Space",
    location: "Anna Nagar, Chennai",
    price: "₹1.2 Crore",
    area: "2500 sqft",
    category: "Commercial",
    badge: "Hot Deal",
    badgeColor: "bg-orange-500",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
  },
];

const propertyTypes = [
  "All Types",
  "Residential",
  "Commercial",
  "Industrial",
  "Land",
  "Institutional",
];

const budgets = [
  "All Budgets",
  "Under 25 Lakhs",
  "25-50 Lakhs",
  "50 Lakhs - 1 Crore",
  "1-3 Crores",
  "Above 3 Crores",
];

function getPriceInLakhs(price: string): number {
  const normalized = price.replace(/[₹,\s]/g, "").toLowerCase();
  const value = Number.parseFloat(normalized);
  if (!Number.isFinite(value)) return 0;
  if (normalized.includes("crore")) return value * 100;
  if (normalized.includes("lakh")) return value;
  return value;
}

export default function PropertiesList() {
  const sectionRef = useRef<HTMLElement>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedBudget, setSelectedBudget] = useState("All Budgets");
  const [openDropdown, setOpenDropdown] = useState<"type" | "budget" | null>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  const filteredProperties = properties.filter((property) => {
    const query = searchTerm.toLowerCase().trim();
    const matchesSearch =
      property.title.toLowerCase().includes(query) ||
      property.location.toLowerCase().includes(query) ||
      property.category.toLowerCase().includes(query);

    const matchesType =
      selectedType === "All Types" || property.category === selectedType ||
      (selectedType === "Industrial" && property.title.toLowerCase().includes("industrial"));

    const price = getPriceInLakhs(property.price);
    const matchesBudget =
      selectedBudget === "All Budgets" ||
      (selectedBudget === "Under 25 Lakhs" && price < 25) ||
      (selectedBudget === "25-50 Lakhs" && price >= 25 && price <= 50) ||
      (selectedBudget === "50 Lakhs - 1 Crore" && price > 50 && price <= 100) ||
      (selectedBudget === "1-3 Crores" && price > 100 && price <= 300) ||
      (selectedBudget === "Above 3 Crores" && price > 300);

    return matchesSearch && matchesType && matchesBudget;
  });

useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = Number((entry.target as HTMLElement).dataset.id);
          setVisibleCards((previous) => previous.includes(id) ? previous : [...previous, id]);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [filteredProperties.length]);

  const handleEnquiry = (property: Property) => {
    const message = `Hello SGP Promoters, I'm interested in this property:\n\n${property.title}\nLocation: ${property.location}\nPrice: ${property.price}\n\nPlease share more details.`;
    window.open(
      `https://wa.me/919787747775?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

const clearFilters = () => {
    setSearchTerm("");
    setSelectedType("All Types");
    setSelectedBudget("All Budgets");
    setOpenDropdown(null);
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full overflow-hidden bg-[#f8fafc] pb-16 pt-7 sm:pb-20 sm:pt-10"
    >
      {/* Keep the same horizontal alignment as the navbar logo/container. */}
      <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-10 xl:px-12">
        {/* Search and filter button */}
        <div
          data-reveal
          data-id={100}
          className={`flex flex-col gap-3 transition-all duration-700 sm:flex-row ${
            visibleCards.includes(100) ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          <label className="flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 shadow-sm transition-all duration-300 focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100">
            <Search size={19} className="shrink-0 text-slate-500" />
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by name or location..."
              aria-label="Search properties by name or location"
              className="h-[50px] w-full min-w-0 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-500 sm:text-[15px]"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
                className="rounded-full p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
              >
                <X size={17} />
              </button>
            )}
          </label>

          <button
            type="button"
            onClick={() => {
              setShowFilters((previous) => !previous);
              setOpenDropdown(null);
            }}
            aria-expanded={showFilters}
            className={`inline-flex h-[50px] shrink-0 items-center justify-center gap-2 rounded-xl border px-5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400 hover:bg-amber-50 hover:text-slate-900 hover:shadow-md active:scale-[0.98] ${
              showFilters ? "border-amber-400 bg-[#ffbe00] text-slate-950" : "border-slate-200 bg-white text-slate-900 shadow-sm"
            }`}
          >
            <SlidersHorizontal size={18} />
            Filters
          </button>
        </div>

        {/* Responsive type and budget dropdowns */}
        <div
          className={`grid transition-all duration-300 ${
            showFilters ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-visible">
            {showFilters && (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(openDropdown === "type" ? null : "type")}
                    aria-expanded={openDropdown === "type"}
                    className="flex h-12 w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 text-left text-sm text-slate-900 shadow-sm transition hover:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-100 sm:text-[15px]"
                  >
                    <span>{selectedType}</span>
                    <ChevronDown size={17} className={`text-slate-500 transition-transform ${openDropdown === "type" ? "rotate-180" : ""}`} />
                  </button>
                  {openDropdown === "type" && (
                    <div className="absolute left-0 top-full z-40 mt-1 max-h-64 w-full overflow-y-auto rounded-xl border border-slate-200 bg-white p-1 shadow-xl">
                      {propertyTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => { setSelectedType(type); setOpenDropdown(null); }}
                          className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition hover:bg-amber-50 ${selectedType === type ? "bg-[#ffbe00] text-slate-950" : "text-slate-800"}`}
                        >
                          {type}
                          {selectedType === type && <Check size={16} />}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(openDropdown === "budget" ? null : "budget")}
                    aria-expanded={openDropdown === "budget"}
                    className="flex h-12 w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 text-left text-sm text-slate-900 shadow-sm transition hover:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-100 sm:text-[15px]"
                  >
                    <span>{selectedBudget}</span>
                    <ChevronDown size={17} className={`text-slate-500 transition-transform ${openDropdown === "budget" ? "rotate-180" : ""}`} />
                  </button>
                  {openDropdown === "budget" && (
                    <div className="absolute left-0 top-full z-40 mt-1 max-h-64 w-full overflow-y-auto rounded-xl border border-slate-200 bg-white p-1 shadow-xl">
                      {budgets.map((budget) => (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => { setSelectedBudget(budget); setOpenDropdown(null); }}
                          className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition hover:bg-amber-50 ${selectedBudget === budget ? "bg-[#ffbe00] text-slate-950" : "text-slate-800"}`}
                        >
                          {budget}
                          {selectedBudget === budget && <Check size={16} />}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6 mt-8 flex flex-wrap items-center justify-between gap-3 sm:mb-7 sm:mt-9">
          <p className="text-sm text-slate-500 sm:text-[15px]">
            {filteredProperties.length} {filteredProperties.length === 1 ? "property" : "properties"} found
          </p>
          {(searchTerm || selectedType !== "All Types" || selectedBudget !== "All Budgets") && (
            <button type="button" onClick={clearFilters} className="text-sm font-medium text-blue-600 transition hover:text-blue-800 hover:underline">
              Clear filters
            </button>
          )}
        </div>

        {/* Property cards */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {filteredProperties.map((property, index) => {
              const isVisible = visibleCards.includes(property.id);
              return (
                <article
                  key={property.id}
                  data-reveal
                  data-id={property.id}
                  style={{ transitionDelay: isVisible ? `${(index % 3) * 100}ms` : "0ms" }}
                  className={`group flex min-w-0 flex-col overflow-hidden rounded-[19px] border border-slate-200/70 bg-white shadow-sm transition-all duration-700 ease-out hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                >
                  <div className="relative h-[280px] w-full shrink-0 overflow-hidden sm:h-[300px] lg:h-[320px]">
                    <img
                      src={property.image}
                      alt={property.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent transition-opacity duration-300 group-hover:from-black/75" />
                    <span className={`absolute left-3.5 top-3.5 rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-sm sm:left-4 sm:top-3.5 ${property.badgeColor}`}>
                      {property.badge}
                    </span>
                    <p className="absolute bottom-0 left-0 right-0 px-4 pb-4 text-xl font-bold tracking-tight text-white drop-shadow-md">{property.price}</p>
                  </div>

                  <div className="flex flex-1 flex-col p-4 sm:p-[17px]">
                    <h2 className="text-[16px] font-semibold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-blue-700 sm:text-[17px]">{property.title}</h2>
                    <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
                      <MapPin size={16} className="shrink-0" />
                      <span>{property.location}</span>
                    </p>
                    {/* Property Description */}
                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
                      {property.description}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-slate-500 sm:text-[13px]">
                      <span className="inline-flex items-center gap-1"><Maximize size={14} />{property.area}</span>
                      {property.bedrooms && <span className="inline-flex items-center gap-1"><BedDouble size={15} />{property.bedrooms}</span>}
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-500">{property.category}</span>
                    </div>
                    <button type="button" onClick={() => handleEnquiry(property)} className="mt-4 inline-flex min-h-[40px] w-full items-center justify-center rounded-[11px] bg-[#ffbe00] px-4 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f5b400] hover:shadow-lg active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2">
                      Enquire Now
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-16 text-center">
            <Search size={34} className="mx-auto text-slate-400" />
            <h2 className="mt-4 text-lg font-semibold text-slate-900">No properties found</h2>
            <p className="mt-2 text-sm text-slate-500">Try another name, location, property type, or budget.</p>
            <button type="button" onClick={clearFilters} className="mt-5 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">Clear Filters</button>
          </div>
        )}
      </div>
    </section>
  );
}