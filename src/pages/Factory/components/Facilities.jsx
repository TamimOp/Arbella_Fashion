const Facilities = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20 font-[Montserrat]">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16 lg:mb-28 px-4">
        <h2 className="text-4xl md:text-5xl font-[IvyPresto_Headline] mb-4">
          <span style={{ color: "#FFA475" }}>Employee</span>{" "}
          <span className="text-[#000]">Facilities</span>
        </h2>
        <p className="text-base md:text-xl text-[#293037] max-w-2xl mx-auto">
          Arbella goes beyond compliance to create a{" "}
          <br className="hidden md:block" />
          supportive environment for its workforce.
        </p>
      </div>

      {/* Daycare Facility Section */}
      <div className="mb-16 md:mb-20 lg:mb-24">
        <div className="w-full mx-auto px-4 sm:px-0">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
            {/* Left - Text */}
            <div className="w-full lg:w-1/2 md:pl-30">
              <h3 className="text-3xl md:text-4xl font-[IvyPresto_Headline] text-[#000] mb-4 md:mb-6">
                Daycare Facility
              </h3>
              <p className="text-base md:text-xl text-[#707070] leading-relaxed">
                On-site daycare ensures our workers' children are cared for
                while they work.
              </p>
            </div>

            {/* Right - Image */}
            <div className="w-full lg:w-1/2 flex justify-end">
              <div
                className="h-64 sm:h-80 md:h-[599px] lg:h-[599px] w-full lg:w-[739px]"
                style={{
                  backgroundImage:
                    "url('/assets/images/factory/facilities1.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div className="mb-16 md:mb-20 lg:mb-24">
        <div className="w-full mx-auto px-4 sm:px-0">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 xl:gap-16">
            {/* Right - Text */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl md:text-4xl font-[IvyPresto_Headline] text-[#000] mb-4 md:mb-6">
                Security
              </h3>
              <p className="text-base md:text-xl text-[#707070] leading-relaxed">
                24/7 security systems and strict access{" "}
                <br className="hidden md:block" /> control to protect people and
                goods.
              </p>
            </div>

            {/* Left - Image */}
            <div className="w-full lg:w-1/2 flex justify-start">
              <div
                className="h-64 sm:h-80 md:h-[304px] lg:h-[304px] w-full lg:w-[304px]"
                style={{
                  backgroundImage:
                    "url('/assets/images/factory/facilities2.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Canteen Section */}
      <div>
        <div className="w-full mx-auto px-4 sm:px-0">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
            {/* Left - Text */}
            <div className="w-full lg:w-1/2 md:pl-30">
              <h3 className="text-3xl md:text-4xl font-[IvyPresto_Headline] text-[#000] mb-4 md:mb-6">
                Canteen
              </h3>
              <p className="text-base md:text-xl text-[#707070] leading-relaxed">
                Hygienic, subsidized meals provided{" "}
                <br className="hidden md:block" /> daily to support employee
                wellbeing.
              </p>
            </div>

            {/* Right - Image */}
            <div className="w-full lg:w-1/2 flex justify-end">
              <div
                className="h-64 sm:h-80 md:h-[599px] lg:h-[599px] w-full lg:w-[739px]"
                style={{
                  backgroundImage:
                    "url('/assets/images/factory/facilities3.jpg')",
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

export default Facilities;
