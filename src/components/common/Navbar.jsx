import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import arbellaLogo from "/assets/icons/arbella_Logo.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "ABOUT US", path: "/about-us" },
    { label: "PRODUCTS", path: "/products" },
    { label: "WHY CHOOSE ARBELLA", path: "/why-choose-arbella" },
    { label: "OUR FACTORY", path: "/our-factory" },
    { label: "SUSTAINABILITY", path: "/sustainability" },
    { label: "COMMUNITY", path: "/community" },
    { label: "CONTACT US", path: "/contact-us" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50 flex justify-center items-center"
        style={{
          background: "rgba(255, 255, 255, 0.25)",
          boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.2)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          height: "107px",
        }}
      >
        <div className="flex justify-between items-center w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/">
              <img
                src={arbellaLogo}
                alt="Arbella Logo"
                className="h-[40px] sm:h-[50px] lg:h-[60px] w-auto object-contain"
              />
            </NavLink>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `text-xs xl:text-sm font-semibold tracking-wide transition-colors duration-200 font-[Montserrat] whitespace-nowrap ${
                    isActive
                      ? "text-[#FFA273]"
                      : "text-[#2C2C2C] hover:text-[#FFA273]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span
              className={`w-6 h-0.5 bg-[#2C2C2C] transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-[#2C2C2C] transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-[#2C2C2C] transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(5px)",
        }}
      >
        {/* Mobile Menu */}
        <div
          className={`fixed top-[107px] left-0 right-0 transition-all duration-300 ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{
            background: "rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
          }}
        >
          <nav className="flex flex-col py-6 px-6 space-y-4">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-base font-semibold tracking-wide transition-colors duration-200 font-[Montserrat] py-2 px-4 rounded ${
                    isActive
                      ? "text-[#FFA273] bg-gray-100"
                      : "text-[#2C2C2C] hover:text-[#FFA273] hover:bg-gray-50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
