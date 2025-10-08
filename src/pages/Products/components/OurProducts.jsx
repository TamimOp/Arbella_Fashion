import { useState } from "react";
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

  const getFilteredProducts = () => {
    if (activeTab === "ALL") {
      return [
        ...products.outerwear,
        ...products.casualwear,
        ...products.bottoms,
        ...products.uniform,
      ];
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
        <h2 className="text-4xl md:text-[50px] font-[playfair_display] text-center mb-8 md:mb-12">
          Our <span style={{ color: "#FFA475" }}>products</span>
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16">
          {tabs.map((tab) => (
            <button
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
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="flex flex-col">
              {/* Product Image */}
              <div
                className="w-full mb-4"
                style={{
                  height: "378px",
                  backgroundImage: `url('${product.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />

              {/* Product Info */}
              <div className="flex flex-col text-center">
                <h3 className="text-lg md:text-[22px] font-semibold text-[#373737] mb-2">
                  {product.name}
                </h3>
                <p
                  className="text-sm md:text-base font-semibold mb-1"
                  style={{ color: "#FFA475" }}
                >
                  Product code: {product.productCode}
                </p>
                <p className="text-sm md:text-base font-[Montserrat] text-[#717171] mb-1">
                  Moq-code#{product.mogCode}
                </p>
                <p className="text-sm md:text-base font-[Montserrat] text-[#717171] mb-3">
                  Fab-code#{product.fabCode}
                </p>
                <p className="text-sm text-[#293037] leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
