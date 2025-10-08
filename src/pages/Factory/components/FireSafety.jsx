const FireSafety = () => {
  return (
    <section
      className="w-full relative pb-16 md:pb-20 lg:pb-24 font-[Montserrat] overflow-hidden"
      style={{ backgroundColor: "#F7F7F7" }}
    >
      {/* Background Image */}
      <div
        className="absolute top-[350px] right-[-130px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "718px",
          height: "997px",
          opacity: 0.16,
          backgroundImage: "url('/assets/images/factory/firesafetyBG.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          maxWidth: "100%",
        }}
      />

      {/* Main Layout - Left Column and Right Column */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Column - Safety2 Image (top) + Text (bottom) - 50% width */}
        <div className="flex flex-col w-full lg:w-1/2 pt-4 sm:pt-8 md:pt-16 lg:pt-24">
          {/* Top - Safety2 Image */}
          <div className="flex justify-center lg:justify-start">
            <div
              className="flex-shrink-0 bg-contain lg:bg-cover bg-center bg-no-repeat"
              style={{
                width: "453px",
                minWidth: "453px",
                height: "579px",
                backgroundImage: "url('/assets/images/factory/safety2.jpg')",
              }}
            />
          </div>

          {/* Bottom - Text Content (left aligned and vertically centered) */}
          <div className="px-2 sm:px-4 lg:px-8 py-4 sm:py-6 flex-1 flex items-center">
            <div className="space-y-4 sm:space-y-6 text-left pl-0 sm:pl-4 md:pl-16 lg:pl-24">
              <p className="text-sm sm:text-base text-[#293037] leading-relaxed">
                At Arbella, the health and safety of our employees is our
                highest priority. We follow international fire safety
                regulations and have invested in advanced detection, prevention,
                and protection systems to ensure a safe workplace.
              </p>

              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-[#000] pl-0 sm:pl-2 md:pl-5 lg:pl-7">
                <li className="flex items-start">
                  <span className="mr-2 sm:mr-3 mt-2.5 w-1 h-1 bg-gray-700 rounded-full flex-shrink-0"></span>
                  <span> Automatic Smoke Detectors & Fire Alarms</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 sm:mr-3 mt-2.5 w-1 h-1 bg-gray-700 rounded-full flex-shrink-0"></span>
                  <span>24/7 Security & Fire Surveillance Room</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 sm:mr-3 mt-2.5 w-1 h-1 bg-gray-700 rounded-full flex-shrink-0"></span>
                  <span>Regular Fire Safety Training</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column - Safety1 Image (top) + Title/Description (middle) + Safety3 Image (bottom) - 50% width */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* Top - Safety1 Image (no top padding) */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="flex-shrink-0"
              style={{
                width: "339px",
                minWidth: "339px",
                height: "288px",
                backgroundImage: "url('/assets/images/factory/safety1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>

          {/* Middle - Title and Description (center on mobile, left aligned on desktop and vertically centered) */}
          <div className="px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-16 lg:pt-[61px] pb-12 sm:pb-20 md:pb-32 lg:pb-[145px] flex-1 flex items-center justify-center lg:justify-start">
            <div className="space-y-3 sm:space-y-4 text-center lg:text-left max-w-full lg:max-w-[413px]">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[IvyPresto_Headline]">
                <span style={{ color: "#FFA475" }}>Fire Safety</span>{" "}
                <span className="text-gray-900">Facilities</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#293037] leading-relaxed">
                Arbella goes beyond compliance to create a supportive
                environment for its workforce.
              </p>
            </div>
          </div>

          {/* Bottom - Safety3 Image */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="flex-shrink-0 bg-contain lg:bg-cover bg-center bg-no-repeat"
              style={{
                width: "432px",
                minWidth: "432px",
                height: "537px",
                backgroundImage: "url('/assets/images/factory/safety3.jpg')",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FireSafety;
