import Topbar from "@/components/Topbar";
import React from "react";
import Footer from "@/components/Footer";
import Hero from "@/components/landingpage/Hero";
import FAQs from "@/components/landingpage/FAQs";
import Newsletter from "@/components/landingpage/Newsletter";
import Projects from "@/components/landingpage/Projects";
import Newlylisted from "@/components/landingpage/Newlylisted";
import Foreclosures from "@/components/landingpage/Foreclosures";
import FeaturedHomes from "@/components/landingpage/FeaturedHomes";

const LandingPage = () => {
  return (
    <div>
      <Topbar />
      <Hero />
      <FeaturedHomes />
      <Newlylisted />
      <Projects />
      <Foreclosures />
      <FAQs />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default LandingPage;
