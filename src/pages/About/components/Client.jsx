import React from "react";
import { clients } from "../../../data/Data";

const Client = () => {
  return (
    <section className="bg-[#F6FAFC] py-24 flex flex-col items-center">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className='text-[48px] font-["Playfair_Display"] font-normal leading-[52px] text-[#2C2C2C]'>
          Our <span className="text-[#FFA273]">Clients</span>
        </h2>
      </div>

      <p className="text-center text-[#4B4B4B] text-[18px] leading-[28px] max-w-[780px] mb-16 px-6">
        Arbella partners with leading fashion brands and retailers across the
        world — delivering quality, compliance, and sustainability at every
        step.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-25 gap-y-16 justify-items-center max-w-[1300px] px-15 md:px-0">
        {clients.map((src, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-[160px] h-[160px]"
          >
            <img
              src={src}
              alt={`Client ${index + 1}`}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Client;
