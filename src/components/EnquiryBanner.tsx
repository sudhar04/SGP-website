import { useState, type FormEvent } from "react";
import { Send, ChevronDown } from "lucide-react";

const WHATSAPP_NUMBER = "919787747775";

const requirements = [
  "NPA Properties",
  "Home Loan",
  "Business Loan",
  "Consultancy",
  "DRA Services",
  "Other",
];

export default function EnquiryBanner() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [requirement, setRequirement] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!requirement) {
      setIsDropdownOpen(true);
      return;
    }

    const message = [
      "Hello SGP Promoters!",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Requirement: ${requirement}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "h-[50px] w-full min-w-0 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-[#172333] outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-[#FFBE00] focus:border-[#FFBE00] focus:ring-2 focus:ring-[#FFBE00]/25";

  return (
    <section
      id="enquiry"
      className="relative w-full overflow-x-clip bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 px-4 py-12 text-white sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto w-full max-w-[1330px] text-center">
        <h2 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-[36px]">
          Have a Property or Loan Requirement?
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">
          Our team will get back to you within 30 minutes
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-7 grid w-full max-w-[900px] grid-cols-1 items-start gap-3 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_150px]"
        >
          {/* Name */}
          <input
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your Name *"
            aria-label="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={inputClass}
          />

          {/* Phone */}
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Phone Number *"
            aria-label="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            pattern="[0-9+\s()-]{7,20}"
            title="Enter a valid phone number"
            required
            className={inputClass}
          />

          {/* Custom Requirement Dropdown */}
          <div className="relative z-20 min-w-0">
            <button
              type="button"
              aria-label="Select Requirement"
              aria-haspopup="listbox"
              aria-expanded={isDropdownOpen}
              onClick={() => setIsDropdownOpen((open) => !open)}
              className={`${inputClass} flex cursor-pointer items-center justify-between gap-2 text-left ${
                isDropdownOpen
                  ? "border-[#FFBE00] ring-2 ring-[#FFBE00]/25"
                  : ""
              }`}
            >
              <span
                className={`truncate ${
                  requirement ? "text-[#172333]" : "text-slate-400"
                }`}
              >
                {requirement || "Select Requirement *"}
              </span>

              <ChevronDown
                size={18}
                className={`shrink-0 text-slate-500 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <>
                {/* Close dropdown when clicking outside */}
                <button
                  type="button"
                  aria-label="Close requirement dropdown"
                  className="fixed inset-0 z-30 cursor-default"
                  onClick={() => setIsDropdownOpen(false)}
                />

                {/* Dropdown options */}
                <div
                  role="listbox"
                  aria-label="Requirements"
                  className="absolute left-0 right-0 top-full z-40 mt-2 rounded-xl border border-slate-200 bg-white p-1.5 text-left shadow-xl shadow-slate-950/20"
                >
                  {requirements.map((item) => (
                    <button
                      key={item}
                      type="button"
                      role="option"
                      aria-selected={requirement === item}
                      onClick={() => {
                        setRequirement(item);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full rounded-lg px-3 py-3 text-left text-sm transition-colors duration-150 ${
                        requirement === item
                          ? "bg-[#FFBE00] font-semibold text-[#172333]"
                          : "bg-white text-[#172333] hover:bg-[#FFBE00] hover:text-[#172333]"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </>
            )}

            <input
              type="hidden"
              name="requirement"
              value={requirement}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="inline-flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-[#FFBE00] px-5 text-sm font-bold text-gray-950 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FFD044] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white active:translate-y-0"
          >
            <Send size={17} />
            Submit
          </button>
        </form>

        <p className="mx-auto mt-4 max-w-xl text-xs leading-5 text-blue-100 sm:text-sm">
          Your details are used only to respond to your enquiry.
        </p>
      </div>
    </section>
  );
}
