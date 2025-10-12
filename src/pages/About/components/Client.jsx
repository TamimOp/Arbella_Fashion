import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { clients } from "../../../data/Data";

const Client = () => {
  return (
    <section className="bg-[#F6FAFC] py-24 flex flex-col items-center">
      {/* Title */}
      <motion.div
        className="text-center mb-8"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className='text-[48px] font-["Playfair_Display"] font-normal leading-[52px] text-[#2C2C2C]'
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Our <span className="text-[#FFA273]">Clients</span>
        </motion.h2>
      </motion.div>

      <motion.p
        className="text-center text-[#4B4B4B] text-[18px] leading-[28px] max-w-[780px] mb-16 px-6"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
      >
        Arbella partners with leading fashion brands and retailers across the
        world — delivering quality, compliance, and sustainability at every
        step.
      </motion.p>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-25 gap-y-16 justify-items-center max-w-[1300px] px-15 md:px-0"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        {clients.map((src, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center w-[160px] h-[160px]"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.4 + index * 0.05,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            <img
              src={src}
              alt={`Client ${index + 1}`}
              className="object-contain w-full h-full"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Client;
