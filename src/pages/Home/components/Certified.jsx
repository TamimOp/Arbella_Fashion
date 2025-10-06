const Certified = () => {
  const logos = [
    { id: 1, src: "/assets/images/home/logo1.png", alt: "Amfori" },
    { id: 2, src: "/assets/images/home/logo2.png", alt: "WRAP" },
    { id: 3, src: "/assets/images/home/logo3.png", alt: "C-TPAT" },
    {
      id: 4,
      src: "/assets/images/home/logo4.png",
      alt: "Organic Certification",
    },
    { id: 5, src: "/assets/images/home/logo5.png", alt: "GOTS" },
    { id: 6, src: "/assets/images/home/logo6.png", alt: "OEKO-TEX" },
  ];

  return (
    <section className="w-full bg-gray-50 py-12 md:py-16 lg:py-20">
      <div className="w-full">
        {/* Title */}
        <h2 className="text-[28px] md:text-[32px] font-[Montserrat] font-medium text-center text-[#000] mb-10 md:mb-14 lg:mb-16">
          Certified for Quality & Compliance
        </h2>

        {/* Logos Container */}
        <div
          className="py-3 md:py-4 lg:py-5"
          style={{
            borderTop: "5px solid rgba(202, 202, 202, 0.37)",
            borderBottom: "5px solid rgba(202, 202, 202, 0.37)",
          }}
        >
          <div className="grid grid-cols-3 gap-6 sm:grid-cols-3 sm:gap-8 lg:grid-cols-6 lg:gap-[113px] items-center justify-items-center px-4 sm:px-6 lg:px-8">
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="flex items-center justify-center w-full h-12 md:h-16 lg:h-20"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certified;
