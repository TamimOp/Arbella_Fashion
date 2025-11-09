import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Excellence = () => {
  const sections = [
    {
      id: 1,
      title: "Store & Kanban",
      description:
        "At Arbella, we follow the Kanban practice to ensure smooth material flow and prevent overproduction.",
      images: [
        "/assets/images/factory/store1.jpg",
        "/assets/images/factory/store2.jpg",
        "/assets/images/factory/store3.jpg",
      ],
      imagePosition: "left",
    },
    {
      id: 2,
      title: "Sample",
      description:
        "Rapid prototyping and design development to bring buyer concepts to life quickly and SMS sample facility.",
      images: [
        "/assets/images/factory/sample1.jpg",
        "/assets/images/factory/sample2.jpg",
        "/assets/images/factory/sample3.jpg",
      ],
      imagePosition: "right",
    },
    {
      id: 3,
      title: "Cutting",
      description:
        "Precision cutting with advanced technology for flawless garment shaping.",
      images: [
        "/assets/images/factory/cutting1.jpg",
        "/assets/images/factory/cutting2.jpg",
        "/assets/images/factory/cutting3.jpg",
      ],
      imagePosition: "left",
    },
    {
      id: 4,
      title: "Production",
      description:
        "A skilled workforce ensuring accuracy, efficiency, and large-scale capacity.",
      images: [
        "/assets/images/factory/production1.jpg",
        "/assets/images/factory/production2.jpg",
        "/assets/images/factory/production3.jpg",
      ],
      imagePosition: "right",
    },
    {
      id: 5,
      title: "Inspection & Finishing",
      description:
        "At Arbella, every garment undergoes strict quality inspection before leaving our factory.",
      images: [
        "/assets/images/factory/finishing1.jpg",
        "/assets/images/factory/finishing2.jpg",
        "/assets/images/factory/finishing3.jpg",
      ],
      imagePosition: "left",
    },
  ];

  const [currentIndexes, setCurrentIndexes] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });

  const handlePrevious = (sectionId, totalImages) => {
    setCurrentIndexes((prev) => ({
      ...prev,
      [sectionId]:
        prev[sectionId] === 0 ? totalImages - 1 : prev[sectionId] - 1,
    }));
  };

  const handleNext = (sectionId, totalImages) => {
    setCurrentIndexes((prev) => ({
      ...prev,
      [sectionId]:
        prev[sectionId] === totalImages - 1 ? 0 : prev[sectionId] + 1,
    }));
  };

  return (
    <section className="w-full bg-white">
      <motion.div
        className="pb-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-4xl md:text-5xl lg:text-[64px] font-[IvyPresto_Headline] text-center text-[#000] mb-4"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          Excellence in{" "}
          <span style={{ color: "#FFA475" }}>
            Production & <br /> Responsibility
          </span>
        </motion.h2>
        <motion.p
          className="text-lg md:text-2xl text-center text-[#293037] max-w-3xl mx-auto font-[Montserrat]"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          From precision cutting to community care — Arbella combines quality,
          safety, and ethics in every step.
        </motion.p>
      </motion.div>

      <div className="max-w-[1400px] mx-auto overflow-hidden">
        {/* Store & Kanban Section */}
        <motion.div
          className="relative w-full py-16 md:py-20 lg:py-24"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Store BG */}
          <motion.div
            className="absolute right-100 top-25 w-[643px] h-[360px] opacity-15 pointer-events-none"
            style={{
              backgroundImage: "url('/assets/images/factory/storeBG.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            initial={{ x: 100, opacity: 0, rotate: 5 }}
            animate={{ x: 0, opacity: 0.15, rotate: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <div className="relative z-10 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-60">
              <motion.div
                className="w-full lg:w-1/2 flex justify-start"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <motion.div
                  className="relative w-[529px] h-[352px]"
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <motion.img
                    src={sections[0].images[currentIndexes[1]]}
                    alt={`Store & Kanban ${currentIndexes[1] + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-xl"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                  />

                  <motion.button
                    onClick={() => handlePrevious(1, sections[0].images.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Previous image"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <img
                      src="/assets/icons/arrowLeft.svg"
                      alt="Previous"
                      className="w-[40px] h-[40px]"
                    />
                  </motion.button>

                  <motion.button
                    onClick={() => handleNext(1, sections[0].images.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Next image"
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <img
                      src="/assets/icons/arrowRight.svg"
                      alt="Next"
                      className="w-[40px] h-[40px]"
                    />
                  </motion.button>
                </motion.div>
              </motion.div>

              <motion.div
                className="w-full lg:w-1/2"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                <motion.h3
                  className="text-3xl md:text-4xl font-['IvyPresto_Headline'] text-[#000] mb-4 md:mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                >
                  Store & Kanban
                </motion.h3>
                <motion.p
                  className="text-lg md:text-2xl text-[#293037] leading-relaxed font-['Montserrat']"
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
                >
                  At Arbella, we follow the Kanban practice to ensure smooth
                  material flow and prevent overproduction.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Sample Section */}
        <motion.div
          className="relative w-full py-16 md:py-20 lg:py-24"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          {/* Sample BG */}
          <div
            className="absolute left-[-300px] top-0 w-[856px] h-[479px] opacity-15 pointer-events-none"
            style={{
              backgroundImage: "url('/assets/images/factory/sampleBG.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          />

          <div className="relative z-10 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 lg:gap-12 xl:gap-60">
              <div className="w-full lg:w-1/2 flex justify-end">
                <div className="relative w-[529px] h-[352px]">
                  <img
                    src={sections[1].images[currentIndexes[2]]}
                    alt={`Sample ${currentIndexes[2] + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-xl"
                  />

                  <button
                    onClick={() => handlePrevious(2, sections[1].images.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Previous image"
                  >
                    <img
                      src="/assets/icons/arrowLeft.svg"
                      alt="Previous"
                      className="w-[40px] h-[40px]"
                    />
                  </button>

                  <button
                    onClick={() => handleNext(2, sections[1].images.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Next image"
                  >
                    <img
                      src="/assets/icons/arrowRight.svg"
                      alt="Next"
                      className="w-[40px] h-[40px]"
                    />
                  </button>
                </div>
              </div>

              <motion.div
                className="w-full lg:w-1/2"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                <motion.h3
                  className="text-3xl md:text-4xl font-['IvyPresto_Headline'] text-[#000] mb-4 md:mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                >
                  Sample
                </motion.h3>
                <motion.p
                  className="text-lg md:text-2xl text-[#293037] leading-relaxed font-['Montserrat']"
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
                >
                  Rapid prototyping and design development to bring buyer
                  concepts to life quickly and SMS sample facility.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Cutting Section */}
        <motion.div
          className="relative w-full py-16 md:py-20 lg:py-24"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Cutting BG */}
          <div
            className="absolute right-56 bottom-0 w-[837px] h-[469px] opacity-15 pointer-events-none"
            style={{
              backgroundImage: "url('/assets/images/factory/cuttingBG.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          />

          <motion.div
            className="relative z-10 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-60">
              <motion.div
                className="w-full lg:w-1/2 flex justify-start"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <div className="relative w-[529px] h-[352px]">
                  <img
                    src={sections[2].images[currentIndexes[3]]}
                    alt={`Cutting ${currentIndexes[3] + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-xl"
                  />

                  <button
                    onClick={() => handlePrevious(3, sections[2].images.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Previous image"
                  >
                    <img
                      src="/assets/icons/arrowLeft.svg"
                      alt="Previous"
                      className="w-[40px] h-[40px]"
                    />
                  </button>

                  <button
                    onClick={() => handleNext(3, sections[2].images.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Next image"
                  >
                    <img
                      src="/assets/icons/arrowRight.svg"
                      alt="Next"
                      className="w-[40px] h-[40px]"
                    />
                  </button>
                </div>
              </motion.div>

              <motion.div
                className="w-full lg:w-1/2"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              >
                <motion.h3
                  className="text-3xl md:text-4xl font-['IvyPresto_Headline'] text-[#000] mb-4 md:mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                >
                  Cutting
                </motion.h3>
                <motion.p
                  className="text-lg md:text-2xl text-[#293037] leading-relaxed font-['Montserrat']"
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
                >
                  Precision cutting with advanced technology for flawless
                  garment shaping.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Production Section */}
        <motion.div
          className="relative w-full py-16 md:py-20 lg:py-24"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          {/* Production BG */}
          <div
            className="absolute left-50 top-10 w-[771px] h-[432px] opacity-15 pointer-events-none"
            style={{
              backgroundImage: "url('/assets/images/factory/productionBG.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          />

          <motion.div
            className="relative z-10 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 lg:gap-12 xl:gap-60">
              <motion.div
                className="w-full lg:w-1/2 flex justify-end"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <div className="relative w-[529px] h-[352px]">
                  <img
                    src={sections[3].images[currentIndexes[4]]}
                    alt={`Production ${currentIndexes[4] + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-xl"
                  />

                  <button
                    onClick={() => handlePrevious(4, sections[3].images.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Previous image"
                  >
                    <img
                      src="/assets/icons/arrowLeft.svg"
                      alt="Previous"
                      className="w-[40px] h-[40px]"
                    />
                  </button>

                  <button
                    onClick={() => handleNext(4, sections[3].images.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Next image"
                  >
                    <img
                      src="/assets/icons/arrowRight.svg"
                      alt="Next"
                      className="w-[40px] h-[40px]"
                    />
                  </button>
                </div>
              </motion.div>

              <motion.div
                className="w-full lg:w-1/2"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              >
                <motion.h3
                  className="text-3xl md:text-4xl font-['IvyPresto_Headline'] text-[#000] mb-4 md:mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                >
                  Production
                </motion.h3>
                <motion.p
                  className="text-lg md:text-2xl text-[#293037] leading-relaxed font-['Montserrat']"
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
                >
                  A skilled workforce ensuring accuracy, efficiency, and
                  large-scale capacity.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Inspection & Finishing Section */}
        <div className="relative w-full py-16 md:py-20 lg:py-24">
          {/* Finishing BG */}
          <div
            className="absolute right-[-335px] top-0 w-[1189px] h-[666px] opacity-15 pointer-events-none"
            style={{
              backgroundImage: "url('/assets/images/factory/finishingBG.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          />

          <div className="relative z-10 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-60">
              <div className="w-full lg:w-1/2 flex justify-start">
                <div className="relative w-[529px] h-[352px]">
                  <img
                    src={sections[4].images[currentIndexes[5]]}
                    alt={`Inspection & Finishing ${currentIndexes[5] + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-xl"
                  />

                  <button
                    onClick={() => handlePrevious(5, sections[4].images.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Previous image"
                  >
                    <img
                      src="/assets/icons/arrowLeft.svg"
                      alt="Previous"
                      className="w-[40px] h-[40px]"
                    />
                  </button>

                  <button
                    onClick={() => handleNext(5, sections[4].images.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Next image"
                  >
                    <img
                      src="/assets/icons/arrowRight.svg"
                      alt="Next"
                      className="w-[40px] h-[40px]"
                    />
                  </button>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl md:text-4xl font-['IvyPresto_Headline'] text-[#000] mb-4 md:mb-6">
                  Inspection & Finishing
                </h3>
                <p className="text-lg md:text-2xl text-[#293037] leading-relaxed font-['Montserrat']">
                  At Arbella, every garment undergoes strict quality inspection
                  before leaving our factory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Excellence;
