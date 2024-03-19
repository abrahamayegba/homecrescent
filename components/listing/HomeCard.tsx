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
import { Ban, Heart, Share } from "lucide-react";
import HomeModal from "../modals/HomeModal";
import useModal from "../hooks/useModal";
import { useRouter, useSearchParams } from "next/navigation";

interface HomecardProps {
  image: string;
  baths: number;
  beds: number;
  sqft: string;
  status: string;
  price: number;
  address: string;
}

const HomeCard: React.FC<HomecardProps> = ({
  image,
  baths,
  price,
  beds,
  sqft,
  status,
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
            className="object-cover rounded-lg w-full h-48"
            alt="Home"
            src={image}
          />
        </div>
        <div className="p-2 px-0 pb-4 flex flex-col gap-y-1">
          <div className=" flex w-full justify-between items-center">
            <p className="font-medium text-[22px] text-primary-blue">
              ₦{price.toLocaleString()}
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
          <div className="flex flex-row gap-x-3 text-[15px] font-light text-primary-blue">
            <p className="border-r border-gray-300 pr-3">
              <span className="font-medium">{beds}</span> bds
            </p>
            <p className="border-r border-gray-300 pr-3">
              <span className="font-medium">{baths} ba</span>
            </p>
            <p className="border-r border-gray-300 pr-3">
              <span className="font-medium">{sqft}</span> sqft
            </p>
            <p className=" capitalize">{status}</p>
          </div>
          <p className="text-primary-blue font-light text-[15px]">{address}</p>
        </div>
      </div>
      <HomeModal open={isOpen} openModal={openModal} onClose={closeModal} />
    </>
  );
};

export default HomeCard;
