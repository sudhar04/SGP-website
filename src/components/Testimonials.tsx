
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      '"SGP Promoters helped me acquire an NPA property at 40% below market value. The entire process was transparent and hassle-free. I could not have done this without their expert guidance."',
    initials: "SR",
    name: "Suresh Rajan",
    role: "Property Investor",
    location: "Chennai",
    avatar: "bg-[#2865f5]",
  },
  {
    quote:
      '"Got my home loan approved in just 6 days! Their team handled all the paperwork and negotiated the best interest rate for me. Highly recommend to anyone looking for a home loan."',
    initials: "PV",
    name: "Priya Venkatesh",
    role: "Home Buyer",
    location: "Bangalore",
    avatar: "bg-[#059b75]",
  },
  {
    quote:
      '"I was looking for commercial space for my business and SGP Promoters found me the perfect property within my budget. Their market knowledge and network is unmatched."',
    initials: "MF",
    name: "Mohammed Farooq",
    role: "Business Owner",
    location: "Hyderabad",
    avatar: "bg-[#8238f5]",
  },
  {
    quote:
      '"We needed institutional financing for our school expansion. SGP Promoters structured a custom financial solution and got it approved. Truly professional and dedicated team."',
    initials: "LN",
    name: "Lakshmi Narayana",
    role: "School Principal",
    location: "Coimbatore",
    avatar: "bg-[#e77b00]",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative isolate w-full overflow-hidden
        bg-[#171c24] text-white"
    >
      {/* Background watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0
          top-[39%] z-0 select-none overflow-hidden"
      >
        <div
          className="whitespace-nowrap text-center
            font-black leading-none tracking-[-10px]
            text-white/[0.035]
            text-[150px] sm:text-[220px]
            lg:text-[280px] xl:text-[310px]"
        >
          SGP
        </div>
      </div>

      {/* Same container width and horizontal spacing as Navbar */}
      <div
        className="relative z-10 mx-auto w-full max-w-[1360px]
          px-5 pb-16 pt-[68px]
          sm:px-8 sm:pb-[72px] sm:pt-[72px]
          lg:px-10 lg:pb-[84px]
          xl:px-12"
      >
        {/* Section heading */}
        <header className="mb-10 text-center sm:mb-12 lg:mb-[58px]">
          <p
            className="mb-[10px] text-[13px] font-bold
              uppercase leading-5 tracking-[1.2px]
              text-[#ffbd00] sm:text-[14px]"
          >
            Client Stories
          </p>

          <h2
            className="text-[32px] font-extrabold
              leading-[1.15] tracking-[-1px]
              text-white sm:text-[42px]
              lg:text-[52px] lg:leading-[1.1]
              lg:tracking-[-1.5px]"
          >
            What Our Clients Say
          </h2>
        </header>

        {/* Testimonial cards */}
        <div
          className="grid grid-cols-1 gap-5
            sm:grid-cols-2 sm:gap-5
            xl:grid-cols-4 xl:gap-[21px]"
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.initials}
              className="flex min-w-0 flex-col
                rounded-[25px] border
                border-white/[0.09] bg-[#242a33]/90
                p-5 transition-colors duration-300
                hover:border-[#ffbd00]/30
                sm:p-6 lg:min-h-[348px]
                lg:p-[26px]"
            >
              {/* Quote icon */}
              <Quote
                size={32}
                strokeWidth={2.2}
                aria-hidden="true"
                className="mb-[17px] shrink-0
                  text-[#d5a900]"
              />

              {/* Testimonial text */}
              <p
                className="mb-6 text-[14px]
                  font-normal leading-[1.6]
                  text-[#e0e5ed]
                  sm:text-[14px]"
              >
                {testimonial.quote}
              </p>

              {/* Star rating */}
              <div
                className="mb-[11px] mt-auto flex
                  items-center gap-[2px]"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    size={15}
                    strokeWidth={1.5}
                    fill="#ffbd00"
                    className="text-[#ffbd00]"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Client details */}
              <div className="flex min-w-0 items-center gap-3">
                <div
                  className={`flex h-[43px] w-[43px]
                    shrink-0 items-center justify-center
                    rounded-full text-[13px] font-bold
                    text-white ${testimonial.avatar}`}
                  aria-hidden="true"
                >
                  {testimonial.initials}
                </div>

                <div className="min-w-0">
                  <h3
                    className="truncate text-[14px]
                      font-bold leading-[1.4]
                      text-white"
                  >
                    {testimonial.name}
                  </h3>

                  <p
                    className="text-[12px]
                      leading-[1.5] text-[#8995a7]"
                  >
                    {testimonial.role} · {testimonial.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
