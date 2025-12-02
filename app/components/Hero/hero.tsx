"use client";

import { motion } from "framer-motion";
import CardGalleryWrapper from "../CardGallery";
import Navbar from "../Navbar/nav-bar";

export default function Hero() {
  return (
    <section className="relative flex flex-col">
      {/* Full Gradient Background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#E9F5FF_0%,rgba(99,147,219,0.75)_60%,rgba(11,83,196,0.15)_100%)] z-0"></div>

      {/* White Overlay - Bottom 50% */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-[#fdfdff] z-[1]"></div>

      {/* Navbar - Above gradient */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center grow py-24 px-6">
        {/* Heading Section */}
        <div className="text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-[#030967] font-primary mb-3"
          >
            Meet MenaPro Agents
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl font-primary text-[#030967] font-medium mb-4"
          >
            The trusted <span className="font-semibold">experts</span> who turn
            your <span className="font-semibold">UAE property</span> dreams into
            reality.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="max-w-160 mx-auto text-base text-[#111827] font-primary leading-snug"
          >
            No more chasing agents. No more fake listings. No more wondering if
            you can trust the person on the other end. MenaPro Agents are the
            ones who simply do it right.
          </motion.p>
        </div>

        {/* Card Gallery */}
        <div className="w-full">
          <CardGalleryWrapper />
        </div>

        {/* Button */}
        <div className="text-center space-y-6 md:pt-6">
          <p className="font-primary font-semibold text-2xl">
            Real listings. Fast replies. Agents you can count on.
          </p>
          <button className="bg-[#030967] text-[#fdfdff] px-4 py-2 rounded-md font-primary font-semibold hover:bg-[#062696] hover:scale-95 transition-all duration-300  text-base">
            Find Mena Pro Agents
          </button>
        </div>
      </div>
    </section>
  );
}
