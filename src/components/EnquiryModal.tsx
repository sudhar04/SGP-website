import { useEffect, useRef, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import { Check, ChevronDown, Phone, Send, X } from "lucide-react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PHONE_NUMBERS = [
  "+91 97877 47775",
  "+91 99940 65778",
  "+91 99940 64778",
];

const requirements = [
  "Bank NPA Properties",
  "Home Loan",
  "Business Loan",
  "Property Consultancy",
  "Financial Services",
  "Debt Recovery Agency (DRA)",
  "Other",
];

const fieldClass =
  "h-[52px] w-full rounded-xl border border-[#dfe5ed] bg-[#f7f8fa] px-3.5 text-sm text-slate-800 outline-none transition-colors duration-200 placeholder:text-slate-500 hover:border-[#1e40af] focus:border-[#1677ff] focus:bg-white focus:ring-1 focus:ring-[#1677ff]";

export default function EnquiryModal({
  isOpen,
  onClose,
}: EnquiryModalProps) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "",
    message: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (dropdownOpen) {
          setDropdownOpen(false);
        } else {
          onClose();
        }
      }

      if (dropdownOpen && requirements.length > 0) {
        if (event.key === "ArrowDown") {
          event.preventDefault();
          setHighlightedIndex((index) =>
            index < 0 ? 0 : (index + 1) % requirements.length
          );
        }

        if (event.key === "ArrowUp") {
          event.preventDefault();
          setHighlightedIndex((index) =>
            index <= 0 ? requirements.length - 1 : index - 1
          );
        }

        if (event.key === "Enter" && highlightedIndex >= 0) {
          event.preventDefault();
          selectRequirement(requirements[highlightedIndex]);
        }
      }
    };

    const handleOutsideClick = (event: PointerEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    document.addEventListener("pointerdown", handleOutsideClick, true);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
      document.removeEventListener("pointerdown", handleOutsideClick, true);
    };
  }, [isOpen, onClose, dropdownOpen, highlightedIndex]);

  useEffect(() => {
    if (highlightedIndex >= 0) {
      optionRefs.current[highlightedIndex]?.scrollIntoView({
        block: "nearest",
      });
    }
  }, [highlightedIndex]);

  if (!isOpen) return null;

  const selectRequirement = (requirement: string) => {
    setForm((previous) => ({ ...previous, requirement }));
    setDropdownOpen(false);
    setHighlightedIndex(-1);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.requirement) {
      setDropdownOpen(true);
      setHighlightedIndex(0);
      return;
    }

    const message = [
      "SGP Promoters - Enquiry",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email || "Not provided"}`,
      `Requirement: ${form.requirement}`,
      `Message: ${form.message.trim() || "Not provided"}`,
    ].join("\n");

    window.open(
      `https://wa.me/919787747775?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center overflow-y-auto bg-slate-950/60 px-3 py-3 backdrop-blur-[4px] sm:px-5 sm:py-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-modal-title"
        className="relative my-auto max-h-[calc(100dvh-1.5rem)] w-full max-w-[480px] overflow-y-auto rounded-[18px] border border-slate-200 bg-white px-4 py-5 text-slate-900 shadow-2xl sm:max-h-[calc(100dvh-2.5rem)] sm:px-8 sm:py-7"
        onMouseDown={(event) => event.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close enquiry form"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition-colors duration-200 hover:bg-amber-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e40af]"
        >
          <X size={20} />
        </button>

        {/* Heading */}
        <h2
          id="enquiry-modal-title"
          className="pr-9 text-[22px] font-bold leading-tight tracking-tight sm:text-2xl"
        >
          Get a Call Back
        </h2>

        <p className="mt-1.5 text-sm leading-5 text-slate-500">
          Fill in the form and our expert will call you.
        </p>

        {/* Enquiry form */}
        <form onSubmit={handleSubmit} className="mt-5 space-y-3">
          <input
            required
            minLength={2}
            autoComplete="name"
            placeholder="Your Name *"
            value={form.name}
            onChange={(event) =>
              setForm({ ...form, name: event.target.value })
            }
            className={fieldClass}
          />

          <input
            required
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            pattern="[0-9+() -]{8,20}"
            placeholder="Phone Number *"
            value={form.phone}
            onChange={(event) =>
              setForm({ ...form, phone: event.target.value })
            }
            className={fieldClass}
          />

          <input
            type="email"
            autoComplete="email"
            placeholder="Email (optional)"
            value={form.email}
            onChange={(event) =>
              setForm({ ...form, email: event.target.value })
            }
            className={fieldClass}
          />

          {/* Custom requirement dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded={dropdownOpen}
              aria-label="Select requirement"
              onClick={() => {
                setDropdownOpen((open) => !open);
                setHighlightedIndex(
                  Math.max(0, requirements.indexOf(form.requirement))
                );
              }}
              onKeyDown={(event) => {
                if (event.key === "ArrowDown" && !dropdownOpen) {
                  event.preventDefault();
                  setDropdownOpen(true);
                  setHighlightedIndex(0);
                }
              }}
              className={`flex h-[52px] w-full items-center justify-between gap-3 rounded-xl border bg-[#f8fafc] px-3.5 text-left text-sm outline-none transition-colors duration-200 focus:border-[#1677ff] focus:ring-1 focus:ring-[#1677ff] ${
                dropdownOpen
                  ? "border-[#dfe5ed] bg-white"
                  : "border-[#dfe5ed]"
              }`}
            >
              <span
                className={
                  form.requirement ? "text-slate-800" : "text-slate-500"
                }
              >
                {form.requirement || "Select Requirement *"}
              </span>

              <ChevronDown
                size={18}
                className={`shrink-0 text-[#1e40af] transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {dropdownOpen && (
              <div
                role="listbox"
                aria-label="Requirements"
                className="absolute left-0 right-0 top-full z-50 mt-1 max-h-[min(40dvh,280px)] overflow-y-auto overscroll-contain rounded-xl border border-[#dfe5ed] bg-white p-1.5 shadow-xl shadow-slate-900/15"
              >
                {requirements.map((requirement, index) => {
                  const selected = form.requirement === requirement;
                  const highlighted = highlightedIndex === index;

                  return (
                    <button
                      key={requirement}
                      ref={(element) => {
                        optionRefs.current[index] = element;
                      }}
                      type="button"
                      role="option"
                      aria-selected={selected}
                      onMouseEnter={() => setHighlightedIndex(index)}
                      onClick={() => selectRequirement(requirement)}
                      className={`flex min-h-10 w-full items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-left text-sm transition-colors duration-150 ${
                      highlighted
                        ? "bg-[#ffbd00] text-slate-950"
                        : selected
                          ? "bg-amber-50 font-semibold text-slate-900"
                          : "text-slate-700 hover:bg-[#ffbd00] hover:text-slate-950"
                    }`}
                    >
                      <span>{requirement}</span>
                      {selected && (
                        <Check size={16} className="shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <textarea
            rows={2}
            placeholder="Message (optional)"
            value={form.message}
            onChange={(event) =>
              setForm({ ...form, message: event.target.value })
            }
            className="min-h-[68px] w-full resize-y rounded-xl border border-[#dfe5ed] bg-[#f8fafc] px-3.5 py-3 text-sm leading-5 text-slate-800 outline-none transition-colors duration-200 placeholder:text-slate-500 hover:border-[#1e40af] focus:border-[#1677ff] focus:bg-white focus:ring-1 focus:ring-[#1677ff]"  />

          <button
            type="submit"
            className="flex h-[50px] w-full items-center justify-center gap-2.5 rounded-xl bg-[#ffbd00] px-4 text-sm font-bold text-slate-950 shadow-sm transition-all duration-200 hover:bg-[#f3ae00] hover:shadow-md active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e40af] focus-visible:ring-offset-2"
          >
            <Send size={17} />
            Submit Enquiry
          </button>
        </form>

        {/* Direct-call section */}
        <div className="mb-4 mt-5 border-t border-slate-200" />

        <p className="mb-3 text-center text-[13px] font-medium text-slate-500">
          Or call us directly
        </p>

        <div className="grid grid-cols-1 gap-2.5 min-[380px]:grid-cols-3">
          {PHONE_NUMBERS.map((number) => (
            <a
              key={number}
              href={`tel:${number.replace(/[^+\d]/g, "")}`}
              className="group flex min-h-[62px] min-w-0 flex-col items-center justify-center gap-1.5 rounded-xl border border-[#1e40af]/30 bg-[#f4f7ff] px-2 py-2 text-center text-[12px] font-semibold text-slate-800 transition-all duration-200 hover:border-[#1e40af] hover:bg-[#ffbd00] hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e40af]"
            >
              <Phone
                size={16}
                className="shrink-0 text-[#1e40af] transition-colors duration-200 group-hover:text-slate-950"
              />
              <span className="leading-4">{number}</span>
            </a>
          ))}
        </div>
      </section>
    </div>,
    document.body
  );
}






