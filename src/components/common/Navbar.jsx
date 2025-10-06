import React from "react";
import { NavLink } from "react-router-dom";
import arbellaLogo from "/assets/icons/arbella_Logo.svg";

const Navbar = () => {
  const navItems = [
    { label: "ABOUT US", path: "/about-us" },
    { label: "PRODUCTS", path: "/products" },
    { label: "WHY CHOOSE ARBELLA", path: "/why-choose-arbella" },
    { label: "OUR FACTORY", path: "/our-factory" },
    { label: "SUSTAINABILITY", path: "/sustainability" },
    { label: "COMMUNITY", path: "/community" },
    { label: "CONTACT US", path: "/contact-us" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 flex justify-center items-center"
      style={{
        background: "rgba(217, 217, 217, 0.27)",
        boxShadow: "0 22px 20.6px 0 rgba(0, 0, 0, 0.10) inset",
        backdropFilter: "blur(9.3px)",
        height: "107px",
      }}
    >
      <div className="flex justify-between items-center w-full max-w-[1400px] px-10">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/">
            <img
              src={arbellaLogo}
              alt="Arbella Logo"
              className="h-[60px] w-auto object-contain"
            />
          </NavLink>
        </div>

        {/* Nav Links */}
        <nav className="flex items-center gap-8">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-semibold tracking-wide transition-colors duration-200 font-[Montserrat] ${
                  isActive
                    ? "text-[#FFA273]"
                    : "text-white hover:text-[#FFA273]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
