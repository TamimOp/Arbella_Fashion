// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Footer = () => {
  const aboutLinks = [
    { name: "WHY CHOOSE ARBELLA", href: "#" },
    { name: "OUR FACTORY", href: "#" },
    { name: "COMMUNITY", href: "#" },
    { name: "SUSTAINABILITY", href: "#" },
  ];

  const productLinks = [
    { name: "Outerwear", href: "#" },
    { name: "Casual wear", href: "#" },
    { name: "Bottoms", href: "#" },
    { name: "Uniform", href: "#" },
    { name: "Workwear", href: "#" },
  ];

  const socialIcons = [
    { name: "Facebook", icon: "/assets/icons/FooterFacebook.svg", href: "#" },
    { name: "Twitter", icon: "/assets/icons/FooterTwitter.svg", href: "#" },
    { name: "LinkedIn", icon: "/assets/icons/FooterLinkedIn.svg", href: "#" },
    { name: "Instagram", icon: "/assets/icons/FooterInstagram.svg", href: "#" },
  ];

  const bottomSocialIcons = [
    { name: "YouTube", icon: "/assets/icons/youtube.svg", href: "#" },
    { name: "LinkedIn", icon: "/assets/icons/FooterLinkedin2.svg", href: "#" },
    { name: "Facebook", icon: "/assets/icons/FooterFacebook2.svg", href: "#" },
    {
      name: "Instagram",
      icon: "/assets/icons/FooterInstagram2.svg",
      href: "#",
    },
  ];

  return (
    <footer className="w-full overflow-hidden">
      {/* Main Footer Section */}
      <div
        className="w-full font-[Montserrat] overflow-hidden"
        style={{ backgroundColor: "#293037" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 text-center md:text-left overflow-hidden">
            {/* Logo and Description */}
            <motion.div
              className="lg:col-span-1"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.img
                src="/assets/icons/arbella_Logo_White.svg"
                alt="Arbella Logo"
                className="h-16 md:h-20 mb-6 mx-auto md:mx-0"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              />
              <motion.p
                className="text-gray-300 text-sm leading-relaxed mb-8"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                Crafting quality apparel for global brands with innovation,
                integrity, and excellence.
              </motion.p>

              {/* Social Icons */}
              <motion.div
                className="flex gap-4 justify-center md:justify-start"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                {socialIcons.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="hover:opacity-80 transition-opacity"
                    aria-label={social.name}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 1.4 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-12 h-12 md:w-14 md:h-14"
                    />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* ABOUT Section */}
            <motion.div
              className="lg:col-span-1"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.h3
                className="text-white text-lg font-semibold mb-6"
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.0 }}
              >
                ABOUT
              </motion.h3>
              <ul className="space-y-4">
                {aboutLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ x: -15, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                  >
                    <motion.a
                      href={link.href}
                      className="text-gray-300 text-sm hover:text-white transition-colors"
                      whileHover={{
                        x: 5,
                        color: "#ffffff",
                        transition: { duration: 0.2 },
                      }}
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* PRODUCTS Section */}
            <motion.div
              className="lg:col-span-1"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.h3
                className="text-white text-lg font-semibold mb-6"
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.2 }}
              >
                PRODUCTS
              </motion.h3>
              <ul className="space-y-4">
                {productLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ x: -15, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                  >
                    <motion.a
                      href={link.href}
                      className="text-gray-300 text-sm hover:text-white transition-colors"
                      whileHover={{
                        x: 5,
                        color: "#ffffff",
                        transition: { duration: 0.2 },
                      }}
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* LOCATIONS Section */}
            <motion.div
              className="lg:col-span-1"
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.h3
                className="text-white text-lg font-semibold mb-6"
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.4 }}
              >
                ADDRESS
              </motion.h3>
              <ul className="space-y-4">
                <motion.li
                  className="text-gray-300 text-sm"
                  initial={{ x: 15, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.6 }}
                  whileHover={{
                    x: 5,
                    color: "#ffffff",
                    transition: { duration: 0.2 },
                  }}
                >
                  arif@arbellafashion.com
                </motion.li>
                <motion.li
                  className="text-gray-300 text-sm"
                  initial={{ x: 15, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.7 }}
                  whileHover={{
                    x: 5,
                    color: "#ffffff",
                    transition: { duration: 0.2 },
                  }}
                >
                  +8800000000000
                </motion.li>
                <motion.li
                  className="text-gray-300 text-sm"
                  initial={{ x: 15, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.6 }}
                  whileHover={{
                    x: 5,
                    color: "#ffffff",
                    transition: { duration: 0.2 },
                  }}
                >
                  38, Gararon, Bormi, Sreepur, Gazipur, Bangladesh
                </motion.li>
              </ul>
            </motion.div>

            {/* Drop Resume Section */}
            <motion.div
              className="lg:col-span-1"
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <motion.h3
                className="text-white text-lg font-semibold mb-6"
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.6 }}
              >
                Drop Resume
              </motion.h3>
              <motion.a
                href="mailto:careers@arbella.com"
                className="text-gray-300 text-sm hover:text-white transition-colors"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.8 }}
                whileHover={{
                  scale: 1.05,
                  color: "#ffffff",
                  transition: { duration: 0.2 },
                }}
              >
                careers@arbella.com
              </motion.a>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            className="mt-12 md:mt-16"
            style={{
              borderTop: "2px solid rgba(255, 255, 255, 0.68)",
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 2.0 }}
          />
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="w-full bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            {/* Left side - Copyright */}
            <motion.p
              className="text-white text-sm"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              © Arbella 2025 . All right reserved
            </motion.p>

            {/* Center - Developer Credit */}
            <motion.div
              className="flex items-center gap-2"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.span
                className="text-gray-400 text-sm font-[Montserrat]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.0 }}
              >
                Developed by
              </motion.span>
              <motion.span
                className="text-transparent bg-gradient-to-r from-[#FFA273] via-[#FF8A50] to-[#FFA273] bg-clip-text font-bold text-lg tracking-wider"
                initial={{ scale: 0.8, opacity: 0, rotateX: -90 }}
                whileInView={{ scale: 1, opacity: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 1.1,
                  type: "spring",
                  stiffness: 150,
                }}
                whileHover={{
                  scale: 1.08,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                style={{
                  fontFamily: "Carattere, cursive",
                  textShadow:
                    "0 0 15px rgba(255, 162, 115, 0.4), 0 0 30px rgba(255, 162, 115, 0.2)",
                  letterSpacing: "0.1em",
                }}
              >
                Tamim Shad Anik
              </motion.span>
            </motion.div>

            {/* Right side - Social Icons */}
            <motion.div
              className="flex gap-4 justify-center md:justify-start"
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.0 }}
            >
              {bottomSocialIcons.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="hover:opacity-80 transition-opacity"
                  aria-label={social.name}
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: 1.2 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-6 h-6"
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
