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
    <footer className="w-full">
      {/* Main Footer Section */}
      <div
        className="w-full font-[Montserrat]"
        style={{ backgroundColor: "#293037" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 text-center md:text-left">
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              <img
                src="/assets/icons/arbella_Logo_White.svg"
                alt="Arbella Logo"
                className="h-16 md:h-20 mb-6 mx-auto md:mx-0"
              />
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                Cras maecenas elementum quam sit purus ullamcorper tellus. A
                posuere tempus egestas orci eget.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 justify-center md:justify-start">
                {socialIcons.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="hover:opacity-80 transition-opacity"
                    aria-label={social.name}
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-12 h-12 md:w-14 md:h-14"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* ABOUT Section */}
            <div className="lg:col-span-1">
              <h3 className="text-white text-lg font-semibold mb-6">ABOUT</h3>
              <ul className="space-y-4">
                {aboutLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* PRODUCTS Section */}
            <div className="lg:col-span-1">
              <h3 className="text-white text-lg font-semibold mb-6">
                PRODUCTS
              </h3>
              <ul className="space-y-4">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* LOCATIONS Section */}
            <div className="lg:col-span-1">
              <h3 className="text-white text-lg font-semibold mb-6">
                LOCATIONS
              </h3>
              <ul className="space-y-4">
                <li className="text-gray-300 text-sm">Dhaka, Bangladesh</li>
                <li className="text-gray-300 text-sm">+8800000000000</li>
              </ul>
            </div>

            {/* Drop Resume Section */}
            <div className="lg:col-span-1">
              <h3 className="text-white text-lg font-semibold mb-6">
                Drop Resume
              </h3>
              <a
                href="mailto:careers@arbella.com"
                className="text-gray-300 text-sm hover:text-white transition-colors"
              >
                careers@arbella.com
              </a>
            </div>
          </div>

          {/* Divider */}
          <div
            className="mt-12 md:mt-16"
            style={{
              borderTop: "2px solid rgba(255, 255, 255, 0.68)",
            }}
          />
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="w-full bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            {/* Copyright */}
            <p className="text-white text-sm">
              © Arabella 2025 . All right reserved
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center md:justify-start">
              {bottomSocialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="hover:opacity-80 transition-opacity"
                  aria-label={social.name}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
