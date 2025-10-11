import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const SupplyChain = () => {
  return (
    <section className="bg-[#F7F7F7] py-24 relative overflow-hidden">
      {/* Top Right Background Image */}
      <motion.div
        className="absolute top-0 -right-40 md:-right-50 w-[300px] h-[280px] md:w-[410px] md:h-[382px] opacity-30"
        style={{
          background:
            "url('/assets/images/whyChooseArbella/yarnBeam.png') center/cover no-repeat",
        }}
        initial={{ x: 100, opacity: 0, rotate: 10 }}
        animate={{ x: 0, opacity: 0.3, rotate: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <div className="max-w-[1400px] mx-auto px-10 flex flex-col items-center text-center">
        {/* ---- Top Heading ---- */}
        <motion.div
          className="mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className='font-["IvyPresto_Headline"] text-[30px] md:text-[48px] font-normal leading-[60px] tracking-[-0.7px] text-[#2C2C2C]'
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <span className="text-[#FFA273]">Supply</span> Chain
          </motion.h2>
          <motion.p
            className="text-[#293037] font-[Montserrat] text-[16px] md:text-[20px] leading-[28px] mt-2"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          >
            A simple step-by-step process — from design to
            <span className="hidden md:inline">
              {" "}
              <br />
            </span>{" "}
            delivery.
          </motion.p>
        </motion.div>

        {/* ---- Bottom Full Image ---- */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ y: 80, opacity: 0, scale: 0.95 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }}
        >
          <motion.img
            src="/assets/images/whyChooseArbella/supplychain.png"
            alt="Supply Chain Process"
            className="w-full max-w-[1400px] h-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SupplyChain;
