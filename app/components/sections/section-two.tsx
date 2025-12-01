import Image from "next/image";
import React from "react";
import vector from "../../../public/icons/Vector.svg";
import actual from "../../../public/icons/Vector (1).svg";
import search from "../../../public/icons/magnifying-glass-light (1) 1.svg";
import hand from "../../../public/icons/Vector (2).svg";
import people from "../../../public/icons/Vector (3).svg";
import logo from "../../../public/icons/Mena-logo.png";

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
  return (
    <section className="my-56 max-w-5xl mx-auto container-m3">
      <h1 className="text-primary-800 font-bold text-center text-[35px] text-shadow-[1px_2px_2px_0px_rgba(56,78,113,45)]">
        Your Personal Guide to Stress-Free Property Search
      </h1>
      <div className="text-center">
        <p className="text-md text-text-base-text">
          Finding property in the UAE shouldn&apos;t mean dealing with ghosting
          agents, outdated listings, or last-minute cancellations. That&apos;s
        </p>
        <p className="text-md text-text-base-text">
          why MenaPro Agents earn their badge by consistently putting you first.
        </p>
      </div>

      <div className="mt-20 flex flex-col lg:flex-row items-start gap-16 relative">
        {/* Left Image + Badge */}
        <div className="relative">
          <div className="w-[270px] md:w-80 lg:w-[270px] rounded-3xl overflow-hidden shadow-2xl border-2 border-base">
            <Image
              src="/images/08.webp"
              alt="MenaPro Agent"
              className="w-full h-auto object-cover"
              width={100}
              height={100}
            />
          </div>

          {/* MENA PRO Badge */}
          <div className="w-[250px] h-[100px] right-[-30px] -bottom-8 absolute bg-primary-800 flex items-center justify-center rounded-tl-3xl rounded-br-3xl rounded-bl-sm rounded-tr-sm shadow-xl">
            <Image
              src={logo}
              width={150}
              height={150}
              alt="logo"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="absolute inset-0 pointer-events-none rounded-2xl -z-10" />

          <div className="space-y-4 relative">
            <div>
              {features.map((feature, index) => (
                <>
                  <div>
                    <div
                      key={index}
                      className="relative flex items-start gap-4"
                    >
                      <div className="relative">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-base-white">
                          <Image
                            src={feature.icon}
                            width={22}
                            height={22}
                            alt={feature.title}
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="max-w-md">
                        <h3 className="text-base-text text-xl font-bold">
                          {feature.title}
                        </h3>
                        <p className="text-base-text text-base leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
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
