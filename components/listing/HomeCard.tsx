"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Dotssvg from "../icons/Dotssvg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Ban, Bath, BedDouble, Heart, Share } from "lucide-react";
import HomeModal from "../modals/HomeModal";
import useModal from "../hooks/useModal";
import { useRouter, useSearchParams } from "next/navigation";

interface PropertyMedia {
  __typename?: string | undefined;
  id?: string | null | undefined;
  mediaUrl?: string | null | undefined;
  propertyMediaCategory?:
    | {
        __typename?: string | undefined;
        mediaCategory?: string | null | undefined;
      }
    | null
    | undefined;
}

interface HomecardProps {
  propertyMedia: (PropertyMedia | null)[] | null | undefined;
  baths: number;
  city: string;
  beds: number;
  sqft: number;
  price: number;
  address: string;
}

const HomeCard: React.FC<HomecardProps> = ({
  propertyMedia,
  baths,
  city,
  price,
  beds,
  sqft,
  address,
}) => {
  const [isSaved, setIsSaved] = useState(false);
  const router = useRouter();
  const { openModal, isOpen, closeModal } = useModal();
  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  const modalParams = useSearchParams();
  const isModalOpen = modalParams.get("openModal");

  useEffect(() => {
    if (isModalOpen === "true") {
      event?.preventDefault();
      openModal();
      router.replace(`/listing?address=${encodeURIComponent(address)}`);
    }
  });
  useEffect(() => {
    const handleEscapeKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscapeKeyPress);
    return () => {
      document.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, [closeModal]);

  const bannerMedia = propertyMedia?.find(
    (media) => media?.propertyMediaCategory?.mediaCategory === "Banner"
  );
  const bannerMediaUrl = bannerMedia?.mediaUrl || "";

  return (
    <>
      <div
        onClick={openModal}
        className="flex flex-col rounded overflow-hidden cursor-pointer relative"
      >
        <button
          onClick={handleSave}
          className="absolute top-2 text-white right-2"
        >
          <Heart className={` stroke-[3px] ${isSaved ? " fill-white" : ""}`} />
        </button>
        <div className=" flex flex-1">
          <Image
            width={600}
            height={177}
            className="object-cover rounded-lg w-full h-60"
            alt="Home"
            src={bannerMediaUrl}
          />
        </div>
        <div className="p-2 px-1 pb-4 flex flex-col gap-y-1">
          <div className=" flex w-full justify-between items-center">
            <p className="font-medium text-[22px] text-primary-blue">
              ₦{price.toLocaleString()}/mo
            </p>
            <DropdownMenu>
              <DropdownMenuTrigger className=" focus:outline-none">
                <span>
                  <Dotssvg />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem className=" flex gap-x-2 hover:cursor-pointer items-center font-light text-base text-primary-blue">
                  <Heart className=" w-[18px] h-[18px]" />
                  Save
                </DropdownMenuItem>
                <DropdownMenuItem className=" flex gap-x-2 hover:cursor-pointer font-light text-base text-primary-blue">
                  <Ban className=" w-[18px] h-[18px]" />
                  Hide
                </DropdownMenuItem>
                <DropdownMenuItem className=" flex gap-x-2 hover:cursor-pointer font-light text-base text-primary-blue">
                  <Share className=" w-[18px] h-[18px]" />
                  Share
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex flex-row gap-x-4 text-[15px] font-light text-primary-blue">
            <p className="border-r border-gray-300 pr-2 flex flex-row">
              <span className="font-medium flex flex-row items-center gap-x-2 mr-1">
                <BedDouble className=" w-4 h-4" />
                {beds}
              </span>
              {beds === 1 ? "bedroom" : "bedrooms"}
            </p>
            <p className="border-r border-gray-300 pr-2 flex flex-row">
              <span className="font-medium flex flex-row items-center gap-x-2 mr-1">
                <Bath className=" w-4 h-4" />
                {baths}
              </span>
              {baths === 1 ? "bathroom" : "bathrooms"}
            </p>
            <p>
              <span className="font-medium">{sqft.toLocaleString()}</span> sqft
            </p>
          </div>
          <p className="text-primary-blue font-light text-[15px] capitalize overflow-hidden overflow-ellipsis whitespace-nowrap">
            {address}
          </p>
          <p className="text-primary-blue font-light text-[15px] capitalize overflow-hidden overflow-ellipsis whitespace-nowrap">
            {city}
          </p>
        </div>
      </div>
      <HomeModal open={isOpen} openModal={openModal} onClose={closeModal} />
    </>
  );
};

export default HomeCard;
