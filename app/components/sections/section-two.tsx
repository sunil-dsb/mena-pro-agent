"use client";
import Image from "next/image";
import vector from "../../../public/icons/Vector.svg";
import actual from "../../../public/icons/Vector (1).svg";
import search from "../../../public/icons/magnifying-glass-light (1) 1.svg";
import hand from "../../../public/icons/Vector (2).svg";
import people from "../../../public/icons/Vector (3).svg";
import mena_pro from "../../../public/images/mena_pro.svg";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: vector,
    title: "Responsive",
    description:
      "MenaPro Agents are recognized for being more responsive, helping you get answers faster and keep your search moving smoothly.",
  },
  {
    icon: actual,
    title: "Actual Listings",
    description:
      "MenaPro Agents maintain accurate, up-to-date listings real details, real photos, and pricing that reflects the current market.",
  },
  {
    icon: search,
    title: "They Treat Your Search Like It Matters",
    description:
      "MenaPro Agents are selected because they consistently show care and attention throughout the process.",
  },
  {
    icon: hand,
    title: "They Keep You Informed",
    description:
      "They're known for providing clear updates from your first message all the way to the final steps.",
  },
  {
    icon: people,
    title: "They Show Up",
    description:
      "MenaPro Agents are highlighted for their reliability: coming prepared and respecting your time.",
  },
];

const SectionTwo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} className="container-m3">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-primary-800 font-bold text-center text-[35px] text-shadow-[1px_2px_2px_0px_rgba(56,78,113,45)] mb-3"
      >
        Your Personal Guide to Stress-Free Property Search
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="text-base text-center text-base-text font-primary max-w-3xl mx-auto opacity-85 leading-relaxed font-normal"
      >
        Finding property in the UAE shouldn&apos;t mean dealing with ghosting
        agents, outdated listings, or last-minute cancellations. That&apos;s why
        MenaPro Agents earn their badge by consistently putting you first.
      </motion.p>

      <div className="flex gap-9 md:gap-9 flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap  mt-20 justify-around lg:justify-center radial-gradient">
        <div className="relative flex items-center justify-center">
          <div className="w-[230px] md:w-[220px] lg:w-[230px] rounded-3xl overflow-hidden shadow-2xl border-2 border-base mr-0 lg:-mr-24 z-10">
            <Image
              src="/images/08.webp"
              alt="MenaPro Agent"
              className="w-full h-auto object-cover shadows"
              width={100}
              height={100}
            />
          </div>

          <div className="w-60 md:w-[250px] left-[50px] md:left-[25px] bottom-[-50px] md:-bottom-5 absolute flex items-center justify-center rounded-tl-3xl rounded-br-3xl rounded-bl-sm rounded-tr-sm z-20">
            <Image
              src={mena_pro}
              alt="logo"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {features.map((feature, index) => {
            const isLast = index === features.length - 1;

            return (
              <div
                key={feature.title}
                className="flex items-start sm:justify-center justify-end gap-6 relative"
              >
                <div className="flex items-start gap-1">
                  <div
                    className={`
            w-80 h-8 bg-transparent border-t-3
            ${isLast ? "border-l-0" : "border-l-3"}
            border-[#81c5fb] rounded-tl-3xl relative top-6 hidden lg:flex
          `}
                  >
                    <div className="absolute w-3 h-3 bg-primary-300 right-0 rounded-full -top-2"></div>
                  </div>

                  <div className="relative">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100">
                      <Image
                        src={feature.icon}
                        width={22}
                        height={22}
                        alt={feature.title}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="max-w-md">
                  <h3 className="text-base-text text-xl font-bold">
                    {feature.title}
                  </h3>
                  <p className="text-base-text text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-center mt-16">
        <p className="text-bg-base-black text-xl md:text-2xl font-semibold">
          Some agents just do it right.
          <span className="text-primary-800">MenaPro</span> helps you find them.
        </p>
      </div>
    </section>
  );
};

export default SectionTwo;
