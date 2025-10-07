import React from "react";

const SupplyChain = () => {
  return (
    <section className="bg-[#F7F7F7] py-24">
      <div className="max-w-[1400px] mx-auto px-10 flex flex-col items-center text-center">
        {/* ---- Top Heading ---- */}
        <div className="mb-12">
          <h2 className='font-["IvyPresto_Headline"] text-[30px] md:text-[48px] font-normal leading-[60px] tracking-[-0.7px] text-[#2C2C2C]'>
            <span className="text-[#FFA273]">Supply</span> Chain
          </h2>
          <p className="text-[#293037] font-[Montserrat] text-[16px] md:text-[20px] leading-[28px] mt-2">
            A simple step-by-step process — from design to
            <span className="hidden md:inline">
              {" "}
              <br />
            </span>{" "}
            delivery.
          </p>
        </div>

        {/* ---- Bottom Full Image ---- */}
        <div className="w-full flex justify-center">
          <img
            src="/assets/images/whyChooseArbella/supplychain.png"
            alt="Supply Chain Process"
            className="w-full max-w-[1400px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default SupplyChain;
