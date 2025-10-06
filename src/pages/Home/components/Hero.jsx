import React from "react";

const Hero = () => {
  return (
    <section
      className="relative flex flex-col justify-center items-start gap-[10px] flex-shrink-0 self-stretch h-[864px] bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/home/HomeHero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="absolute left-6 md:left-20 top-1/2 -translate-y-1/2 z-10">
        <h1 className="text-white font-[IvyPresto Headline] text-[48px] font-semibold leading-[58px] tracking-[-0.7px]">
          Trusted Garment <br /> Manufacturer For <br />
          <span className="text-[#FFA273]">Global Brands</span>
        </h1>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-0 flex flex-col justify-center items-center gap-[17.59px] w-[62px] h-[202px] bg-white shadow-md rounded-l-md">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-8 h-8 hover:opacity-80 transition"
        >
          <img
            src="/assets/icons/facebook.svg"
            alt="Facebook"
            className="w-9 h-9"
          />
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-8 h-8 hover:opacity-80 transition"
        >
          <img
            src="/assets/icons/instagram.svg"
            alt="Instagram"
            className="w-9 h-9"
          />
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-8 h-8 hover:opacity-80 transition"
        >
          <img
            src="/assets/icons/whatsApp.svg"
            alt="WhatsApp"
            className="w-9 h-9"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
