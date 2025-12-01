import Navbar from "./components/Navbar/nav-bar";
import Hero from "./components/Hero/hero";
import Footer from "./components/Footer/footer";
import SectionTwo from "./components/sections/section-two";
import SectionThree from "./components/sections/section-three";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </>
  );
}
