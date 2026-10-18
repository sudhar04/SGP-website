import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import EnquiryModal from "./EnquiryModal";
import companyLogo from "../assets/SGP logo.png";

const WHATSAPP_NUMBER = "919787747775";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Bank NPA Properties",
  "All Bank Loans",
  "Property Consultancy",
  "Finance & Investment",
  "Debt Recovery Agency (DRA)",
];

export default function Footer() {
  const navigate = useNavigate();
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const openWhatsApp = () => {
    const message =
      "Hello SGP Promoters, I would like to know more about your services.";

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <footer className="relative w-full bg-[#171C25] text-gray-300">
      {/* Footer content — shared horizontal container */}
      <div className="w-full py-10 sm:py-12">
        <div
          className="
            mx-auto w-full max-w-[1360px]
            px-5 sm:px-8 lg:px-[50px]
          "
        >
          {/* Footer columns */}
          <div
            className="
              grid grid-cols-1 gap-y-8
              sm:grid-cols-2 sm:gap-x-10
              lg:grid-cols-[1.15fr_1fr_1.05fr_1fr]
              lg:gap-x-12
            "
          >
            {/* Brand */}
            <div className="min-w-0">
              <a
                 href="/"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
                aria-label="SGP Promoters Home"
                className="inline-flex items-center gap-3"
              >
                {/* Footer logo */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center
                  overflow-hidden rounded-lg border border-[#C7A65A]/40 bg-white p-1">
                  <img
                    src={companyLogo}
                    alt="SGP Promoters Logo"
                    className="h-full w-full object-contain"
                  />
                </div>

                <span className="whitespace-nowrap text-base font-bold tracking-tight text-white">
                  SGP Promoters
                </span>
              </a>

              <p className="mt-4 max-w-[290px] text-[15px] leading-[1.7] text-gray-400">
                Your trusted partner for verified bank properties,
                NPA deals, and comprehensive financial services.
              </p>
            </div>

            {/* Quick Links */}
            <div className="min-w-0">
              <h3 className="mb-4 text-base font-bold text-white">
                Quick Links
              </h3>

              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(link.href);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="text-[15px] leading-6 text-gray-400 transition-colors duration-200 hover:text-[#FFBE00]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="min-w-0">
              <h3 className="mb-4 text-base font-bold text-white">
                Our Services
              </h3>

              <ul className="space-y-2.5">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="/services"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/services");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="text-[15px] leading-6 text-gray-400 transition-colors duration-200 hover:text-[#FFBE00]"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="min-w-0">
              <h3 className="mb-4 text-base font-bold text-white">
                Contact Us
              </h3>

              <div className="space-y-2.5 text-[15px] leading-[1.5] text-gray-400">
                <a
                  onClick={() => navigate("/contact")}
                  href="tel:+919787747775"
                  className="flex items-start gap-3 transition-colors hover:text-white"
                >
                  <Phone size={16} className="mt-0.5 shrink-0" />
                  <span>+91 97877 47775</span>
                </a>

                <a
                  href="tel:+919994065778"
                  className="flex items-start gap-3 transition-colors hover:text-white"
                >
                  <Phone size={16} className="mt-0.5 shrink-0" />
                  <span>+91 99940 65778</span>
                </a>

                <a
                  href="tel:+919994064778"
                  className="flex items-start gap-3 transition-colors hover:text-white"
                >
                  <Phone size={16} className="mt-0.5 shrink-0" />
                  <span>+91 99940 64778</span>
                </a>

                <a
                  href="mailto:info@stargroups.in"
                  className="flex items-start gap-3 break-all transition-colors hover:text-white"
                >
                  <Mail size={16} className="mt-0.5 shrink-0" />
                  <span>stargroups2001@gmail.com</span>
                </a>

                <div className="flex items-start gap-3">
                  <MapPin size={17} className="mt-0.5 shrink-0" />
                  <span>
                    K.G.Complex, Moor Market, Ganapathy, Coimbatore - 641006
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={openWhatsApp}
                className="mt-3 inline-flex items-center gap-2 rounded-xl bg-[#19C768] px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-green-600"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-9 border-t border-white/10 pt-5 sm:mt-12">
            <p className="text-center text-xs leading-6 text-gray-500 sm:text-sm">
              © {new Date().getFullYear()} SGP Promoters Pvt Ltd.
              All rights reserved.
            </p>
          </div>
        </div>
      </div>

            
      
      {/* Floating Enquire Now button */}
      <button
        type="button"
        onClick={() => setIsEnquiryOpen(true)}
        aria-label="Enquire now"
        className="
          fixed bottom-5 right-[76px] z-40
          inline-flex h-12 items-center justify-center
          rounded-full bg-[#FFBE00] px-5
          text-sm font-semibold text-gray-950
          shadow-lg
          transition-all duration-300 ease-in-out
          hover:-translate-y-1 hover:bg-[#F5B400]
          hover:shadow-xl
          focus-visible:outline-none
          focus-visible:ring-2 focus-visible:ring-[#1e40af]
          focus-visible:ring-offset-2
          sm:bottom-7 sm:right-[108px]
          sm:h-[60px] sm:px-7 sm:text-base
        "
      >
        Enquire Now
      </button>


      {/* Floating WhatsApp button */}
      <button
        type="button"
        onClick={openWhatsApp}
        aria-label="Chat with SGP Promoters on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#19C768] text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-green-600 sm:bottom-7 sm:right-8 sm:h-[60px] sm:w-[60px]"
      >
        <MessageCircle size={25} />
      </button>

      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
      
    </footer>
  );
}



