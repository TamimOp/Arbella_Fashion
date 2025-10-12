import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const CommunityForEmployee = () => {
  return (
    <section className="w-full bg-[#EBEBEB] font-[Manrope] pb-10 md:pb-0">
      {/* ---------- Heading Section ---------- */}
      <motion.div
        className="w-full flex justify-center pt-[80px] px-4 md:px-8"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className='text-center font-["Playfair_Display"] text-[32px] md:text-[48px] lg:text-[64px] font-normal leading-[38px] md:leading-[54px] lg:leading-[68px] tracking-[-0.8px] text-[#2C2C2C]'
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Our <span className="text-[#FFA273]">Community Center</span>
          <br />
          for Factory <span className="text-[#FFA273]">Employees</span>
        </motion.h2>
      </motion.div>

      {/* ---------- Main Content Section ---------- */}
      <motion.div
        className="w-full flex flex-col lg:flex-row justify-between items-stretch mt-[50px] px-4 md:px-0"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        {/* Left Cards */}
        <motion.div
          className="max-w-[740px] w-full lg:pl-[120px] py-[40px]"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[28px] max-w-[640px]">
            {/* Card 1 */}
            <motion.div
              className="rounded-[30px] bg-[#FFA2731C] px-[20px] md:px-[28px] py-[24px] md:py-[32px] flex flex-col gap-3"
              initial={{ y: 30, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
            >
              <motion.img
                src="/assets/images/community/Book.svg"
                alt="Learning Hub"
                className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
              />
              <h3 className="text-[14px] md:text-[15px] font-semibold text-[#1E1E1E]">
                Learning Hub
              </h3>
              <p className="text-[12px] text-[#000] leading-[22px] md:leading-[26px]">
                Literacy programs, language courses, and skill-building
                workshops.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="rounded-[30px] bg-[#29303714] px-[20px] md:px-[28px] py-[24px] md:py-[32px] flex flex-col gap-3"
              initial={{ y: 30, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
            >
              <motion.img
                src="/assets/images/community/Health.svg"
                alt="Health & Wellness"
                className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
              />
              <h3 className="text-[14px] md:text-[15px] font-semibold text-[#1E1E1E]">
                Health & Wellness
              </h3>
              <p className="text-[12px] text-[#000] leading-[22px] md:leading-[26px]">
                Regular health check-ups, awareness sessions, and counseling
                support.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="rounded-[30px] bg-[#29303714] px-[20px] md:px-[28px] py-[24px] md:py-[32px] flex flex-col gap-3"
              initial={{ y: 30, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
            >
              <motion.img
                src="/assets/images/community/Support.svg"
                alt="Social Support"
                className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
              />
              <h3 className="text-[14px] md:text-[15px] font-semibold text-[#1E1E1E]">
                Social Support
              </h3>
              <p className="text-[12px] text-[#000] leading-[22px] md:leading-[26px]">
                Community events, peer groups, and family engagement programs.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              className="rounded-[30px] bg-[#FFA2731C] px-[20px] md:px-[28px] py-[24px] md:py-[32px] flex flex-col gap-3"
              initial={{ y: 30, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
            >
              <motion.img
                src="/assets/images/community/Leadership.svg"
                alt="Recreation"
                className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
              />
              <h3 className="text-[14px] md:text-[15px] font-semibold text-[#1E1E1E]">
                Recreation
              </h3>
              <p className="text-[12px] text-[#000] leading-[22px] md:leading-[26px]">
                Spaces for relaxation, cultural activities, and team-building
                events.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full lg:w-[582px] min-h-[300px] md:min-h-[400px] lg:min-h-[468px] flex-shrink-0 bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage:
              "linear-gradient(179deg, rgba(14, 13, 13, 0.49) 0.49%, rgba(0, 0, 0, 0.00) 49.49%, rgba(0, 0, 0, 0.49) 97.55%), url('/assets/images/community/OurCommunity.png')",
          }}
          initial={{ x: 50, opacity: 0, scale: 0.95 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        />
      </motion.div>
    </section>
  );
};

export default CommunityForEmployee;
