import React from "react";
import { productVarient } from "../../../data/productsData";

const ProductVariety = () => {
  return (
    <section className="bg-[#F7FDFF] py-20 flex flex-col items-center justify-center">
      {/* heading */}
      <div className="text-center mb-25">
        <h2 className='font-["Playfair_Display"] text-[48px] font-normal leading-[60px] tracking-[-0.7px] text-[#2C2C2C]'>
          Offering A <span className="text-[#FFA273]">Wide Variety</span> <br />
          of <span className="text-[#FFA273]">Product</span> Range
        </h2>
      </div>

      {/* product images */}
      <div className="flex gap-[24px] justify-center items-end">
        {productVarient.map((item, index) => (
          <div
            key={index}
            className={`relative w-[228.17px] h-[607.743px] flex-shrink-0 bg-cover bg-center rounded-sm overflow-hidden group cursor-pointer ${
              index % 2 === 1 ? "translate-y-[60px]" : "-translate-y-[0px]"
            }`}
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(37,37,37,0.38) 5.3%, rgba(6,5,5,0.18) 89.98%), url(${item.img})`,
            }}
          >
            {/* Hover effect */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.63)_5.3%,rgba(0,0,0,0.67)_56.29%,rgba(0,0,0,0.65)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Arrow icon */}
            <img
              src="/assets/icons/Arrow.svg"
              alt="Arrow"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />

            {/* vertical title */}
            <div className="absolute left-[80px] bottom-[10%] -translate-y-1/2 rotate-[-90deg] flex justify-center items-center w-[231.619px] h-[69.664px]">
              <p className='text-white font-["Playfair_Display"] text-[30.141px] font-normal tracking-[3.014px] uppercase whitespace-nowrap'>
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductVariety;
