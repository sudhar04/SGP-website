
export default function PropertiesPageHeader() {
  return (
    <section className="w-full bg-[#1463F3] pt-[94px] sm:pt-[96px]">
      <div
        className="
          mx-auto flex w-full max-w-[1360px]
          min-h-[215px] flex-col justify-center
          px-5 py-10
          sm:px-8 sm:py-12
          lg:px-[50px]
        "
      >
        <h1
          className="
            text-3xl font-bold leading-tight tracking-tight
            text-white
            sm:text-4xl
          "
        >
          Properties
        </h1>

        <p
          className="
            mt-2 max-w-full
            text-base leading-relaxed text-blue-100
            sm:text-lg
          "
        >
          Browse verified bank properties, NPA deals, and premium listings
        </p>
      </div>
    </section>
  );
}

