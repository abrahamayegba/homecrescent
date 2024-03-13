"use client";
import React, { useState } from "react";
import { Heart, Menu } from "lucide-react";
import Mobilesheet from "./sheets/Mobilesheet";
import Homecrescentlogo from "./logos/Homecrescentlogo";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import AuthModal from "./modals/Authmodal";
import useModal from "./hooks/useModal";
import Link from "next/link";
import ListingNav from "./ListingNav";

const ListingTopbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleCloseMobileSheet = () => {
    setMobileMenuOpen(false);
  };

  const { openModal, closeModal, isOpen } = useModal();

  return (
    <>
      <div className=" bg-white">
        <header className=" inset-x-0 top-0 z-50 fixed">
          <nav
            className="flex items-center border-b bg-white border-gray-300 justify-between p-6 lg:px-[40px] min-h-[80px]"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Homecrescentlogo />
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <HoverCard openDelay={500} closeDelay={300}>
                <HoverCardTrigger className=" text-base cursor-pointer leading-6 hover:underline hover:text-blue-800 text-primary-blue">
                  Buy
                </HoverCardTrigger>
                <HoverCardContent className=" w-screen mt-6 rounded-none p-6 lg:px-[80px] py-5 flex flex-row">
                  <div className=" border-r border-r-gray-300 pr-7 py-2">
                    <p className=" font-medium text-sm mb-4">Homes for sale</p>
                    <div className=" flex flex-row text-primary-blue text-sm gap-x-8">
                      <div className=" flex gap-y-4 flex-col">
                        <p>Recent sales</p>
                        <p>All homes</p>
                      </div>
                      <div className=" flex gap-y-4 flex-col">
                        <p>New construction</p>
                        <p>Open houses</p>
                      </div>
                    </div>
                  </div>
                  <div className=" pl-7 py-2">
                    <p className=" font-medium text-sm mb-4">Resources</p>
                    <div className=" flex text-primary-blue text-sm ">
                      <div className=" flex gap-y-4 flex-col">
                        <p>Buying guide</p>
                        <p>Find an agent</p>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <HoverCard openDelay={500} closeDelay={300}>
                <HoverCardTrigger className=" cursor-pointer leading-6 hover:underline hover:text-blue-800 text-primary-blue">
                  Plan
                </HoverCardTrigger>
                <HoverCardContent className=" w-screen mt-6 rounded-none p-6 lg:px-[80px] py-5 flex flex-row">
                  <div className=" border-r border-r-gray-300 pr-7 py-2">
                    <p className=" font-medium text-sm mb-4">Homes for sale</p>
                    <div className=" flex flex-row text-primary-blue text-sm gap-x-8">
                      <div className=" flex gap-y-4 flex-col">
                        <p>Recent sales</p>
                        <p>All homes</p>
                      </div>
                      <div className=" flex gap-y-4 flex-col">
                        <p>New construction</p>
                        <p>Open houses</p>
                      </div>
                    </div>
                  </div>
                  <div className=" pl-7 py-2">
                    <p className=" font-medium text-sm mb-4">Resources</p>
                    <div className=" flex text-primary-blue text-sm ">
                      <div className=" flex gap-y-4 flex-col">
                        <p>Buying guide</p>
                        <p>Find an agent</p>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <button
                disabled
                className=" cursor-not-allowed disabled:opacity-50 leading-6 hover:text-blue-800 text-primary-blue"
              >
                Invest
              </button>
            </div>
            <div className="hidden lg:flex lg:flex-1 gap-x-5 lg:justify-end">
              <button className=" flex gap-x-1.5 text-primary-blue items-center hover:underline">
                Saved <Heart className=" text-primary-blue w-[18px] h-[18px]" />
              </button>
              <button
                onClick={openModal}
                className=" leading-6 hover:underline text-primary-orange"
              >
                Sign In
              </button>
            </div>
          </nav>
          <ListingNav />
          <Mobilesheet open={mobileMenuOpen} onClose={handleCloseMobileSheet} />
        </header>
      </div>
      <AuthModal openModal={openModal} open={isOpen} onClose={closeModal} />
    </>
  );
};

export default ListingTopbar;
