import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <section className="w-full bg-[#F7FDFF] py-[60px] md:py-[120px] flex justify-center px-4 overflow-hidden">
      <motion.div
        className="relative max-w-[1400px] w-full flex flex-col lg:flex-row overflow-hidden"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Form Section */}
        <motion.div
          className="flex flex-col justify-between bg-[#002C42] text-white px-[40px] md:px-[80px] py-[40px] md:py-[70px] relative z-10 w-full lg:w-[70%] min-h-[600px] lg:h-[832.359px] overflow-hidden"
          style={{
            boxShadow:
              "0px 134.745px 191.127px -76.451px rgba(25, 58, 75, 0.30)",
          }}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          {/* Heading + Description + Form */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <motion.h2
              className="font-[Playfair_Display] text-[32px] md:text-[48px] lg:text-[64px] leading-[40px] md:leading-[60px] lg:leading-[80px] font-normal mb-[15px] md:mb-[20px]"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            >
              Get in <span className="text-[#FFA273]">Touch</span>
            </motion.h2>
            <motion.p
              className="text-[14px] md:text-[16px] leading-[24px] md:leading-[28px] text-[#FFF] max-w-[540px] mb-[30px] md:mb-[50px]"
              initial={{ y: 15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            >
              We're ready to bring your designs to life. Whether you have
              questions, need a quote, or want to schedule a factory visit — our
              team is here to help.
            </motion.p>

            {/* Form */}
            <motion.form
              className="flex flex-col gap-[20px] md:gap-[25px] max-w-[480px]"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            >
              <motion.input
                type="text"
                placeholder="Name *"
                className="w-full border border-[#DDE6EB] bg-transparent text-white placeholder-[#DDE6EB] px-4 md:px-5 py-3 md:py-4 text-[14px] md:text-[16px] focus:outline-none focus:border-[#FFA273]"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
                whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
              />
              <motion.input
                type="email"
                placeholder="Email"
                className="w-full border border-[#DDE6EB] bg-transparent text-white placeholder-[#DDE6EB] px-4 md:px-5 py-3 md:py-4 text-[14px] md:text-[16px] focus:outline-none focus:border-[#FFA273]"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.9, ease: "easeOut" }}
                whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
              />
              <motion.input
                type="text"
                placeholder="Phone number *"
                className="w-full border border-[#DDE6EB] bg-transparent text-white placeholder-[#DDE6EB] px-4 md:px-5 py-3 md:py-4 text-[14px] md:text-[16px] focus:outline-none focus:border-[#FFA273]"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.0, ease: "easeOut" }}
                whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
              />
              <motion.button
                type="submit"
                className="bg-[#FFA273] text-[#FFF] font-[Montserrat] font-semibold py-3 md:py-4 mt-[8px] md:mt-[10px] text-[14px] md:text-[16px] tracking-wide hover:bg-[#FF9461] transition-colors"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
              >
                SEND
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-[20px] sm:gap-[60px] mt-[40px] md:mt-[80px]"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
          >
            <motion.div
              className="flex items-center gap-3"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.3, ease: "easeOut" }}
            >
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
            </motion.div>

            <motion.div
              className="flex items-center gap-3"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.4, ease: "easeOut" }}
            >
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
            </motion.div>

            <motion.div
              className="flex items-center gap-3"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.5, ease: "easeOut" }}
            >
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
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Orange Section */}
        <motion.div
          className="relative bg-[#FFA273] w-full lg:w-[30%] min-h-[300px] lg:h-[832.359px] flex lg:block items-center justify-center py-8 lg:py-0 overflow-hidden"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          {/* Mobile Map - Only visible on mobile */}
          <motion.div
            className="w-[330px] h-[350px] bg-white rounded-lg overflow-hidden shadow-lg lg:hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
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
          </motion.div>
        </motion.div>

        {/* Desktop Floating Map - Only visible on desktop */}
        <motion.div
          className="hidden lg:block w-[520.822px] h-[668.945px] absolute bg-white rounded-lg overflow-hidden shadow-lg z-20 top-1/2 transform -translate-y-1/2 left-[50%]"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
