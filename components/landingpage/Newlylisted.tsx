import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carouselData = [
  {
    id: 1,
    image: "/home1.jpg",
    price: "$230,000",
    beds: 3,
    baths: 2,
    sqft: "1,650",
    status: "Active",
    address: "5 Balogun Street, Lagos, Nigeria",
  },
  {
    id: 2,
    image: "/home2.jpg",
    price: "$340,000",
    beds: 3,
    baths: 2,
    sqft: "1,650",
    status: "Active",
    address: "5 Balogun Street, Lagos, Nigeria",
  },
  {
    id: 3,
    image: "/home3.jpg",
    price: "$320,000",
    beds: 3,
    baths: 2,
    sqft: "1,650",
    status: "Active",
    address: "5 Balogun Street, Lagos, Nigeria",
  },
  {
    id: 4,
    image: "/home4.jpg",
    price: "$900,000",
    beds: 3,
    baths: 2,
    sqft: "1,650",
    status: "Active",
    address: "5 Balogun Street, Lagos, Nigeria",
  },
  {
    id: 5,
    image: "/home2.jpg",
    price: "$30,230,000",
    beds: 3,
    baths: 2,
    sqft: "1,650",
    status: "Active",
    address: "5 Balogun Street, Lagos, Nigeria",
  },
  {
    id: 6,
    image: "/home2.jpg",
    price: "$1,200,000",
    beds: 3,
    baths: 2,
    sqft: "1,650",
    status: "Active",
    address: "5 Balogun Street, Lagos, Nigeria",
  },
];

const Newlylisted = () => {
  return (
    <div className=" mx-auto w-5/6 mt-6 py-3">
      <div className=" pl-1">
        <p className=" font-semibold text-xl text-primary-blue ">
          Newly listed homes in Lagos
        </p>
        <p className=" text-primary-blue font-light text-sm text-opacity-70 mt-1">
          Check out new homes in your location
        </p>
      </div>
      <Carousel className=" mt-3">
        <CarouselPrevious />
        <CarouselNext />
        <CarouselContent className="-ml-5 pb-1 pl-1">
          {carouselData.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-5 md:basis-1/2 lg:basis-1/4"
            >
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
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Newlylisted;
