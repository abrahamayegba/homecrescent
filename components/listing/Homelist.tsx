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
import { useGetPropertiesQuery } from "@/src/generated/graphql";
import Loader2 from "../loading/Loader2";

const Homelist = () => {
  const [value, setValue] = useState("Homes for You");

  const { data, loading } = useGetPropertiesQuery();

  const propertyData = data?.getProperties;
  const numberOfSingleProperties = propertyData?.length;

  return (
    <>
      {loading ? (
        <Loader2 />
      ) : (
        <>
          <div className=" flex flex-col mt-[155px] px-[40px] w-full text-primary-blue mb-4">
            <p className=" font-semibold text-2xl ">
              Real Estate & Homes For Sale
            </p>
            <div className=" flex justify-between items-center">
              <p className=" font-medium mt-1">
                {" "}
                {numberOfSingleProperties} results
              </p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-primary-blue lg:grid-cols-3 2xl:grid-cols-4 overflow-auto gap-x-5 gap-y-1 justify-between w-full px-[40px] mb-8">
            {propertyData?.map((property) => (
              <div key={property?.id} className="w-full">
                <HomeCard
                  beds={property?.propertyDetail?.bedrooms!}
                  sqft={property?.propertyDetail?.sizeSqft!}
                  price={property?.price!}
                  baths={property?.propertyDetail?.bathrooms!}
                  propertyMedia={property?.propertiesMedia}
                  address={property?.propertyDetail?.address!}
                  city={property?.city?.cityName!}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Homelist;
