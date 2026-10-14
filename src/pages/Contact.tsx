import ContactHeader from "../components/ContactHeader";
import ContactInformation from "../components/ContactInformation";
import ContactMessageForm from "../components/ContactMessageForm";

export default function Contact() {
  return (
    <>
      <ContactHeader />

      <main className="w-full bg-[#F8F9FB] py-10 sm:py-12 lg:py-14">
        <div
          className="
            mx-auto grid w-full max-w-[1360px]
            grid-cols-1 items-start gap-8
            px-5 sm:px-8
            lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.25fr)]
            lg:gap-[52px]
            lg:px-[50px]
          "
        >
          <ContactInformation />
          <ContactMessageForm />
        </div>
      </main>
    </>
  );
}
