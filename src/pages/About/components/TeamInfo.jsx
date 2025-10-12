// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { teamMembers } from "../../../data/Data";

const TeamInfo = () => {
  return (
    <section className="w-full bg-gray-50 py-12 md:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-[IvyPresto_Headline] text-center text-[#293037] mb-12 md:mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Meet Our <span style={{ color: "#FFA475" }}>Team</span>
        </motion.h2>

        {/* Team Grid - First Row (4 cards) */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5 mb-6 md:mb-8 max-w-[1200px] mx-auto"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {teamMembers.slice(0, 4).map((member, index) => (
            <motion.div
              key={member.id}
              className="flex flex-col bg-white overflow-hidden"
              style={{
                borderRadius: "17px",
                border: "1px solid rgba(41, 48, 55, 0.30)",
              }}
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              {/* Member Image */}
              <motion.div
                style={{
                  width: "100%",
                  height: "234px",
                  borderRadius: "15px 15px 0 0",
                  backgroundImage: `url('${member.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              />

              {/* Member Info */}
              <motion.div
                className="text-center p-6 pt-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <h3 className="font-[Montserrat] text-lg font-medium text-[#454545] mb-2">
                  {member.name}
                </h3>
                <p
                  className="font-[plus-jakarta-sans] text-sm font-semibold mb-1"
                  style={{ color: "#FFA475" }}
                >
                  {member.title}
                </p>
                {member.subtitle && (
                  <p
                    className="font-[plus-jakarta-sans] text-xs font-medium mb-3"
                    style={{ color: "#FFA475" }}
                  >
                    {member.subtitle}
                  </p>
                )}
                <p className="font-[plus-jakarta-sans] text-sm text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Grid - Second Row (5 cards) */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-5 max-w-[1400px] mx-auto"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {teamMembers.slice(4).map((member, index) => (
            <motion.div
              key={member.id}
              className="flex flex-col bg-white overflow-hidden"
              style={{
                borderRadius: "17px",
                border: "1px solid rgba(41, 48, 55, 0.30)",
              }}
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.5 + index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              {/* Member Image */}
              <motion.div
                style={{
                  width: "100%",
                  height: "234px",
                  borderRadius: "15px 15px 0 0",
                  backgroundImage: `url('${member.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.08 }}
              />

              {/* Member Info */}
              <motion.div
                className="text-center p-6 pt-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.08 }}
              >
                <h3 className="font-[Montserrat] text-lg font-medium text-[#454545] mb-2">
                  {member.name}
                </h3>
                <p
                  className="font-[plus-jakarta-sans] text-sm font-semibold mb-1"
                  style={{ color: "#FFA475" }}
                >
                  {member.title}
                </p>
                {member.subtitle && (
                  <p
                    className="font-[plus-jakarta-sans] text-xs font-medium mb-3"
                    style={{ color: "#FFA475" }}
                  >
                    {member.subtitle}
                  </p>
                )}
                <p className="font-[plus-jakarta-sans] text-sm text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamInfo;
