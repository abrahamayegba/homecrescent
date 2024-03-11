import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="overflow-hidden bg-white pt-20 pb-12">
      <div className="mx-auto w-5/6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 items-center">
          <div className="px-6 md:px-0 lg:pr-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <p className=" font-bold tracking-tight leading-[44px] text-gray-900 text-4xl">
                Reserve A Home While You Get Ready
              </p>
              <p className="mt-6 text-base leading-8 text-gray-600">
                Explore our latest ongoing developments and reserve your dream
                home effortlessly. From modern urban apartments to serene
                suburban villas, discover a diverse range of properties tailored
                to fit your lifestyle and preferences. Say goodbye to endless
                searching and let us guide you to your perfect home in our
                exciting projects.
              </p>
              <button className="py-3.5 px-9 font-medium mt-6 bg-primary-orange rounded-md text-white">
                View Projects
              </button>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden sm:mx-auto sm:max-w-2xl rounded-md lg:max-w-none">
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <div className="w-screen overflow-hidden">
                  <Image
                    src="/project.jpg"
                    width={600}
                    height={600}
                    alt="Project"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
