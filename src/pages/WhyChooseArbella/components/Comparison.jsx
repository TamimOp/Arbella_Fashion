// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Comparison = () => {
  return (
    <section className="w-full bg-[#F7FDFF] py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.h2
          className="text-center font-[IvyPresto_Headline] text-[#000] text-2xl md:text-3xl lg:text-4xl font-light leading-8 md:leading-[78.313px] mb-8 md:mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          LABOR COST <span className="text-[#FFA475]">COMPARISON (2025)</span>
        </motion.h2>

        {/* Chart Image */}
        <motion.div
          className="flex justify-center pl-0 md:pl-20"
          initial={{ y: 60, opacity: 0, scale: 0.9 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }}
        >
          <motion.img
            src="/assets/images/whyChooseArbella/Spendings.png"
            alt="Labor Cost Comparison Chart"
            className="w-full h-auto max-w-xs md:w-[751px] md:h-[718px] md:max-w-none md:p-0"
            initial={{ opacity: 0, rotateY: 15 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
