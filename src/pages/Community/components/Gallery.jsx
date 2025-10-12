// src/pages/Community/components/Gallery.jsx
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <section className="w-full bg-white py-[80px] flex flex-col items-center">
      {/* Heading */}
      <motion.h2
        className="text-center font-[IvyPresto_Headline] text-[32px] md:text-[48px] font-normal leading-[40px] md:leading-[60px] tracking-[-0.5px] text-[#2C2C2C] mb-[40px] md:mb-[60px]"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Our <span className="text-[#FFA273]">Gallery</span>
      </motion.h2>

      {/* Gallery container */}
      <motion.div
        className="w-full max-w-[1400px] flex flex-col gap-[20px] md:gap-[34px] px-4"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        {/* Row 1 */}
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-[16px] md:gap-[23px]"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <motion.img
            src="/assets/images/community/gallery1.jpg"
            alt="Gallery 1"
            className="object-cover w-full md:w-[646px] h-[200px] md:h-[367px]"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          />
          <motion.img
            src="/assets/images/community/gallery2.jpg"
            alt="Gallery 2"
            className="object-cover w-full md:w-[467.791px] h-[200px] md:h-[367px]"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          />
        </motion.div>

        {/* Row 2 */}
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-[16px] md:gap-[36px]"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          <motion.img
            src="/assets/images/community/gallery3.jpg"
            alt="Gallery 3"
            className="object-cover w-full md:w-[467.79px] h-[200px] md:h-[367px]"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          />
          <motion.img
            src="/assets/images/community/gallery4.jpg"
            alt="Gallery 4"
            className="object-cover w-full md:w-[646px] h-[250px] md:h-[430px]"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          />
        </motion.div>

        {/* Row 3 */}
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-[16px] md:gap-[36px]"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
        >
          <motion.img
            src="/assets/images/community/gallery5.jpg"
            alt="Gallery 5"
            className="object-cover w-full md:w-[646px] h-[250px] md:h-[430px]"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          />
          <motion.img
            src="/assets/images/community/gallery6.jpg"
            alt="Gallery 6"
            className="object-cover w-full md:w-[467.79px] h-[200px] md:h-[367px]"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Gallery;
