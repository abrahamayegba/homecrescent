import Link from "next/link";
import React from "react";
import Homecrescentlogo from "./logos/Homecrescentlogo";
import Filtersvg2 from "./icons/Filtersvg2";

interface TopnavProps {
  scrollPosition: any;
}
const Topnav: React.FC<TopnavProps> = ({ scrollPosition }) => {
  const showTopNav = scrollPosition > 390;
  return (
    <nav
      className={`top-0 bg-white h-16 flex gap-x-4 border-b border-b-gray-300 items-center px-8 py-4 fixed w-full z-10 transition-opacity duration-300 ${
        showTopNav ? "opacity-100" : "opacity-0"
      }`}
    >
      <Link href="/" className="-m-1.5 p-1.5 w-[338px]">
        <span className="sr-only">Your Company</span>
        <Homecrescentlogo />
      </Link>
      <div className="flex-grow flex relative items-center justify-start pl-5">
        <input
          type="text"
          placeholder="Enter an address, or city"
          className=" py-2 max-h-[30px] border font-light text-primary-blue border-gray-300 px-4 rounded bg-white w-full max-w-2xl"
        />
        <Filtersvg2 />
      </div>
      <div></div>
    </nav>
  );
};

export default Topnav;
