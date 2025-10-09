const Approach = () => {
  return (
    <section
      className="w-full py-12 md:py-16 lg:py-20 font-[Montserrat]"
      style={{ backgroundColor: "#F7FDFF" }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-[IvyPresto_Headline] mb-4">
            Sustainability at <span style={{ color: "#FFA475" }}>Arbella</span>
          </h2>
          <p className="text-base md:text-xl text-[#293037] max-w-xl mx-auto">
            Building a responsible future through eco-friendly materials,
            ethical production, and environmental care.
          </p>
        </div>

        {/* Materials Section */}
        <div
          className="mb-16 md:mb-20 lg:mb-24"
          style={{ borderTop: "1px solid #000" }}
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left - Text */}
            <div className="w-full lg:w-1/2 mt-1.5">
              <h3 className="text-3xl md:text-[32px] font-[IvyPresto_Headline] text-[#000] mb-6">
                Materials
              </h3>
              <p className="text-base md:text-xl text-[#293037] leading-[44px] mb-8">
                "We work closely with Oeko-Tex® certified suppliers, carefully
                sourcing organic and sustainable materials to offer our buyers a
                wide range of eco-friendly fabric options. Every fabric is
                chosen with responsibility, reducing harm to people and the
                environment."
              </p>

              {/* Certification Logos */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6">
                <img
                  src="/assets/images/sustainability/materialsLogo1.png"
                  alt="Certification 1"
                  className="h-16 md:h-24"
                />
                <img
                  src="/assets/images/sustainability/materialsLogo2.png"
                  alt="Certification 2"
                  className="h-16 md:h-20"
                />
                <img
                  src="/assets/images/sustainability/materialsLogo3.png"
                  alt="Certification 3"
                  className="h-16 md:h-20"
                />
                <img
                  src="/assets/images/sustainability/materialsLogo4.png"
                  alt="Certification 4"
                  className="h-16 md:h-20"
                />
              </div>
            </div>

            {/* Right - Image */}
            <div className="w-full lg:w-1/2 flex justify-end">
              <div
                style={{
                  width: "585px",
                  maxWidth: "100%",
                  height: "473px",
                  backgroundImage:
                    "url('/assets/images/sustainability/materials.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
          </div>
        </div>

        {/* Planting Tree's Section */}
        <div
          className="mb-16 md:mb-20 lg:mb-24"
          style={{ borderTop: "1px solid #000" }}
        >
          <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12">
            {/* Left - Image */}
            <div className="w-full lg:w-1/2 flex justify-start">
              <div
                style={{
                  width: "585px",
                  maxWidth: "100%",
                  height: "473px",
                  backgroundImage:
                    "url('/assets/images/sustainability/plant.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>

            {/* Right - Text */}
            <div className="w-full lg:w-1/2 mt-1.5 lg:pl-14">
              <h3 className="text-3xl md:text-[32px] font-[IvyPresto_Headline] text-[#000] mb-6">
                Planting Tree's
              </h3>
              <p className="text-base md:text-xl text-[#293037] leading-[44px] mb-8">
                As part of our sustainability practices, our factories reuse
                fabric waste, operate energy-saving machinery to reduce overall
                consumption, and ensure garments are produced with minimal
                waste. Beyond production, we actively encourage our stakeholders
                to plant trees—contributing to a healthier environment for
                future generations.
              </p>

              {/* Logo */}
              <div>
                <img
                  src="/assets/images/sustainability/plantingLogo1.png"
                  alt="Global Recycled Standard"
                  className="h-16 md:h-20"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Manufacturing Section */}
        <div style={{ borderTop: "1px solid #000" }}>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left - Text */}
            <div className="w-full lg:w-1/2 mt-1.5">
              <h3 className="text-3xl md:text-[32px] font-[IvyPresto_Headline] text-[#000] mb-6">
                Manufacturing
              </h3>
              <p className="text-base md:text-xl text-[#293037] leading-[44px] mb-8">
                We partner with factories committed to responsible
                manufacturing—ensuring fair wages, safe working conditions, and
                actively reducing environmental impact throughout the production
                process. Every garment we produce reflects our values of
                quality, responsibility, and care.
              </p>

              {/* Logos */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6">
                <img
                  src="/assets/images/sustainability/materialsLogo4.png"
                  alt="WRAP"
                  className="h-16 md:h-20"
                />
                <img
                  src="/assets/images/sustainability/manufactureLogo.png"
                  alt="RSC"
                  className="h-16 md:h-20"
                />
              </div>
            </div>

            {/* Right - Image */}
            <div className="w-full lg:w-1/2 flex justify-end">
              <div
                style={{
                  width: "585px",
                  maxWidth: "100%",
                  height: "473px",
                  backgroundImage:
                    "url('/assets/images/sustainability/manufacture.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
