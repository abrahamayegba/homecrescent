"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Filtersvg from "@/components/icons/Filtersvg";
import Topnav from "../Topnav";
import Link from "next/link";

const generateRandomAddresses = () => {
  const streets = [
    "1A Allen Avenue",
    "23 Broad Street",
    "5 Balogun Street",
    "10 Adeniran Ogunsanya Street",
    "15 Adeola Hopewell Street",
  ];
  const states = ["Lagos"];
  const countries = ["Nigeria"];

  const addresses = [];
  for (let i = 0; i < 5; i++) {
    // Generate 5 random addresses
    const streetIndex = Math.floor(Math.random() * streets.length);
    const stateIndex = Math.floor(Math.random() * states.length);
    const countryIndex = Math.floor(Math.random() * countries.length);

    const address = `${streets[streetIndex]}, ${states[stateIndex]}, ${countries[countryIndex]}`;
    addresses.push(address);
  }
  return addresses;
};

const suggestions = generateRandomAddresses();

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
        setSearchTerm("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowSuggestions, setSearchTerm]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    setShowSuggestions(value.length > 0 && filteredSuggestions.length > 0); // Only show suggestions if input has value and there are filtered suggestions
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Topnav scrollPosition={scrollPosition} />
      <div id="hero-section" className=" mt-[80px]">
        <div className="relative">
          <Image
            className="absolute inset-0 h-full w-full"
            src="/hero3.jpg"
            width={1200}
            height={600}
            alt="hero"
          />
          <div className="mx-auto max-w-2xl lg:py-[170px] relative">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-6 tracking-tight">
                Helping You Get Home
              </h1>
              <div
                id="search-bar"
                className="relative flex justify-center items-center"
              >
                <input
                  type="text"
                  className="border border-gray-300 w-[700px] placeholder:font-light placeholder:text-primary-blue placeholder:text-opacity-70 placeholder:text-base text-primary-blue rounded pl-4 py-6 focus:outline-none focus:border-blue-500"
                  placeholder="Enter an address, or city"
                  value={searchTerm}
                  onChange={handleInputChange}
                />
                <Filtersvg />
              </div>
              {filteredSuggestions.length > 0 && showSuggestions && (
                <div ref={componentRef}>
                  <ul className="absolute z-[20] bg-white border border-gray-300 rounded mt-1 w-full max-w-[700px]">
                    {filteredSuggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        className="px-4 py-4 text-start cursor-pointer text-primary-blue font-light hover:bg-blue-50 hover:bg-opacity-80"
                      >
                        <Link href={`/listing?address=${suggestion}`}>
                          <button
                            onClick={() => handleSuggestionClick(suggestion)}
                          >
                            {suggestion}
                          </button>
                        </Link>
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
