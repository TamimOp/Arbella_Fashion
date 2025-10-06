import { useState } from "react";

const Factory = () => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <section className="w-full px-4 py-16 md:py-24 bg-[#F7FDFF]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-light mb-6 font-["Playfair_Display"] text-[#293037]'>
            Our <span className="text-[#FFA273]">Factory</span>
          </h2>
          <p className="text-[#293037] text-lg md:text-xl max-w-3xl mx-auto font-[Montserrat]">
            Operating our own state-of-the-art garment factory with
            <br className="hidden md:block" />
            advanced machinery, skilled teams, and strict compliance.
          </p>
        </div>

        {/* Factory Image with Button */}
        <div className="relative w-full rounded-3xl overflow-hidden">
          <img
            src="/assets/images/home/factory.png"
            alt="Our Factory"
            className="w-full h-auto object-cover"
          />

          {/* Button positioned on top right */}
          <button
            onClick={() => setIsPressed(!isPressed)}
            className="absolute top-6 right-6 md:top-1 md:right-2 flex items-center gap-0.5 rounded-[10px] bg-black transition-all duration-200 p-0.5"
          >
            {/* SVG Icon - directly on black background */}
            <div
              className={`flex items-center justify-center w-8 md:w-10 h-8 md:h-10 transition-all duration-200 ${
                isPressed ? "order-2" : "order-1"
              }`}
            >
              <img
                src="/assets/icons/topRightArrow.svg"
                alt="Arrow"
                className="w-4 h-4 md:w-5 md:h-5 brightness-0 invert"
              />
            </div>

            {/* White rounded div with text */}
            <div
              className={`flex items-center justify-center h-10 md:h-[46px] px-2 md:px-3 py-3 md:py-[15px] rounded-lg bg-white transition-all duration-200 ${
                isPressed ? "order-1" : "order-2"
              }`}
            >
              <span className="text-sm md:text-base font-medium text-black whitespace-nowrap">
                Our factory
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Factory;
