import React from "react";
import group from "../../../public/images/group.svg";
import Image from "next/image";

const features = [
  {
    title: "They Listen, Then They Deliver",
    description:
      "MenaPro Agents excel at understanding what you're really looking for not just number of bedrooms, but the lifestyle and future you're building in the UAE. They ask the right questions, listen carefully, and then match you with properties that actually fit.",
  },
  {
    title: "You Stay in Control, They Handle the Details",
    description:
      "Your MenaPro Agent empowers you with complete information and honest advice, then lets you make the decision that's right for you. No pushy sales tactics, no artificial urgency.",
  },
  {
    title: "UAE Real Estate Is What They Do, Full Time",
    description:
      "Every MenaPro Agent is a RERA-certified professional who specializes in the UAE market. Real estate isn't a side hustle for them, it's their career and passion.",
  },
  {
    title: "Backed by Mena Homes, Reliability You Can Trust",
    description:
      "MenaPro Agents aren't operating in the shadows. They're verified professionals working within the Mena Homes ecosystem, which means you get both personal service and institutional trust.",
  },
];

const sectionThree = () => {
  return (
    <section className="my-56 max-w-5xl mx-auto container-m3">
      <h1 className="text-primary-800 font-bold text-center text-[35px] text-shadow-[1px_2px_2px_0px_rgba(56,78,113,45)]">
        How MenaPro Agents Make Everything Easier
      </h1>
      <div className="text-center">
        <p className="text-md text-text-base-text">
          MenaPro isn&apos;t just a badge it&apos;s proof that an agent
          consistently delivers the kind of service that makes
        </p>
        <p className="text-md text-text-base-text">
          your property search actually enjoyable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14">
        <div className="flex flex-col gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-base-grey p-10 rounded-lg">
              <h3 className="text-primary-800 mb-3 font-semibold">
                {feature.title}
              </h3>
              <p className="text-base-text">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="h-full flex items-center">
          <Image
            src={group}
            width={100}
            height={100}
            alt="group"
            className="w-2/4 md:w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="text-center my-16">
        <p className="text-primary-800 font-semibold text-3xl">Real listings. Fast replies. Agents you can count on.</p>
        <button className="text-base-text-on-color bg-primary-800 rounded-sm px-3 py-2 mt-6">Find Mena Pro Agents</button>
      </div>
    </section>
  );
};

export default sectionThree;
