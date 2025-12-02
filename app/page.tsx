import Hero from "./components/Hero/hero";
import HowItWorks from "./components/HowItWorks/how-it-works";
import Footer from "./components/Footer/footer";
import SectionTwo from "./components/sections/section-two";
import SectionThree from "./components/sections/section-three";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionTwo />
      <SectionThree />
      <HowItWorks />
      <Footer />
    </>
  );
}
