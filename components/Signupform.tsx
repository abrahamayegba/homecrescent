import Link from "next/link";
import React from "react";
import GoogleIcon from "./logos/GoogleIcon";
import { Checkbox } from "./ui/checkbox";

const Signupform = () => {
  return (
    <form
      // onSubmit={handleSubmit(SignInHandler)}
      className=" flex flex-col mt-[15px] w-full md:gap-y-6 gap-y-4 p-3"
    >
      <div className=" flex flex-col gap-y-[5px]">
        <label
          className=" text-primary-black text-[15px] font-medium text-start"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          required
          className={` w-full px-3 py-[10px] border rounded bg-gray-50 focus:border-blue-500 hover:border-blue-500 font-light `}
          placeholder="Enter email"
          // {...register("email")}
        />
      </div>
      <div className="relative flex flex-col gap-y-[5px]">
        <label
          className="text-primary-black text-[15px] font-medium text-start"
          htmlFor="password"
        >
          Password
        </label>
        <div className=" max-w-[400px] group">
          <input
            required
            className={`w-full px-3 py-[10px] border bg-gray-50 rounded focus:border-blue-500 hover:border-blue-500 font-light `}
            placeholder="Create password"
          />
        </div>
        <div className="flex items-center gap-x-2 mt-5">
          <Checkbox className=" border-gray-300" id="terms" />
          <label
            htmlFor="terms"
            className=" text-primary-blue leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I am a landlord or industry professional
          </label>
        </div>
        <div className=" flex flex-col mt-6">
          <button
            type="submit"
            className={`rounded md:px-[100px] px-[90px] max-w-full md:max-w-[400px] py-[10px]  text-white bg-primary-blue text-lg flex items-center justify-center`}
          >
            Submit
          </button>
        </div>
        <p className=" text-[13px] text-primary-blue font-light mt-2">
          By submitting, I accept Home Crescent’s{" "}
          <span className=" text-blue-600 underline"> terms of use</span>
        </p>
        <div className="flex items-center justify-center my-4">
          <div className="border-b border-gray-300 w-full"></div>
          <p className="mx-5 text-primary-blue font-medium">OR</p>
          <div className="border-b border-gray-300 w-full"></div>
        </div>
        <button className=" w-full py-[10px] rounded-[10px] border  border-gray-300 bg-white text-[17px] flex items-center justify-center gap-x-3">
          <GoogleIcon />
          Sign up with Google
        </button>
      </div>
    </form>
  );
};

export default Signupform;
