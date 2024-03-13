"use client";
import React, { useState } from "react";
import HomeCard from "./HomeCard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const homes = [
  {
    image: "/home1.jpg",
    baths: 2,
    beds: 2,
    sqft: "3000",
    status: "active",
    price: 250000,
    address: "123 Main St",
  },
  {
    image: "/home2.jpg",
    baths: 3,
    beds: 2,
    sqft: "3000",
    status: "active",
    price: 350000,
    address: "456 Elm St",
  },
  {
    image: "/home3.jpg",
    baths: 3,
    beds: 2,
    sqft: "3000",
    status: "active",
    price: 350000,
    address: "456 Elm St",
  },
  {
    image: "/home1.jpg",
    baths: 3,
    beds: 2,
    sqft: "3000",
    status: "active",
    price: 350000,
    address: "456 Elm St",
  },
  {
    image: "/home4.jpg",
    baths: 3,
    beds: 2,
    sqft: "3000",
    status: "active",
    price: 350000,
    address: "456 Elm St",
  },
  {
    image: "/home3.jpg",
    baths: 3,
    beds: 2,
    sqft: "3000",
    status: "active",
    price: 350000,
    address: "456 Elm St",
  },
  {
    image: "/home5.jpg",
    baths: 3,
    beds: 2,
    sqft: "3000",
    status: "active",
    price: 350000,
    address: "456 Elm St",
  },
  {
    image: "/home1.jpg",
    baths: 3,
    beds: 2,
    sqft: "3000",
    status: "active",
    price: 350000,
    address: "456 Elm St",
  },
  {
    image: "/home4.jpg",
    baths: 3,
    beds: 2,
    sqft: "3000",
    status: "active",
    price: 350000,
    address: "456 Elm St",
  },
  {
    image: "/home3.jpg",
    baths: 3,
    beds: 2,
    sqft: "3000",
    status: "active",
    price: 350000,
    address: "456 Elm St",
  },
  {
    image: "/home5.jpg",
    baths: 3,
    beds: 2,
    sqft: "3000",
    status: "active",
    price: 350000,
    address: "456 Elm St",
  },
];
const Homelist = () => {
  const [value, setValue] = useState("Homes for You");
  return (
    <>
      <div className=" flex flex-col mt-[155px] px-[40px] w-full text-primary-blue mb-4">
        <p className=" font-semibold text-2xl ">Real Estate & Homes For Sale</p>
        <div className=" flex justify-between items-center">
          <p className=" font-medium mt-1">13 results</p>
          <DropdownMenu>
            <DropdownMenuTrigger className=" flex flex-row items-center text-primary-orange focus:outline-none">
              Sort: {value}
              <ChevronDown className=" w-5 h-5 ml-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className=" min-w-[180px]">
              <DropdownMenuItem
                onClick={() => setValue("Homes for You")}
                className=" py-2 text-base font-light cursor-pointer"
              >
                Homes for You
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setValue("Price (High to Low)")}
                className=" py-2 text-base font-light cursor-pointer"
              >
                Price (High to Low)
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setValue("Price (Low to High)")}
                className=" py-2 text-base font-light cursor-pointer"
              >
                Price (Low to High)
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setValue("Newest")}
                className=" py-2 text-base font-light cursor-pointer"
              >
                Newest
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-primary-blue lg:grid-cols-4  overflow-auto gap-x-3 gap-y-1 justify-between w-full px-[40px]">
        {homes.map((home, index) => (
          <div key={index} className="w-full">
            <HomeCard
              beds={home?.beds}
              sqft={home?.sqft}
              status={home?.status}
              price={home?.price}
              baths={home?.baths}
              image={home?.image}
              address={home?.address}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Homelist;
