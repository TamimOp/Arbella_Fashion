// src/pages/Community/components/Gallery.jsx
import React from "react";

const Gallery = () => {
  return (
    <section className="w-full bg-white py-[80px] flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-center font-[IvyPresto_Headline] text-[32px] md:text-[48px] font-normal leading-[40px] md:leading-[60px] tracking-[-0.5px] text-[#2C2C2C] mb-[40px] md:mb-[60px]">
        Our <span className="text-[#FFA273]">Gallery</span>
      </h2>

      {/* Gallery container */}
      <div className="w-full max-w-[1400px] flex flex-col gap-[20px] md:gap-[34px] px-4">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-[16px] md:gap-[23px]">
          <img
            src="/assets/images/community/gallery1.jpg"
            alt="Gallery 1"
            className="object-cover w-full md:w-[646px] h-[200px] md:h-[367px]"
          />
          <img
            src="/assets/images/community/gallery2.jpg"
            alt="Gallery 2"
            className="object-cover w-full md:w-[467.791px] h-[200px] md:h-[367px]"
          />
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-[16px] md:gap-[36px]">
          <img
            src="/assets/images/community/gallery3.jpg"
            alt="Gallery 3"
            className="object-cover w-full md:w-[467.79px] h-[200px] md:h-[367px]"
          />
          <img
            src="/assets/images/community/gallery4.jpg"
            alt="Gallery 4"
            className="object-cover w-full md:w-[646px] h-[250px] md:h-[430px]"
          />
        </div>

        {/* Row 3 */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-[16px] md:gap-[36px]">
          <img
            src="/assets/images/community/gallery5.jpg"
            alt="Gallery 5"
            className="object-cover w-full md:w-[646px] h-[250px] md:h-[430px]"
          />
          <img
            src="/assets/images/community/gallery6.jpg"
            alt="Gallery 6"
            className="object-cover w-full md:w-[467.79px] h-[200px] md:h-[367px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
