import { useEffect, useRef, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

const revealClass =
  "transition-all duration-700 ease-out";

export default function ContactInformation() {
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

  const whatsappUrl =
    "https://wa.me/919787747775";

  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=Chennai+Park+Railway+Station";

  const details = [
    {
      icon: Phone,
      label: "Phone",
      title: "+91 97877 47775",
      subtitle: "Also: +91 99940 65778, +91 99940 64778",
    },
    {
      icon: Mail,
      label: "Email",
      title: "info@stargroups.in",
      subtitle: "We reply within 2 hours",
    },
    {
      icon: MapPin,
      label: "Office",
      title: "123 Business Park, Main Road",
      subtitle: "City - 600001",
    },
    {
      icon: Clock,
      label: "Hours",
      title: "Mon - Sat: 9AM - 7PM",
      subtitle: "Sunday: By appointment",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className={`${revealClass} ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
    >
      <div className="space-y-6 sm:space-y-7">
        {details.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="group flex items-start gap-4"
            >
              <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] bg-[#E3EDFF] text-[#0866FF] transition-colors duration-300 group-hover:bg-[#0866FF] group-hover:text-white">
                <Icon size={22} strokeWidth={1.9} />
              </div>

              <div className="min-w-0 pt-0.5">
                <p className="text-[13px] leading-5 text-[#687B91]">
                  {item.label}
                </p>

                {item.label === "Phone" ? (
                  <a
                    href="tel:+919787747775"
                    className="break-words text-[16px] font-semibold leading-6 text-[#172333] transition-colors hover:text-[#0866FF]"
                  >
                    {item.title}
                  </a>
                ) : item.label === "Email" ? (
                  <a
                    href="mailto:info@stargroups.in"
                    className="break-words text-[16px] font-semibold leading-6 text-[#172333] transition-colors hover:text-[#0866FF]"
                  >
                    {item.title}
                  </a>
                ) : (
                  <p className="break-words text-[16px] font-semibold leading-6 text-[#172333]">
                    {item.title}
                  </p>
                )}

                <p className="break-words text-[14px] leading-5 text-[#687B91] sm:text-[15px]">
                  {item.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-7 flex min-h-[60px] w-full items-center justify-center gap-3 rounded-xl bg-[#20C765] px-5 py-4 text-center text-[16px] font-semibold text-white transition-all duration-300 hover:bg-[#18B957] hover:shadow-lg active:scale-[0.99]"
      >
        <MessageCircle size={21} />
        Chat on WhatsApp
      </a>

      <div className="group relative mt-7 h-[240px] w-full overflow-hidden rounded-2xl border border-gray-200 bg-white sm:h-[270px]">
        <iframe
          title="SGP Promoters office location"
          src="https://maps.google.com/maps?q=Chennai%20Park%20Railway%20Station&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <a
          href={mapUrl}
          target="_blank"
          rel="noreferrer"
          className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-[#0866FF] shadow-md transition-colors hover:bg-blue-50"
        >
          Open in Maps
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}
