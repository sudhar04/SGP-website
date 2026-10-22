import { useEffect, useRef, useState } from "react";
import type { FormEvent, KeyboardEvent } from "react";
import { Check, ChevronDown, Phone, Send } from "lucide-react";

const requirements = [
  "Bank NPA Properties",
  "Property Consultancy",
  "Home Loan",
  "Business Loan",
  "Financial Services",
  "Debt Recovery Agency (DRA)",
  "Other",
];

const phoneNumbers = [
  { label: "+91 97877 47775", number: "+919787747775" },
  { label: "+91 99940 65778", number: "+919994065778" },
  { label: "+91 99940 64778", number: "+919994064778" },
];

export default function ContactMessageForm() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const [isVisible, setIsVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [requirement, setRequirement] = useState("");

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

  // Close the custom dropdown whenever the user clicks/taps anywhere outside it.
  useEffect(() => {
    if (!dropdownOpen) return;

    const handleOutsidePointer = (event: PointerEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
        setHighlightedIndex(-1);
      }
    };

    const handleEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setDropdownOpen(false);
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener("pointerdown", handleOutsidePointer);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleOutsidePointer);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [dropdownOpen]);

  useEffect(() => {
    if (highlightedIndex >= 0) {
      optionRefs.current[highlightedIndex]?.scrollIntoView({
        block: "nearest",
      });
    }
  }, [highlightedIndex]);

  const selectRequirement = (value: string) => {
    setRequirement(value);
    setDropdownOpen(false);
    setHighlightedIndex(-1);
  };

  const handleDropdownKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!dropdownOpen) {
        setDropdownOpen(true);
        setHighlightedIndex(Math.max(0, requirements.indexOf(requirement)));
      } else {
        setHighlightedIndex((index) =>
          index < 0 ? 0 : (index + 1) % requirements.length
        );
      }
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!dropdownOpen) {
        setDropdownOpen(true);
        setHighlightedIndex(
          requirement ? requirements.indexOf(requirement) : requirements.length - 1
        );
      } else {
        setHighlightedIndex((index) =>
          index <= 0 ? requirements.length - 1 : index - 1
        );
      }
    } else if (event.key === "Enter" && dropdownOpen && highlightedIndex >= 0) {
      event.preventDefault();
      selectRequirement(requirements[highlightedIndex]);
    } else if (event.key === " " && !dropdownOpen) {
      event.preventDefault();
      setDropdownOpen(true);
      setHighlightedIndex(Math.max(0, requirements.indexOf(requirement)));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "Not provided");
    const message = String(data.get("message") || "Not provided");

    if (!requirement) {
      setDropdownOpen(true);
      setHighlightedIndex(0);
      return;
    }

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
    setRequirement("");
  };

  const inputClass =
    "min-w-0 w-full rounded-xl border border-[#DEE5EF] bg-[#F7F8FA] px-3.5 py-3 text-[14px] text-[#172333] outline-none transition-all duration-200 placeholder:text-[#718198] hover:border-[#1677ff] focus:border-[#1677ff] focus:bg-white focus:ring-2 focus:ring-[#1677ff]/45 sm:px-4 sm:text-[15px]";

  return (
    <div
      ref={sectionRef}
      className={`min-w-0 transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="rounded-[20px] border border-[#EDF0F5] bg-white p-4 shadow-[0_8px_30px_rgba(20,35,55,0.035)] sm:p-7 lg:p-8">
        <h2 className="text-[24px] font-bold leading-tight tracking-tight text-[#172333] sm:text-[27px]">
          Send us a Message
        </h2>

        <p className="mt-2 text-[15px] leading-6 text-[#687B91] sm:text-[17px]">
          Fill the form below and we will get back to you
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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

          {/* Custom dropdown: yellow hover/highlight without the browser's blue native menu. */}
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded={dropdownOpen}
              aria-label="Select Requirement"
              onClick={() => {
                setDropdownOpen((open) => !open);
                setHighlightedIndex(
                  requirement ? requirements.indexOf(requirement) : 0
                );
              }}
              onKeyDown={handleDropdownKeyDown}
              className={`flex min-h-[52px] w-full items-center justify-between gap-3 rounded-xl border bg-[#F7F8FA] px-3.5 py-3 text-left text-[14px] outline-none transition-colors duration-200 sm:px-4 sm:text-[15px] ${
                dropdownOpen
                  ? "border-[#1677ff] bg-white ring-2 ring-[#1677ff]/55"
                  : "border-[#DEE5EF] hover:border-[#1677ff]"
              }`}
            >
              <span className={requirement ? "text-[#172333]" : "text-[#718198]"}>
                {requirement || "Select Requirement *"}
              </span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-slate-700 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {dropdownOpen && (
              <div
                role="listbox"
                aria-label="Requirements"
                className="absolute left-0 right-0 top-full z-50 mt-1 max-h-60 overflow-y-auto rounded-xl border border-[#DEE5EF] bg-white p-1.5 shadow-xl shadow-slate-900/15"
              >
                {requirements.map((item, index) => {
                  const selected = requirement === item;
                  const highlighted = highlightedIndex === index;

                  return (
                    <button
                      key={item}
                      ref={(element) => {
                        optionRefs.current[index] = element;
                      }}
                      type="button"
                      role="option"
                      aria-selected={selected}
                      onMouseEnter={() => setHighlightedIndex(index)}
                      onClick={() => selectRequirement(item)}
                      className={`flex min-h-10 w-full items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-left text-sm transition-colors duration-150 ${
                        highlighted || selected
                          ? "bg-[#FFBE00] text-slate-950"
                          : "text-slate-700 hover:bg-[#FFBE00] hover:text-slate-950"
                      }`}
                    >
                      <span>{item}</span>
                      {selected && <Check size={16} className="shrink-0" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <textarea
            name="message"
            rows={4}
            placeholder="Your Message (optional)"
            aria-label="Your Message"
            className={`${inputClass} min-h-[120px] resize-y`}
          />

          <button
            type="submit"
            className="flex min-h-[52px] w-full items-center justify-center gap-3 rounded-xl bg-[#FFBE00] px-5 py-3 text-[16px] font-semibold text-gray-950 transition-all duration-300 hover:bg-[#F5B400] hover:shadow-md active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBE00] focus-visible:ring-offset-2"
          >
            <Send size={17} />
            Send Message
          </button>
        </form>

        <div className="my-6 border-t border-[#EDF0F5]" />

        <p className="mb-4 text-center text-[14px] text-[#687B91]">
          Or call us directly
        </p>

        <div className="grid grid-cols-1 gap-3 min-[380px]:grid-cols-2 lg:grid-cols-3">
          {phoneNumbers.map((item) => (
            <a
              key={item.number}
              href={`tel:${item.number}`}
              className="flex min-h-[48px] min-w-0 items-center justify-center gap-2 rounded-xl border border-[#DCE7FF] bg-[#F4F7FF] px-2 py-3 text-center text-[13px] font-semibold text-[#172333] transition-colors duration-200 hover:border-[#FFBE00] hover:bg-[#FFBE00] sm:text-[14px]"
            >
              <Phone size={15} className="shrink-0" />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
