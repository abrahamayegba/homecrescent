import React, { useState } from "react";
import Homecrescentlogo from "../logos/Homecrescentlogo";
import {
  Ban,
  ChevronDown,
  ChevronLeft,
  ChevronUp,
  Heart,
  Share,
} from "lucide-react";
import Image from "next/image";
import FullScreenViewer from "./FullScreenViewer";
import { useRouter } from "next/navigation";

interface Props {
  onClose: () => void;
}
const HomeModalDetails: React.FC<Props> = ({ onClose }) => {
  const images = [
    "/home1.jpg",
    "/home2.jpg",
    "/home3.jpg",
    "/home4.jpg",
    "/home5.jpg",
  ];
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const [showFullScreenViewer, setShowFullScreenViewer] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setShowFullScreenViewer(true);
  };

  const handleCloseFullScreenViewer = () => {
    setShowFullScreenViewer(false);
  };
  return (
    <>
      <div className=" px-[32px] flex flex-col">
        <div className=" flex flex-row justify-between h-[72px] items-center sticky top-0 bg-white">
          <button
            onClick={onClose}
            className=" focus:outline-none flex items-center gap-x-2 text-[15px] text-primary-blue"
          >
            <ChevronLeft />
            Back to search
          </button>
          <Homecrescentlogo />
          <div className=" flex items-center gap-x-6 text-primary-blue">
            <button className=" flex gap-x-2 font-light text-[15px] items-center">
              <Heart className=" stroke-[1.5px]" /> Save
            </button>
            <button className=" flex gap-x-2 font-light text-[15px] items-center">
              <Share className=" stroke-[1.5px]" /> Share
            </button>
            <button className=" flex gap-x-2 font-light text-[15px] items-center">
              <Ban className=" stroke-[1.5px]" /> Hide
            </button>
          </div>
        </div>
        {/* <div className="flex flex-row gap-x-2 h-[389px]">
          <div className="w-1/2">
            <Image
              src="/home1.jpg"
              className="overflow-clip"
              width={586}
              height={445}
              alt="Your image"
              onClick={() => handleImageClick(0)}
            />
          </div>
          <div className="w-1/2 grid grid-cols-2 grid-rows-2 gap-2 overflow-clip">
            {images.slice(1, 5).map((imageUrl, index) => (
              <div key={index} className="w-full h-1/4">
                <Image
                  width={289}
                  height={215}
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  onClick={() => handleImageClick(index + 1)}
                />
              </div>
            ))}
          </div>
        </div> */}
        <div className="grid grid-cols-2 gap-x-2">
          <div className="w-full">
            <Image
              src="/home3.jpg"
              className="overflow-clip object-cover"
              width={590}
              height={445}
              alt="Your image"
              onClick={() => handleImageClick(0)}
            />
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-x-[6px] gap-y-[6px] overflow-clip">
            {images.slice(1, 5).map((imageUrl, index) => (
              <div key={index} className="w-full h-full">
                <Image
                  width={289}
                  height={200}
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  onClick={() => handleImageClick(index + 1)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className=" flex flex-row gap-x-[46px] justify-between w-full">
          <div className=" flex flex-col w-[72%] border-b ">
            <p className=" text-start text-sm font-light mt-2 text-primary-blue">
              Listed by: Madeline Vujovich, Summit Properties NW LLC,
              425-451-3342
            </p>
            <div className=" flex flex-row justify-between mt-6 text-primary-blue">
              <div>
                <p className=" text-start font-semibold text-[32px]">
                  $300,000
                </p>
                <p className=" text-xl font-light">
                  1035 NE 98th St UNIT B, Seattle, WA 98115
                </p>
              </div>
              <div className=" flex flex-row justify-between gap-x-[40px]">
                <div className=" flex flex-col">
                  <p className=" text-start font-semibold text-[32px]">2</p>
                  <p className=" text-xl font-light">Beds</p>
                </div>
                <div className=" flex flex-col">
                  <p className=" text-start font-semibold text-[32px]">2</p>
                  <p className=" text-xl font-light">Baths</p>
                </div>
                <div className=" flex flex-col">
                  <p className=" text-start font-semibold text-[32px]">1200</p>
                  <p className=" text-xl font-light">Sqft</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[28%] border flex flex-col border-gray-300 gap-y-4 rounded-xl p-[20px] mt-6">
            <button className=" w-full font-medium bg-primary-blue text-white px-4 py-3 rounded-md">
              Book Inspection
            </button>
            <button className=" w-full font-medium bg-white text-primary-blue border border-primary-blue px-4 py-3 rounded-md">
              Contact agent
            </button>
          </div>
        </div>
        <div className=" w-[75%] text-primary-blue mb-4">
          <p className=" text-start font-medium text-[28px]  mt-4">Overview</p>
          <div className={`${isOpen ? "" : "h-[78px]"} overflow-hidden`}>
            <p className="text-left">
              Imagine living within a fabulous neighborhood close to everything
              in a midcentury RAMBLER situated in a serene setting. Vaulted
              ceilings, original hardwoods, large windows & excellent “bones”
              make this home a perfect canvas for your updates & creativity. One
              bdrm set up as an art studio w/skylight & French doors – a great
              WFH option. Set back from the street, the fully fenced shy ¼ acre
              features a tapestry of lawn+garden space, mature plantings,
              covered patio & hot tub. This home is ready for play days,
              barbeques or quiet reflection enjoying the sounds of nature.
              Excellent storage options & RV parking. Updates include: windows,
              French+sliding doors, appliances, sheetrock, int paint,
              insulation, tankless water heater+more. Pre-inspected.
            </p>
          </div>
          <button
            onClick={toggleOpen}
            className="text-primary-blue hover:underline focus:outline-none flex items-center"
          >
            {isOpen ? (
              <>
                <ChevronUp className="mr-1" /> Hide
              </>
            ) : (
              <>
                <ChevronDown className="mr-1" /> Show more
              </>
            )}
          </button>
        </div>
        <div className=" w-[60%] flex flex-row gap-x-4 mb-10 z-[10]">
          <button className=" w-full font-medium bg-primary-orange text-white px-4 py-3 rounded-md">
            Purchase Property
          </button>
          <button className=" w-full font-medium text-primary-orange bg-white border border-primary-orange px-4 py-3 rounded-md">
            Apply for loan
          </button>
        </div>
      </div>
      {showFullScreenViewer && (
        <FullScreenViewer
          images={images}
          selectedImageIndex={selectedImageIndex}
          onClose={handleCloseFullScreenViewer}
        />
      )}
    </>
  );
};

export default HomeModalDetails;
