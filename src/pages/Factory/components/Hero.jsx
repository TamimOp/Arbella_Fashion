// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="relative flex justify-center items-center h-[579px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/images/factory/Banner.png')",
      }}
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <motion.div
        className="absolute inset-0 bg-black/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      <motion.div
        className="absolute top-1/2 -translate-y-1/2 right-0 flex flex-col justify-center items-center gap-[12px] sm:gap-[15px] lg:gap-[17.59px] w-[48px] sm:w-[55px] lg:w-[62px] h-[150px] sm:h-[175px] lg:h-[202px] bg-white shadow-md rounded-l-md"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <motion.a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 hover:opacity-80 transition"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 0.5,
            delay: 1.0,
            type: "spring",
            stiffness: 200,
          }}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src="/assets/icons/facebook.svg"
            alt="Facebook"
            className="w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9"
          />
        </motion.a>

        <motion.a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 hover:opacity-80 transition"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 0.5,
            delay: 1.1,
            type: "spring",
            stiffness: 200,
          }}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src="/assets/icons/instagram.svg"
            alt="Instagram"
            className="w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9"
          />
        </motion.a>

        <motion.a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 hover:opacity-80 transition"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 0.5,
            delay: 1.2,
            type: "spring",
            stiffness: 200,
          }}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src="/assets/icons/whatsApp.svg"
            alt="WhatsApp"
            className="w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9"
          />
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
