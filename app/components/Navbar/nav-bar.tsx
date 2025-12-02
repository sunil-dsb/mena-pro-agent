"use client";

import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-base-black-35 text-base-white font-primary text-base font-semibold">
      <div className="container-m3">
        <div className="flex items-center justify-between py-3">
          <div className="flex gap-6">
            <Image
              src="/icons/Mena-logo.svg"
              alt="Mena Homes"
              width={90}
              height={30}
            />
            <div className="hidden md:flex gap-2 p-2 items-center">
              <Image
                src="/icons/Vector (4).svg"
                alt="Language"
                width={20}
                height={20}
              />
              <p className="font-normal">EN</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block text-sm">
            <ul className="flex gap-6 items-center">
              <li className="cursor-pointer px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#e9f5ff33]">
                Residential
              </li>

              <li className="bg-primary-100-30 rounded-md h-10 px-4 py-2 cursor-pointer flex items-center transition-all duration-300 hover:bg-[#e9f5ff33] border border-transparent hover:border-[#fdfdff]">
                Commercial
              </li>

              <li className="cursor-pointer px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#e9f5ff33]">
                Find Agent
              </li>

              <button className="border border-base-white hover:border-[#3ca4f7] rounded-md px-4 py-2 cursor-pointer hover:scale-95 transition-all duration-300">
                Log in
              </button>
            </ul>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1 w-6 h-6 justify-center items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
            ></span>
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
                }`}
            ></span>
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
            }`}
        >
          <ul className="flex flex-col gap-4">
            <li className="cursor-pointer py-2">Residential</li>
            <li className="bg-primary-100-30 rounded-md px-4 py-3 cursor-pointer">
              Commercial
            </li>
            <li className="cursor-pointer py-2">Find Agent</li>
            <button className="border border-base-white rounded-md px-4 py-3 cursor-pointer text-center">
              Log in
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
