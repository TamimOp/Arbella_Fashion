const Newsletter = () => {
  return (
    <section
      className="w-full flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(255, 164, 117, 0.77) 0%, rgba(255, 164, 117, 0.77) 100%), url('/assets/images/common/newsletterBG.jpg')`,
        minHeight: "269px",
        padding: "60px 20px",
        gap: "47px",
      }}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-[IvyPresto_Headline] text-center text-white px-4">
        Join us as a partner.
      </h2>
      <button className="flex justify-center items-center w-[180px] h-[50px] sm:w-[232px] sm:h-[55px] border-2 border-white bg-transparent text-white font-[Montserrat] text-base sm:text-xl font-semibold hover:bg-white hover:text-[#FFA273] transition-all duration-300 cursor-pointer">
        Contact Us
      </button>
    </section>
  );
};

export default Newsletter;
