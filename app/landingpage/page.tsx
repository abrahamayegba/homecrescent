import Topbar from "@/components/Topbar";
import React from "react";
import Footer from "@/components/Footer";
import Hero from "@/components/landingpage/Hero";
import Recommendations from "@/components/landingpage/Recommendations";
import FAQs from "@/components/landingpage/FAQs";
import Newsletter from "@/components/landingpage/Newsletter";

const LandingPage = () => {
  return (
    <div>
      <Topbar />
      <Hero />
      <Recommendations />
      <FAQs />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default LandingPage;
