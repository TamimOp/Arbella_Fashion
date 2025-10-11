import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { products } from "../../../data/Data";

const OurProducts = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  const tabs = [
    "ALL",
    "OUTERWEAR",
    "CASUAL WEAR",
    "BOTTOMS",
    "UNIFORM",
    "WORKWEAR",
  ];

  // Function to shuffle array
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const getFilteredProducts = () => {
    if (activeTab === "ALL") {
      const allProducts = [
        ...products.outerwear,
        ...products.casualwear,
        ...products.bottoms,
        ...products.uniform,
      ];
      return shuffleArray(allProducts);
    } else if (activeTab === "OUTERWEAR") {
      return products.outerwear;
    } else if (activeTab === "CASUAL WEAR") {
      return products.casualwear;
    } else if (activeTab === "BOTTOMS") {
      return products.bottoms;
    } else if (activeTab === "UNIFORM") {
      return products.uniform;
    } else if (activeTab === "WORKWEAR") {
      return [];
    }
    return [];
  };

  const filteredProducts = getFilteredProducts();

  return (
    <section className="w-full bg-[#F7FDFF] pt-32 md:pt-35 pb-12 md:pb-16 lg:pb-20 font-[Poppins]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-[50px] font-[playfair_display] text-center mb-8 md:mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Our <span style={{ color: "#FFA475" }}>products</span>
        </motion.h2>

        {/* Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          {tabs.map((tab, index) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-base md:text-xl font-medium pb-2 transition-colors cursor-pointer ${
                activeTab === tab
                  ? "border-b-2"
                  : "text-[#868686] hover:text-gray-700"
              }`}
              style={{
                color: activeTab === tab ? "#FFA273" : undefined,
                borderColor: activeTab === tab ? "#FFA273" : "transparent",
              }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.4 + index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: -2,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-6"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="flex flex-col"
              initial={{ y: 30, opacity: 0, scale: 0.95 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: 0.5 + (index % 4) * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              {/* Product Image */}
              <motion.div
                className="w-full mb-4 overflow-hidden"
                style={{
                  height: "378px",
                  backgroundImage: `url('${product.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              />

              {/* Product Info */}
              <motion.div
                className="flex flex-col text-center"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.7 + (index % 4) * 0.1,
                  ease: "easeOut",
                }}
              >
                <motion.h3
                  className="text-lg md:text-[22px] font-semibold text-[#373737] mb-2"
                  whileHover={{
                    color: "#FFA475",
                    transition: { duration: 0.2 },
                  }}
                >
                  {product.name}
                </motion.h3>
                <motion.p
                  className="text-sm md:text-base font-semibold mb-1"
                  style={{ color: "#FFA475" }}
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.8 + (index % 4) * 0.1 }}
                >
                  Product code: {product.productCode}
                </motion.p>
                <motion.p
                  className="text-sm md:text-base font-[Montserrat] text-[#717171] mb-1"
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.9 + (index % 4) * 0.1 }}
                >
                  MOQ: {product.mogCode}
                </motion.p>
                <motion.p
                  className="text-sm md:text-base font-[Montserrat] text-[#717171] mb-3"
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 1.0 + (index % 4) * 0.1 }}
                >
                  FOB: {product.fabCode}
                </motion.p>
                <motion.p
                  className="text-sm text-[#293037] leading-relaxed"
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.1 + (index % 4) * 0.1 }}
                >
                  {product.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurProducts;
