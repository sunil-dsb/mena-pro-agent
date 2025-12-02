"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const testimonials = [
    {
      id: 1,
      image: "/images/07.webp",
      highlight: "Since earning my MenaPro badge, everything changed.",
      text: "Clients now reach out to me specifically because they see I'm verified and reliable.",
    },
    {
      id: 2,
      image: "/images/06.webp",
      highlight:
        "I've always prided myself on great customer service, but before MenaPro, it felt invisible.",
      text: "Now, that effort is recognized and rewarded.",
    },
    {
      id: 3,
      image: "/images/08.webp",
      highlight:
        "In a crowded market, MenaPro became my competitive advantage.",
      text: "When clients compare agents, the badge immediately sets me apart.",
    },
    {
      id: 4,
      image: "/images/10.webp",
      highlight: "The badge turned my reputation into a competitive advantage.",
      text: "Clients trust me before we even meet.",
    },
  ];

  return (
    <footer ref={ref} className="relative overflow-hidden bg-gradient-to-br from-[#0a1a4a] via-[#102570] to-[#081440]">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/footer.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#062696] to-[#0C194Acc]"></div>

      <div className="container-m3 py-20 relative z-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-semibold text-base-white font-primary mb-3"
          >
            Become a MenaPro Agent
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-semibold text-base-white font-primary mb-6"
          >
            Stand Out in the UAE Market
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-base text-base-white font-primary max-w-3xl mx-auto opacity-85 leading-relaxed font-normal"
          >
            Are you a RERA-certified agent who&apos;s tired of competing with
            unreliable competitors? Earn the MenaPro badge and get recognized
            for the quality service you already provide.
          </motion.p>
        </div>

        {/* Testimonial Cards */}
        <div className="flex flex-wrap justify-center gap-5 mb-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
              className="agent-card relative border-4 border-primary-600 rounded-2xl overflow-visible"
              style={{
                boxShadow: `
      0px 0px 80px rgba(99,147,219,0.35),
      0px 0px 160px rgba(11,83,196,0.25),
      0px 0px 260px rgba(11,83,196,0.18)
    `,
              }}
            >
              {/* Image */}
              <div className="agent-card-image relative rounded-2xl overflow-hidden">
                <img
                  src={testimonial.image}
                  alt="Agent"
                  className="w-full h-full object-cover scale-110"
                />

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_16%,rgba(255,255,255,1)_67%,rgba(255,255,255,1)_100%)] opacity-[0.60] z-10 pointer-events-none"></div>
              </div>

              <div className="absolute inset-0 z-20 flex flex-col justify-end p-4">
                <p className="text-primary text-xs opacity-95 leading-snug italic" >
                  <span className="font-bold text-[#191B5A] mb-1 italic" > {testimonial.highlight} </span>    {testimonial.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-base-white text-base-black px-6 py-3 rounded-md font-primary font-normal hover:bg-primary-100 hover:scale-95 transition-all duration-300 text-sm">
            Get started 🚀
          </button>
        </div>
      </div>
    </footer >
  );
}
