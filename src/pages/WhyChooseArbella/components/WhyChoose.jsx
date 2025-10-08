import React from "react";

const WhyChoose = () => {
  return (
    <section className="relative bg-[#F6FAFC] py-24 overflow-hidden font-[montserrat]">
      {/* Top Left Background Image */}
      <div
        className="absolute top-0 -left-20 w-[410px] h-[382px] opacity-30"
        style={{
          background:
            "url('/assets/images/whyChooseArbella/sewingmachine.png') center/cover no-repeat",
        }}
      ></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className='font-["IvyPresto_Headline"] text-[48px] md:text-[64px] font-normal leading-[60px] tracking-[-0.7px] text-[#2C2C2C] mb-5'>
            Why Choose <span className="text-[#FFA273]">Arbella?</span>
          </h2>
          <p className="mt-2 text-[#4B4B4B] text-[18px] md:text-[20px] leading-[28px] max-w-[760px] mx-auto">
            From precision cutting to community care — Arbella combines quality,
            safety, and ethics in every step.
          </p>
        </div>

        {/* Subheading Row */}
        <div className="flex justify-between items-end mb-16">
          <div>
            <h3 className='font-["IvyPresto_Headline"] text-[36px] md:text-[48px] font-normal leading-[46px] text-[#2C2C2C]'>
              Maximum Value, <br />
              <span className="text-[#FFA273]">Minimum Cost</span>
            </h3>
          </div>
          <p className="text-[#4B4B4B] text-[16px] leading-[26px] max-w-[380px]">
            Work factory-direct and save more on every order — without
            compromising quality.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-40">
          {/* Left Image */}
          <div className="w-full lg:w-[610px] h-[300px] lg:h-[553.34px] flex-shrink-0">
            <img
              src="/assets/images/whyChooseArbella/whyArbella.jpg"
              alt="Why Arbella"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Right Text */}
          <div className="flex flex-col justify-center gap-10 lg:gap-20 mt-6">
            {/* Item 1 */}
            <div className="flex items-start lg:items-center gap-4 lg:gap-6">
              <span className="text-[#FFA273] text-[30px] lg:text-[50px] font-bold leading-[30px] lg:leading-[46px] font-sans flex items-center">
                01
              </span>
              <div>
                <h4 className="text-[#2C2C2C] text-[16px] lg:text-[20px] font-semibold leading-[24px] lg:leading-[28px]">
                  Direct Manufacturer
                </h4>
                <p className="text-[#4B4B4B] text-[14px] lg:text-[16px] leading-[22px] lg:leading-[26px] max-w-[400px]">
                  No buying agent commission — you deal directly with us.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start lg:items-center gap-4 lg:gap-6">
              <span className="text-[#FFA273] text-[30px] lg:text-[50px] font-bold leading-[30px] lg:leading-[46px] font-sans flex items-center">
                02
              </span>
              <div>
                <h4 className="text-[#2C2C2C] text-[16px] lg:text-[20px] font-semibold leading-[24px] lg:leading-[28px]">
                  No Importer Markups
                </h4>
                <p className="text-[#4B4B4B] text-[14px] lg:text-[16px] leading-[22px] lg:leading-[26px] max-w-[400px]">
                  We handle the importing process ourselves.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start lg:items-center gap-4 lg:gap-6">
              <span className="text-[#FFA273] text-[30px] lg:text-[50px] font-bold leading-[30px] lg:leading-[46px] font-sans flex items-center">
                03
              </span>
              <div>
                <h4 className="text-[#2C2C2C] text-[16px] lg:text-[20px] font-semibold leading-[24px] lg:leading-[28px]">
                  Lower Labor Costs
                </h4>
                <p className="text-[#4B4B4B] text-[14px] lg:text-[16px] leading-[22px] lg:leading-[26px] max-w-[400px]">
                  Compared to China, Vietnam, and India — allowing you to get
                  better margins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
