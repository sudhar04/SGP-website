
import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

const WHATSAPP_NUMBER = "919787747775";

export default function EnquiryBanner() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [requirement, setRequirement] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = [
      "Hello SGP Promoters!",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Requirement: ${requirement}`,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="enquiry"
      className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 px-5 py-12 text-white sm:px-8 lg:py-14"
    >
      <div className="mx-auto max-w-[1330px] text-center">
        <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
          Have a Property or Loan Requirement?
        </h2>

        <p className="mt-3 text-sm text-blue-100 sm:text-base">
          Our team will get back to you within 30 minutes
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-7 grid max-w-[833px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_167px]"
        >
          <input
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your Name"
            aria-label="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="h-[50px] min-w-0 rounded-xl border border-white/20 bg-white/[0.08] px-4 text-sm text-white outline-none transition placeholder:text-blue-100 focus:border-[#FFBE00] focus:ring-1 focus:ring-[#FFBE00]"
          />

          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Phone Number"
            aria-label="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            pattern="[0-9+\s()-]{7,20}"
            required
            className="h-[50px] min-w-0 rounded-xl border border-white/20 bg-white/[0.08] px-4 text-sm text-white outline-none transition placeholder:text-blue-100 focus:border-[#FFBE00] focus:ring-1 focus:ring-[#FFBE00]"
          />

          <select
            name="requirement"
            aria-label="Select Requirement"
            value={requirement}
            onChange={(e) => setRequirement(e.target.value)}
            required
            className="h-[50px] min-w-0 rounded-xl border border-white/20 bg-blue-700 px-4 text-sm text-white outline-none focus:border-[#FFBE00]"
          >
            <option value="" disabled>
              Select Requirement
            </option>
            <option value="Bank NPA Properties">
              Bank NPA Properties
            </option>
            <option value="Bank Loans">Bank Loans</option>
            <option value="Property Consultancy">
              Property Consultancy
            </option>
            <option value="Finance & Investment">
              Finance & Investment
            </option>
            <option value="DRA Services">DRA Services</option>
          </select>

          <button
            type="submit"
            className="inline-flex h-[50px] items-center justify-center gap-2 rounded-xl bg-[#FFBE00] px-5 text-sm font-semibold text-gray-950 transition-colors duration-200 hover:bg-yellow-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Send size={17} />
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
