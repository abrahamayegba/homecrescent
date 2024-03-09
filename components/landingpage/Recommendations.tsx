import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

const carouselData = [
  {
    id: 1,
    image: "/home1.jpg",
    price: "$300,000",
    beds: 3,
    baths: 2,
    sqft: "1,650",
    status: "Active",
    address: "5 Balogun Street, Lagos, Nigeria",
  },
  {
    id: 2,
    image: "/home2.jpg",
    price: "$300,000",
    beds: 3,
    baths: 2,
    sqft: "1,650",
    status: "Active",
    address: "5 Balogun Street, Lagos, Nigeria",
  },
  {
    id: 3,
    image: "/home3.jpg",
    price: "$300,000",
    beds: 3,
    baths: 2,
    sqft: "1,650",
    status: "Active",
    address: "5 Balogun Street, Lagos, Nigeria",
  },
  {
    id: 4,
    image: "/home4.jpg",
    price: "$300,000",
    beds: 3,
    baths: 2,
    sqft: "1,650",
    status: "Active",
    address: "5 Balogun Street, Lagos, Nigeria",
  },
  {
    id: 5,
    image: "/home2.jpg",
    price: "$300,000",
    beds: 3,
    baths: 2,
    sqft: "1,650",
    status: "Active",
    address: "5 Balogun Street, Lagos, Nigeria",
  },
  {
    id: 6,
    image: "/home2.jpg",
    price: "$300,000",
    beds: 3,
    baths: 2,
    sqft: "1,650",
    status: "Active",
    address: "5 Balogun Street, Lagos, Nigeria",
  },
];

const Recommendations = () => {
  return (
    <div className=" mx-auto w-4/5 mt-6 py-6">
      <div className=" pl-1">
        <p className=" font-semibold text-xl text-primary-blue ">
          Featured homes
        </p>
        <p className=" text-primary-blue font-light text-sm text-opacity-70 mt-1">
          Most viewed homes in the last 24 hours
        </p>
      </div>
      <Carousel className=" mt-3">
        <CarouselPrevious />
        <CarouselNext />
        <CarouselContent className="-ml-1 pb-1 pl-1">
          {carouselData.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-3 md:basis-1/2 lg:basis-1/3"
            >
              <div className="flex flex-col rounded overflow-hidden max-w-[345px] shadow1 cursor-pointer">
                <div className="flex-shrink-0">
                  <Image
                    width={345}
                    height={177}
                    className="object-cover w-full h-48"
                    alt="Home"
                    src={item.image}
                  />{" "}
                </div>
                <div className="p-2 pb-4 flex flex-col gap-y-1">
                  <p className="font-medium text-[22px] text-primary-blue">
                    {item.price}
                  </p>
                  <div className="flex flex-row gap-x-3 text-sm font-light text-primary-blue">
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
                  <p className="text-primary-blue font-light text-sm">
                    {item.address}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Recommendations;
