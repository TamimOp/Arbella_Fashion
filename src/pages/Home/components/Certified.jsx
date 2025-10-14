// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

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
    { id: 7, src: "/assets/images/home/logo7.png", alt: "Global-Recycled" },
    { id: 8, src: "/assets/images/home/logo8.png", alt: "Higg-Index" },
    { id: 9, src: "/assets/images/home/logo9.png", alt: "RSC" },
    { id: 10, src: "/assets/images/home/logo10.png", alt: "SEDEX" },
    { id: 11, src: "/assets/images/home/logo11.png", alt: "SODEXO" },
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
          className="py-3 md:py-4 lg:py-5 overflow-hidden"
          style={{
            borderTop: "5px solid rgba(202, 202, 202, 0.37)",
            borderBottom: "5px solid rgba(202, 202, 202, 0.37)",
          }}
        >
          <div className="relative">
            <motion.div
              className="flex items-center gap-12 md:gap-16 lg:gap-20 whitespace-nowrap"
              animate={{
                x: ["-100%", "0%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
              style={{
                display: "flex",
                minWidth: "200%",
              }}
            >
              {/* Multiple sets of logos for truly seamless scrolling */}
              {[...Array(4)].map((_, setIndex) => (
                <div
                  key={setIndex}
                  className="flex items-center gap-12 md:gap-16 lg:gap-20 flex-shrink-0"
                >
                  {logos.map((logo) => (
                    <div
                      key={`${setIndex}-${logo.id}`}
                      className="flex items-center justify-center flex-shrink-0 w-24 md:w-28 lg:w-32 h-12 md:h-16 lg:h-20"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certified;
