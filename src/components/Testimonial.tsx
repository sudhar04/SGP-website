
import { Quote, Star, ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "SGP Promoters helped me acquire an NPA property at 40% below market value. The entire process was transparent and hassle-free. I could not have done this without their expert guidance.",
    initials: "SR",
    name: "Suresh Rajan",
    role: "Property Investor",
    location: "Chennai",
    avatar: "bg-blue-600",
  },
  {
    quote:
      "Got my home loan approved in just 6 days! Their team handled all the paperwork and negotiated the best interest rate for me. Highly recommend to anyone looking for a home loan.",
    initials: "PV",
    name: "Priya Venkatesh",
    role: "Home Buyer",
    location: "Bangalore",
    avatar: "bg-emerald-600",
  },
  {
    quote:
      "I was looking for commercial space for my business and SGP Promoters found me the perfect property within my budget. Their market knowledge and network is unmatched.",
    initials: "MF",
    name: "Mohammed Farooq",
    role: "Business Owner",
    location: "Hyderabad",
    avatar: "bg-violet-600",
  },
  {
    quote:
      "We needed institutional financing for our school expansion. SGP Promoters structured a custom financial solution and got it approved. Truly professional and dedicated team.",
    initials: "LN",
    name: "Lakshmi Narayana",
    role: "School Principal",
    location: "Coimbatore",
    avatar: "bg-orange-500",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden bg-[#F5F7FA]"
    >
      <div className="mx-auto w-full max-w-[1360px] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-12">

        {/* Section Heading */}
        <header className="mb-10 text-center sm:mb-12 lg:mb-14">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[2px] text-[#B88900] sm:text-sm">
            Client Stories
          </span>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#142B3B] sm:text-4xl lg:text-[48px]">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Discover how we help our clients make confident property
            and financial decisions.
          </p>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#FFBE00]" />
        </header>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4">

          {testimonials.map((testimonial) => (
            <article
              key={testimonial.initials}
              className="
                group relative flex min-w-0 flex-col
                overflow-hidden rounded-2xl
                border border-slate-200 bg-white
                p-5 shadow-sm
                transition-all duration-300
                hover:-translate-y-2
                hover:border-[#FFBE00]/70
                hover:shadow-[0_16px_35px_rgba(20,43,59,0.12)]
                sm:p-6 lg:min-h-[340px]
              "
            >
              {/* Gold top accent */}
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#FFBE00] transition-transform duration-300 group-hover:scale-x-100" />

              {/* Quote Icon */}
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50">
                <Quote
                  size={25}
                  strokeWidth={2.2}
                  className="text-[#C49300]"
                  aria-hidden="true"
                />
              </div>

              {/* Review */}
              <p className="mb-7 text-sm leading-[1.8] text-slate-600 transition-colors duration-300 group-hover:text-slate-800">
                "{testimonial.quote}"
              </p>

              {/* Rating */}
              <div
                className="mb-4 mt-auto flex items-center gap-1"
                role="img"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    size={16}
                    strokeWidth={1.5}
                    fill="#FFBE00"
                    className="text-[#FFBE00]"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Client Information */}
              <div className="flex min-w-0 items-center gap-3 border-t border-slate-100 pt-4">

                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${testimonial.avatar}`}
                  aria-hidden="true"
                >
                  {testimonial.initials}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-bold text-[#142B3B]">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {testimonial.role} · {testimonial.location}
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-[#C49300] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}
