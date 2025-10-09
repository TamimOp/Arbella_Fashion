const Hero = () => {
  return (
    <section
      className="relative flex justify-center items-center h-[579px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/images/community/Banner.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="absolute top-1/2 -translate-y-1/2 right-0 flex flex-col justify-center items-center gap-[12px] sm:gap-[15px] lg:gap-[17.59px] w-[48px] sm:w-[55px] lg:w-[62px] h-[150px] sm:h-[175px] lg:h-[202px] bg-white shadow-md rounded-l-md">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 hover:opacity-80 transition"
        >
          <img
            src="/assets/icons/facebook.svg"
            alt="Facebook"
            className="w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9"
          />
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 hover:opacity-80 transition"
        >
          <img
            src="/assets/icons/instagram.svg"
            alt="Instagram"
            className="w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9"
          />
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 hover:opacity-80 transition"
        >
          <img
            src="/assets/icons/whatsApp.svg"
            alt="WhatsApp"
            className="w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
