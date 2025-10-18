// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const socialVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  const socialItemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.8 + i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      className="relative flex justify-center items-center h-[500px] sm:h-[600px] lg:h-[864px] bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/home/HomeHero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/10"></div>

      <motion.div
        className="relative z-10 flex justify-between items-center w-full max-w-[1400px] px-4 sm:px-6 lg:px-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="pl-0 sm:pl-6 lg:pl-[49px]"
          variants={textVariants}
        >
          <h1 className="text-white font-[IvyPresto_Headline] text-[28px] sm:text-[36px] lg:text-[48px] font-semibold leading-[36px] sm:leading-[46px] lg:leading-[58px] tracking-[-0.7px]">
            Trusted Garment <br /> Manufacturer For <br />
            <span className="text-[#FFA273]">Global Brands</span>
          </h1>
        </motion.div>
        <div className="flex-shrink-0"></div>
      </motion.div>

      <motion.div
        className="absolute top-1/2 -translate-y-1/2 right-0 flex flex-col justify-center items-center gap-[12px] sm:gap-[15px] lg:gap-[17.59px] w-[48px] sm:w-[55px] lg:w-[62px] h-[150px] sm:h-[175px] lg:h-[202px] bg-white shadow-md rounded-l-md"
        variants={socialVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 hover:opacity-80 transition"
          variants={socialItemVariants}
          custom={0}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
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
          variants={socialItemVariants}
          custom={1}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
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
          variants={socialItemVariants}
          custom={2}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="/assets/icons/linkedin.svg"
            alt="LinkedIn"
            className="w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9"
          />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
