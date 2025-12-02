"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const steps = [
    {
      id: 1,
      title: "Connect & Start Simple",
      points: [
        "Contact a MenaPro Agent and get a real reply within hours, not days",
        "Share what you're looking for (budget, location preferences, timeline) in a pressure-free chat",
        "Your agent explains how the process works and what to expect next",
      ],
    },
    {
      id: 2,
      title: "See Real Options That Match",
      points: [
        "Your agent shares verified properties that match your actual requirements. No fake photos, no inflated prices",
        "Get straight talk about each property's pros, cons, and real value",
        "As your preferences evolve or new properties hit the market, your agent keeps you in the loop",
      ],
    },
    {
      id: 3,
      title: "Visit Properties Without the Hassle",
      points: [
        "Your agent coordinates tours at times that work for you and actually shows up prepared",
        "MenaPro Agents respect your time. Last-minute changes are rare",
        "Walk through properties with someone who points out important details and answers questions honestly",
      ],
    },
    {
      id: 4,
      title: "Close the Deal with Support",
      points: [
        "Your agent advocates for fair terms and the best possible price",
        "From paperwork to bank coordination to final signatures, your agent manages the details",
        "No ghosting, no dropped balls. Your MenaPro Agent sees it through to the end",
      ],
    },
  ];

  return (
    <section ref={ref} className="bg-primary-100 py-20">
      <div className="container-m3">
        {/* Heading */}
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-800 font-primary mb-4"
          >
            Your Property Journey with a MenaPro Agent
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-base font-primary opacity-70 font-medium"
          >
            From First Message to Move-In Day. Here&apos;s How It Works
          </motion.p>
        </div>

        {/* Step Cards with Timeline */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 bg-transparent pt-4 md:pt-12">
          {/* Timeline Line - Desktop only */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:block absolute h-0.5 bg-primary-700 origin-left"
            style={{ top: "16px", left: "12.5%", width: "75%" }}
          ></motion.div>

          {/* Timeline Dots - Desktop only */}
          <div
            className="hidden lg:flex absolute justify-between"
            style={{ top: "16px", left: "12.5%", width: "75%" }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.6 + index * 0.1,
                  ease: "easeOut",
                }}
                className="w-4 h-4 rounded-full bg-primary-700 -translate-y-1/2"
              ></motion.div>
            ))}
          </div>
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.5,
                delay: 0.8 + index * 0.1,
                ease: "easeOut",
              }}
              className="bg-transparent rounded-lg p-6 border-[1.4px] border-active"
            >
              <h3 className="text-base font-semibold text-primary-800 font-primary mb-4">
                {step.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {step.points.map((point, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 mt-0.5">
                      <img
                        src="/icons/tick.svg"
                        alt="check"
                        width="16"
                        height="16"
                      />
                    </span>
                    <span className="text-xs text-base-text font-primary leading-snug">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-primary-800 text-base-white px-4 py-2 rounded-md font-primary font-semibold hover:bg-primary-700 hover:scale-95 transition-all duration-300 text-base">
            Find Mena Pro Agents
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
