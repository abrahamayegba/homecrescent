"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useGetPropertiesQuery } from "@/src/generated/graphql";
import { ArrowRight, Bath, BedDouble } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Loader2 from "../loading/Loader2";

const FeaturedHomes = () => {
  const { data, loading } = useGetPropertiesQuery();

  const propertyData = data?.getProperties;
  return (
    <>
      {loading ? (
        <Loader2 />
      ) : (
        <div className=" mx-auto w-5/6 mt-6 py-6">
          <div className=" pl-1 flex flex-row justify-between items-center">
            <div className=" flex items-start flex-col">
              <p className=" font-semibold text-xl text-primary-blue ">
                Featured homes
              </p>
              <p className=" text-primary-blue font-light text-sm text-opacity-70 mt-1">
                Most viewed homes in the last 24 hours
              </p>
            </div>
            <Link href={`/listing?address=${"Lagos"}`}>
              <button className=" flex flex-row gap-x-[10px] px-4 py-2 text-primary-orange bg-white hover:bg-opacity-30 rounded hover:bg-orange-50 border border-primary-orange text-[15px] font-medium">
                See more
                <ArrowRight className=" stroke-[1.5px]" />
              </button>
            </Link>
          </div>
          <Carousel className=" mt-5">
            <CarouselPrevious />
            <CarouselNext />
            <CarouselContent className="-ml-5 pb-1 pl-1">
              {/* {carouselData.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-5 md:basis-1/2 lg:basis-1/4"
              >
                <Link href={`/listing?address=${item.address}&openModal=true`}>
                  <div className="flex flex-col rounded overflow-hidden max-w-[310px] cursor-pointer">
                    <div className="flex-shrink-0">
                      <Image
                        width={310}
                        height={177}
                        className="object-cover rounded-lg w-full h-48"
                        alt="Home"
                        src={item.image}
                      />{" "}
                    </div>
                    <div className="p-2 pb-4 flex flex-col gap-y-1">
                      <p className="font-medium text-[22px] text-primary-blue">
                        {item.price}
                      </p>
                      <div className="flex flex-row gap-x-3 text-[15px] font-light text-primary-blue">
                        <p className="border-r border-gray-300 pr-3">
                          <span className="font-medium">{item.beds}</span> bds
                        </p>
                        <p className="border-r border-gray-300 pr-3">
                          <span className="font-medium">{item.baths}</span> Ba
                        </p>
                        <p className="border-r border-gray-300 pr-3">
                          <span className="font-medium">{item.sqft}</span> sqft
                        </p>
                        <p>{item.status}</p>
                      </div>
                      <p className="text-primary-blue font-light text-[15px]">
                        {item.address}
                      </p>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))} */}
              {propertyData?.map((property) => (
                <CarouselItem
                  key={property?.id}
                  className="pl-5 md:basis-1/2 lg:basis-1/4"
                >
                  <Link
                    href={`/listing?address=${property?.propertyDetail?.address}&openModal=true`}
                  >
                    <div className="flex flex-col rounded overflow-hidden max-w-[310px] cursor-pointer">
                      <div className="flex-shrink-0">
                        <Image
                          width={310}
                          height={177}
                          className="object-cover rounded-lg w-full h-48"
                          alt="Home"
                          src={
                            property?.propertiesMedia?.find(
                              (media) =>
                                media?.propertyMediaCategory?.mediaCategory ===
                                "Banner"
                            )?.mediaUrl!
                          }
                        />
                      </div>
                      <div className="p-2 pb-4 flex flex-col gap-y-1">
                        <p className="font-medium text-[22px] text-primary-blue">
                          ₦{property?.price?.toLocaleString()}/mo
                        </p>
                        <div className="flex flex-row gap-x-3 text-[15px] font-light text-primary-blue">
                          <p className="border-r border-gray-300 pr-2 flex flex-row">
                            <span className="font-medium flex flex-row items-center gap-x-2 mr-1">
                              <BedDouble className=" w-4 h-4" />
                              {property?.propertyDetail?.bedrooms}
                            </span>
                            {property?.propertyDetail?.bedrooms === 1
                              ? "bd"
                              : "bds"}
                          </p>
                          <p className="border-r border-gray-300 pr-2 flex flex-row">
                            <span className="font-medium flex flex-row items-center gap-x-2 mr-1">
                              <Bath className=" w-4 h-4" />
                              {property?.propertyDetail?.bathrooms}
                            </span>
                            {property?.propertyDetail?.bathrooms === 1
                              ? "ba"
                              : "bas"}
                          </p>
                          <p className=" pr-1">
                            <span className="font-medium">
                              {property?.propertyDetail?.sizeSqft?.toLocaleString()}
                            </span>{" "}
                            sqft
                          </p>
                        </div>
                        <p className="text-primary-blue font-light text-[15px] capitalize overflow-hidden overflow-ellipsis whitespace-nowrap">
                          {property?.propertyDetail?.address}
                        </p>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      )}
    </>
  );
};

export default FeaturedHomes;
