import React from "react";

const CommunityForEmployee = () => {
  return (
    <section className="w-full bg-[#EBEBEB] font-[Manrope] pb-10 md:pb-0">
      {/* ---------- Heading Section ---------- */}
      <div className="w-full flex justify-center pt-[80px] px-4 md:px-8">
        <h2 className='text-center font-["Playfair_Display"] text-[32px] md:text-[48px] lg:text-[64px] font-normal leading-[38px] md:leading-[54px] lg:leading-[68px] tracking-[-0.8px] text-[#2C2C2C]'>
          Our <span className="text-[#FFA273]">Community Center</span>
          <br />
          for Factory <span className="text-[#FFA273]">Employees</span>
        </h2>
      </div>

      {/* ---------- Main Content Section ---------- */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-stretch mt-[50px] px-4 md:px-8">
        {/* Left Cards */}
        <div className="max-w-[740px] w-full lg:pl-[120px] py-[40px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[28px] max-w-[640px]">
            {/* Card 1 */}
            <div className="rounded-[30px] bg-[#FFA2731C] px-[20px] md:px-[28px] py-[24px] md:py-[32px] flex flex-col gap-3">
              <img
                src="/assets/images/community/Book.svg"
                alt="Learning Hub"
                className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
              />
              <h3 className="text-[14px] md:text-[15px] font-semibold text-[#1E1E1E]">
                Learning Hub
              </h3>
              <p className="text-[12px] text-[#000] leading-[22px] md:leading-[26px]">
                Literacy programs, language courses, and skill-building
                workshops.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-[30px] bg-[#29303714] px-[20px] md:px-[28px] py-[24px] md:py-[32px] flex flex-col gap-3">
              <img
                src="/assets/images/community/Health.svg"
                alt="Health & Wellness"
                className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
              />
              <h3 className="text-[14px] md:text-[15px] font-semibold text-[#1E1E1E]">
                Health & Wellness
              </h3>
              <p className="text-[12px] text-[#000] leading-[22px] md:leading-[26px]">
                Regular health check-ups, awareness sessions, and counseling
                support.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-[30px] bg-[#29303714] px-[20px] md:px-[28px] py-[24px] md:py-[32px] flex flex-col gap-3">
              <img
                src="/assets/images/community/Support.svg"
                alt="Social Support"
                className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
              />
              <h3 className="text-[14px] md:text-[15px] font-semibold text-[#1E1E1E]">
                Social Support
              </h3>
              <p className="text-[12px] text-[#000] leading-[22px] md:leading-[26px]">
                Community events, peer groups, and family engagement programs.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-[30px] bg-[#FFA2731C] px-[20px] md:px-[28px] py-[24px] md:py-[32px] flex flex-col gap-3">
              <img
                src="/assets/images/community/Leadership.svg"
                alt="Recreation"
                className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
              />
              <h3 className="text-[14px] md:text-[15px] font-semibold text-[#1E1E1E]">
                Recreation
              </h3>
              <p className="text-[12px] text-[#000] leading-[22px] md:leading-[26px]">
                Spaces for relaxation, cultural activities, and team-building
                events.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="w-full lg:w-[582px] min-h-[300px] md:min-h-[400px] lg:min-h-[468px] flex-shrink-0 bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage:
              "linear-gradient(179deg, rgba(14, 13, 13, 0.49) 0.49%, rgba(0, 0, 0, 0.00) 49.49%, rgba(0, 0, 0, 0.49) 97.55%), url('/assets/images/community/OurCommunity.png')",
          }}
        />
      </div>
    </section>
  );
};

export default CommunityForEmployee;
