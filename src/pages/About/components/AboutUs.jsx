const AboutUs = () => {
  return (
    <section className="w-full bg-[#F7FDFF] py-12 md:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[IvyPresto_Headline] text-[#000] mb-4">
            About <span style={{ color: "#FFA475" }}>Us</span>
          </h1>
          <p className="text-base md:text-lg text-[#293037] max-w-3xl mx-auto">
            From precision cutting to community care — Arbella combines quality,
            safety, and ethics in every step.
          </p>
        </div>

        {/* Who We Are Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[260px] items-center mb-16 md:mb-20 lg:mb-24">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-[IvyPresto_Headline] text-[#293037] mb-6">
              <span style={{ color: "#FFA475" }}>Who</span> We Are
            </h2>
            <p className="text-base md:text-lg text-[#4B4B4B] leading-relaxed">
              Arbella Fashion Ltd. is a vertically integrated garment
              manufacturer based in Bangladesh, delivering complete sourcing and
              production solutions — from concept to delivery.
            </p>
          </div>

          {/* Right Image */}
          <div
            className="relative w-full rounded-lg overflow-hidden h-64 sm:h-80 lg:h-[433px]"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 44, 66, 0.20) 0%, rgba(0, 44, 66, 0.20) 100%), url('/assets/images/about/WhoWeAre.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        {/* Our Philosophy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[260px] items-center">
          {/* Left Image */}
          <div
            className="relative w-full rounded-lg overflow-hidden order-2 lg:order-1 h-64 sm:h-80 lg:h-[431px]"
            style={{
              width: "100%",
              maxWidth: "599px",
              backgroundImage: `linear-gradient(0deg, rgba(0, 44, 66, 0.20) 0%, rgba(0, 44, 66, 0.20) 100%), url('/assets/images/about/OurPhilosophy.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-[IvyPresto_Headline] text-[#293037] mb-6">
              Our <span style={{ color: "#FFA475" }}>Philosophy</span>
            </h2>
            <p className="text-base md:text-lg text-[#4B4B4B] leading-relaxed">
              We believe high-quality clothing should be within everyone's
              reach. Great garments aren't a privilege — they're a standard
              everyone deserves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
