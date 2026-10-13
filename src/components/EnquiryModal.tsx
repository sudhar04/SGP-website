import { useEffect, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import { X, Phone, Send } from "lucide-react";

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


const inputClass =
  "h-[52px] w-full rounded-[12px] border border-[#dfe5ed] bg-[#f7f8fa] px-[13px] text-[14px] text-[#1f2937] outline-none transition-all duration-200 placeholder:text-[#718096] focus:border-[#1677ff] focus:bg-white focus:ring-1 focus:ring-[#1677ff]";

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

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "SGP Promoters - Enquiry",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email || "Not provided"}`,
      `Requirement: ${form.requirement}`,
      `Message: ${form.message || "Not provided"}`,
    ].join("\n");

    window.open(
      `https://wa.me/919787747775?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center overflow-y-auto bg-black/50 px-4 py-4 backdrop-blur-[5px] sm:px-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-modal-title"
        className="relative my-auto w-full max-w-[440px] shrink-0 rounded-[16px] bg-white px-6 py-6 text-gray-900 shadow-2xl max-[400px]:px-4 max-[400px]:py-5"
        onMouseDown={(event) => event.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close enquiry form"
          className="absolute right-3.5 top-3.5 flex h-7 w-7 items-center justify-center rounded-md text-[#718096] transition hover:bg-slate-100 hover:text-slate-900"
        >
          <X size={20} strokeWidth={1.8} />
        </button>

        {/* Heading */}
        <h2
          id="enquiry-modal-title"
          className="pr-7 text-[21px] font-bold leading-[1.35] tracking-[-0.4px]"
        >
          Get a Call Back
        </h2>

        <p className="mt-1 text-[14px] leading-5 text-[#718096]">
          Fill the form and our expert will call you
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <input
            required
            minLength={2}
            autoComplete="name"
            placeholder="Your Name *"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className={inputClass}
          />

          <input
            required
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            pattern="[0-9+() -]{8,20}"
            placeholder="Phone Number *"
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
            className={inputClass}
          />

          <input
            type="email"
            autoComplete="email"
            placeholder="Email (optional)"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className={inputClass}
          />

          
          <div className="relative">
            <select
                required
                value={form.requirement}
                onChange={(e) =>
                setForm({ ...form, requirement: e.target.value })
                }
                className={`h-[52px] w-full appearance-none rounded-[12px] border border-[#dfe5ed] bg-[#f7f8fa] px-[13px] pr-10 text-[14px] outline-none transition focus:border-[#1677ff] focus:bg-white focus:ring-1 focus:ring-[#1677ff] ${
                form.requirement
                    ? "text-[#1f2937]"
                    : "text-[#718096]"
                }`}
            >
                <option value="" disabled>
                Select Requirement *
                </option>

                {requirements.map((requirement) => (
                <option key={requirement} value={requirement}>
                    {requirement}
                </option>
                ))}
            </select>

            <svg
                aria-hidden="true"
                className="pointer-events-none absolute right-[15px] top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="m6 9 6 6 6-6" />
            </svg>
         </div>


          <textarea
            rows={1}
            placeholder="Message (optional)"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="min-h-[46px] w-full resize-y rounded-[11px] border border-[#dfe5ed] bg-[#f7f8fa] px-[13px] py-3 text-[14px] leading-5 outline-none transition placeholder:text-[#718096] focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
          />

          <button
            type="submit"
            className="flex h-[46px] w-full items-center justify-center gap-3 rounded-[11px] bg-[#ffbd00] px-4 text-[14px] font-bold text-gray-950 shadow-sm transition hover:bg-[#f4b500] active:scale-[0.99]"
          >
            <Send size={16} />
            Submit Enquiry
          </button>
        </form>

        {/* Divider */}
        <div className="mb-4 mt-4 border-t border-[#edf0f4]" />

        <p className="mb-2.5 text-center text-[12px] leading-5 text-[#718096]">
          Or call us directly
        </p>

        {/* Phone cards */}
        <div className="grid grid-cols-3 gap-2">
          {PHONE_NUMBERS.map((number) => (
            <a
              key={number}
              href={`tel:${number.replace(/[^+\d]/g, "")}`}
              className="flex min-h-[52px] min-w-0 flex-col items-center justify-center gap-1 rounded-[11px] border border-[#d9e6ff] bg-[#f3f7ff] px-0.5 py-1.5 text-center transition hover:border-blue-300 hover:bg-blue-50"
            >
              <Phone
                size={14}
                className="shrink-0 text-[#1677ff]"
              />

              <span className="whitespace-nowrap text-[10px] font-semibold tracking-[-0.3px] text-[#1f2937] min-[400px]:text-[11px]">
                {number}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
}



