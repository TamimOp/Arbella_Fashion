const FiveReason = () => {
  const reasons = [
    {
      id: "01",
      title: "Skilled",
      subtitle: "Workforce",
      description: "Large pool of experienced garment workers.",
      image: "/assets/images/whyChooseArbella/reason1.jpg",
      size: "large",
      imagePosition: "right",
    },
    {
      id: "02",
      title: "Cost-Effective",
      subtitle: "Labor",
      description: "Competitive pricing without compromising quality.",
      image: "/assets/images/whyChooseArbella/reason2.png",
      size: "small",
      imagePosition: "left",
    },
    {
      id: "03",
      title: "Strong",
      subtitle: "Infrastructure",
      description: "Modern factories and efficient supply chains.",
      image: "/assets/images/whyChooseArbella/reason3.jpg",
      size: "large",
      imagePosition: "right",
    },
    {
      id: "04",
      title: "Diverse",
      subtitle: "Product Range",
      description: "From basic wear to high-fashion apparel.",
      image: "/assets/images/whyChooseArbella/reason4.jpg",
      size: "small",
      imagePosition: "left",
    },
    {
      id: "05",
      title: "Export-Driven",
      subtitle: "Economy",
      description: "Backed by policies aligned with global standards.",
      image: "/assets/images/whyChooseArbella/reason5.jpg",
      size: "large",
      imagePosition: "right",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-12 md:py-16 lg:py-20 font-[Montserrat]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16 lg:mb-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-[IvyPresto_Headline] text-center leading:3 md:leading-20">
          <span style={{ color: "#FFA475" }}>5 Reasons</span> to Choose
          Bangladesh for <br />
          Garment <span style={{ color: "#FFA475" }}>Production</span>
        </h2>
      </div>

      {/* Reasons List */}
      <div className="space-y-16 md:space-y-20 lg:space-y-24">
        {reasons.map((reason) => (
          <div key={reason.id}>
            {reason.imagePosition === "right" ? (
              // Text Left, Image Right
              <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-auto lg:flex-1 px-8 md:px-12 lg:pl-20 xl:pl-32 lg:pr-12 xl:pr-16 mb-8 lg:mb-0">
                  <div
                    className="text-3xl md:text-4xl font-medium mb-4"
                    style={{ color: "#FFA475" }}
                  >
                    {reason.id}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-[IvyPresto_Headline] mb-2">
                    <span style={{ color: "#FFA475" }}>{reason.title}</span>{" "}
                    <span className="text-[#000]">{reason.subtitle}</span>
                  </h3>
                  <p className="text-base md:text-xl text-[#293037] max-w-md">
                    {reason.description}
                  </p>
                </div>
                <div
                  className="w-full lg:w-auto flex-shrink-0"
                  style={{
                    width: reason.size === "large" ? "739px" : "456px",
                    maxWidth: "100%",
                    height: reason.size === "large" ? "599px" : "322px",
                    backgroundImage: `url('${reason.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            ) : (
              // Image Left, Text Right
              <div className="flex flex-col lg:flex-row-reverse items-center lg:justify-end">
                <div className="w-full lg:w-auto lg:flex-1 lg:max-w-7xl px-8 md:px-12 lg:pl-24 xl:pl-110 mb-8 lg:mb-0">
                  <div
                    className="text-3xl md:text-4xl font-medium mb-4"
                    style={{ color: "#FFA475" }}
                  >
                    {reason.id}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-[IvyPresto_Headline] mb-2">
                    <span style={{ color: "#FFA475" }}>{reason.title}</span>{" "}
                    <span className="text-[#000]">{reason.subtitle}</span>
                  </h3>
                  <p className="text-base md:text-xl text-[#293037] max-w-md">
                    {reason.description}
                  </p>
                </div>
                <div
                  className="w-full lg:w-auto flex-shrink-0"
                  style={{
                    width: reason.size === "large" ? "739px" : "456px",
                    maxWidth: "100%",
                    height: reason.size === "large" ? "599px" : "322px",
                    backgroundImage: `url('${reason.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FiveReason;
