import React from "react";

const ContactForm = () => {
  return (
    <section className="w-full bg-[#F7FDFF] py-[60px] md:py-[120px] flex justify-center px-4">
      <div className="relative max-w-[1400px] w-full flex flex-col lg:flex-row">
        {/* Left Form Section */}
        <div
          className="flex flex-col justify-between bg-[#002C42] text-white px-[40px] md:px-[80px] py-[40px] md:py-[70px] relative z-10 w-full lg:w-[70%] min-h-[600px] lg:h-[832.359px]"
          style={{
            boxShadow:
              "0px 134.745px 191.127px -76.451px rgba(25, 58, 75, 0.30)",
          }}
        >
          {/* Heading + Description + Form */}
          <div>
            <h2 className="font-[Playfair_Display] text-[32px] md:text-[48px] lg:text-[64px] leading-[40px] md:leading-[60px] lg:leading-[80px] font-normal mb-[15px] md:mb-[20px]">
              Get in <span className="text-[#FFA273]">Touch</span>
            </h2>
            <p className="text-[14px] md:text-[16px] leading-[24px] md:leading-[28px] text-[#FFF] max-w-[540px] mb-[30px] md:mb-[50px]">
              We're ready to bring your designs to life. Whether you have
              questions, need a quote, or want to schedule a factory visit — our
              team is here to help.
            </p>

            {/* Form */}
            <form className="flex flex-col gap-[20px] md:gap-[25px] max-w-[480px]">
              <input
                type="text"
                placeholder="Name *"
                className="w-full border border-[#DDE6EB] bg-transparent text-white placeholder-[#DDE6EB] px-4 md:px-5 py-3 md:py-4 text-[14px] md:text-[16px] focus:outline-none focus:border-[#FFA273]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-[#DDE6EB] bg-transparent text-white placeholder-[#DDE6EB] px-4 md:px-5 py-3 md:py-4 text-[14px] md:text-[16px] focus:outline-none focus:border-[#FFA273]"
              />
              <input
                type="text"
                placeholder="Phone number *"
                className="w-full border border-[#DDE6EB] bg-transparent text-white placeholder-[#DDE6EB] px-4 md:px-5 py-3 md:py-4 text-[14px] md:text-[16px] focus:outline-none focus:border-[#FFA273]"
              />
              <button
                type="submit"
                className="bg-[#FFA273] text-[#FFF] font-[Montserrat] font-semibold py-3 md:py-4 mt-[8px] md:mt-[10px] text-[14px] md:text-[16px] tracking-wide hover:bg-[#FF9461] transition-colors"
              >
                SEND
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-[20px] sm:gap-[30px] mt-[40px] md:mt-[80px]">
            <div className="flex items-center gap-3">
              <img
                src="/assets/icons/contactPhone.svg"
                alt="Phone"
                className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
              />
              <div className="flex flex-col">
                <p className="text-[#FFF] text-[11px] md:text-[13px] font-light">
                  PHONE
                </p>
                <span className="text-[#FFA273] text-[11px] md:text-[13px]">
                  +000000000000
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img
                src="/assets/icons/contactTelephone.svg"
                alt="Telephone"
                className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
              />
              <div className="flex flex-col">
                <p className="text-[#FFF] text-[11px] md:text-[13px] font-light">
                  TELEPHONE
                </p>
                <span className="text-[#FFA273] text-[11px] md:text-[13px]">
                  +000000000
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img
                src="/assets/icons/contactEmail.svg"
                alt="Email"
                className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
              />
              <div className="flex flex-col">
                <p className="text-[#FFF] text-[11px] md:text-[13px] font-light">
                  EMAIL
                </p>
                <span className="text-[#FFA273] text-[11px] md:text-[13px]">
                  info@hello123
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Orange Section */}
        <div className="relative bg-[#FFA273] w-full lg:w-[30%] min-h-[300px] lg:h-[832.359px] flex lg:block items-center justify-center py-8 lg:py-0">
          {/* Mobile Map - Only visible on mobile */}
          <div className="w-[330px] h-[350px] bg-white rounded-lg overflow-hidden shadow-lg lg:hidden">
            <iframe
              title="Google Map Mobile"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?q=Jakarta,Indonesia&t=&z=13&ie=UTF8&iwloc=&output=embed"
              style={{ filter: "grayscale(0%)" }}
            ></iframe>
          </div>
        </div>

        {/* Desktop Floating Map - Only visible on desktop */}
        <div className="hidden lg:block w-[520.822px] h-[668.945px] absolute bg-white rounded-lg overflow-hidden shadow-lg z-20 top-1/2 transform -translate-y-1/2 left-[50%]">
          <iframe
            title="Google Map Desktop"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?q=Jakarta,Indonesia&t=&z=13&ie=UTF8&iwloc=&output=embed"
            style={{ filter: "grayscale(0%)" }}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
