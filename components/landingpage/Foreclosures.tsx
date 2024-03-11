import React from "react";
import Image from "next/image";

const Foreclosures = () => {
  return (
    <div className="overflow-hidden bg-white pt-16 pb-6">
      <div className="mx-auto w-5/6">
        <div className="grid grid-cols-1 gap-x-20 gap-y-16 sm:gap-y-20 lg:grid-cols-2 items-center">
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden sm:mx-auto sm:max-w-2xl rounded-md lg:max-w-none">
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <div className="w-screen overflow-hidden">
                  <Image
                    src="/foreclosure.jpg"
                    width={600}
                    height={600}
                    alt="Project"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 md:px-0 lg:pr-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <p className="mt-2 font-bold tracking-tight text-gray-900 leading-[44px] text-4xl">
                Find Your Home Amongst Foreclosures
              </p>
              <p className="mt-6 text-base leading-8 text-gray-600">
                Discover incredible opportunities among our latest foreclosure
                listings. From budget-friendly urban apartments to spacious
                suburban homes, explore a diverse range of properties waiting to
                be claimed. Say goodbye to endless searching and let us guide
                you to your perfect home among our foreclosure deals.
              </p>
              <button className="py-3.5 px-9 font-medium mt-6 bg-primary-orange rounded-md text-white">
                View Foreclosures
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foreclosures;
