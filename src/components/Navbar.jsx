import React, { useEffect, useState } from "react";
import ServicesMegaMenu from "./ServicesMegaMenu";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // ✅ Set active path ON LOAD
  useEffect(() => {
    setActive(window.location.pathname);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const isActive = (path) => active === path;


  const activeClass =
    "px-[18px] py-[6px] rounded-full bg-[#FFFFFF40] text-white backdrop-blur-md";
  const normalClass =
    "px-4 py-[10px] text-white hover:text-white transition-all";

  return (
    <nav
      className={`sticky top-0 z-50 w-full h-[94px] transition-all duration-300 ${
        isScrolled ? "bg-black/20 backdrop-blur-[54px]" : "bg-black"
      }`}
    >
      <div className="max-w-[90%] mx-auto w-full h-full flex items-center justify-between">

        {/* LOGO */}
        <a href="/">
          <img
            src="/images/marcamore-logo.svg"
            alt="marcamore logo"
            className="h-12 w-auto"
          />
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden xl:flex items-center gap-10">
          <div className="flex items-center gap-4 text-[16px] font-medium text-white">

            {/* HOME */}
            <a href="/" className={isActive("/") ? activeClass : normalClass}>
              Home
            </a>

            <ServicesMegaMenu />

            {/* ABOUT */}
            <a
              href="/about"
              className={isActive("/about") ? activeClass : normalClass}
            >
              About Us
            </a>

            {/* WORK */}
            <a
              href="/work"
              className={isActive("/work") ? activeClass : normalClass}
            >
              Work
            </a>

            {/* CONTACT */}
            <a
              href="/contact"
              className={isActive("/contact") ? activeClass : normalClass}
            >
              Contact
            </a>

            {/* FRANCHISING */}
            <a
              href="/franchising"
              className={isActive("/franchising") ? activeClass : normalClass}
            >
              Franchising
            </a>

          </div>

          <div className="h-8 w-px bg-white/30"></div>

          <a href="/requestproposal">
            <button className="h-10 min-w-[181px] px-6 rounded-full text-white text-sm font-semibold bg-gradient-to-r from-[#EE5125] to-[#E51F31]">
              Request a Proposal
            </button>
          </a>
        </div>

        {/* MOBILE MENU ICON */}
        <div className="xl:hidden z-50">
          <img
            src="/images/menu1.svg"
            className="w-[44px] h-[44px] cursor-pointer"
            alt="menu"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`xl:hidden bg-black text-white transition-all duration-300 overflow-hidden ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-8 text-sm font-medium">

          <a href="/" onClick={() => setOpen(false)}>Home</a>
          <a href="/about" onClick={() => setOpen(false)}>About Us</a>
          <a href="/work" onClick={() => setOpen(false)}>Work</a>
          <a href="/contact" onClick={() => setOpen(false)}>Contact</a>
          <a href="/franchising" onClick={() => setOpen(false)}>Franchising</a>

          <a href="/requestproposal" onClick={() => setOpen(false)}>
            <button className="mt-4 h-10 min-w-[181px] px-6 rounded-full text-white text-sm font-semibold bg-gradient-to-r from-[#EE5125] to-[#E51F31]">
              Request a Proposal
            </button>
          </a>

        </div>
      </div>

      {/* BADGE */}
      <div className="absolute right-[4%] top-[94px] z-40">
        <img src="/images/Insights.svg" className="w-[112px] h-[58px]" />
      </div>

    </nav>
  );
}

export default Navbar;