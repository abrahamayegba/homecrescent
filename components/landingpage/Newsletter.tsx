import React from "react";

const Newsletter = () => {
  return (
    <div className="py-16 sm:py-24 lg:py-32 w-5/6 mx-auto mb-40 mt-12 relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-2xl"
        style={{ backgroundImage: "url('/homecrescent.webp')" }}
      >
        <div className="bg-primary-blue rounded-2xl bg-opacity-95 h-full flex items-center">
          <div className="mx-auto w-5/6 items-center flex gap-x-10">
            <div className="text-3xl w-1/2 font-bold tracking-tight text-white sm:text-4xl">
              <h2 className="inline sm:block lg:inline xl:block mb-2">
                Want news and updates?
              </h2>{" "}
              <p className="inline sm:block lg:inline xl:block">
                Sign up for our newsletter.
              </p>
            </div>
            <form className=" w-1/2 lg:pt-2">
              <div className="flex gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto focus:outline-none rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-primary-orange px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm "
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                We care about your data. Read our{" "}
                <a href="#" className="font-semibold text-white">
                  privacy&nbsp;policy
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
