import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { Phone, Send } from "lucide-react";

export default function ContactMessageForm() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "Not provided");
    const requirement = String(data.get("requirement") || "");
    const message = String(data.get("message") || "Not provided");

    const whatsappMessage = [
      "Hello SGP Promoters,",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Requirement: ${requirement}`,
      `Message: ${message}`,
    ].join("\n");

    const url = `https://wa.me/919787747775?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
    form.reset();
  };

  const inputClass =
    "min-w-0 w-full rounded-xl border border-[#DEE5EF] bg-[#F7F8FA] px-3.5 py-3 text-[14px] text-[#172333] outline-none transition-all duration-200 placeholder:text-[#718198] hover:border-blue-200 focus:border-[#0866FF] focus:bg-white focus:ring-2 focus:ring-blue-100 sm:px-4 sm:text-[15px]";

  return (
    <div
      ref={sectionRef}
      className={`min-w-0 transition-all duration-700 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
    >
      <div className="rounded-[20px] border border-[#EDF0F5] bg-white p-5 shadow-[0_8px_30px_rgba(20,35,55,0.035)] sm:p-7 lg:p-8">
        <h2 className="text-[24px] font-bold leading-tight tracking-tight text-[#172333] sm:text-[27px]">
          Send us a Message
        </h2>

        <p className="mt-2 text-[15px] leading-6 text-[#687B91] sm:text-[17px]">
          Fill the form below and we will get back to you
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-4"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your Name *"
              aria-label="Your Name"
              required
              className={inputClass}
            />

            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Phone Number *"
              aria-label="Phone Number"
              required
              pattern="[+0-9 ()-]{7,20}"
              title="Enter a valid phone number"
              className={inputClass}
            />
          </div>

          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email (optional)"
            aria-label="Email"
            className={inputClass}
          />

          <select
            name="requirement"
            defaultValue=""
            required
            aria-label="Select Requirement"
            className={`${inputClass} appearance-auto`}
          >
            <option value="" disabled>
              Select Requirement *
            </option>
            <option value="Bank NPA Properties">
              Bank NPA Properties
            </option>
            <option value="Property Purchase">
              Property Purchase
            </option>
            <option value="Property Sale">
              Property Sale
            </option>
            <option value="Personal Loan">
              Personal Loan
            </option>
            <option value="Business Loan">
              Business Loan
            </option>
            <option value="Finance & Investment">
              Finance & Investment
            </option>
            <option value="Debt Recovery Agency (DRA)">
              Debt Recovery Agency (DRA)
            </option>
            <option value="Other">Other</option>
          </select>

          <textarea
            name="message"
            rows={4}
            placeholder="Your Message (optional)"
            aria-label="Your Message"
            className={`${inputClass} min-h-[120px] resize-y`}
          />

          <button
            type="submit"
            className="flex min-h-[52px] w-full items-center justify-center gap-3 rounded-xl bg-[#FFBE00] px-5 py-3 text-[16px] font-semibold text-gray-950 transition-all duration-300 hover:bg-[#F5B400] hover:shadow-md active:scale-[0.99]"
          >
            <Send size={17} />
            Send Message
          </button>
        </form>

        <div className="my-6 border-t border-[#EDF0F5]" />

        <p className="mb-4 text-center text-[14px] text-[#687B91]">
          Or call us directly
        </p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            { label: "+91 97877 47775", number: "+919787747775" },
            { label: "+91 99940 65778", number: "+919994065778" },
            { label: "+91 99940 64778", number: "+919994064778" },
          ].map((item) => (
            <a
              key={item.number}
              href={`tel:${item.number}`}
              className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-[#DCE7FF] bg-[#F4F7FF] px-2 py-3 text-center text-[13px] font-semibold text-[#172333] transition-colors duration-200 hover:border-[#0866FF] hover:bg-[#E7EFFF] sm:text-[14px]"
            >
              <Phone
                size={15}
                className="shrink-0 text-[#0866FF]"
              />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
