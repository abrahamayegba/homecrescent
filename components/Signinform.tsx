import Link from "next/link";
import React from "react";

const Signinform = () => {
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
          className={`max-w-[400px] px-3 py-[10px] relative border rounded bg-gray-50 hover:border-blue-500 font-light focus:outline-none`}
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
        <div className={`relative max-w-[400px] group`}>
          <input
            //   type={type}
            required
            className={`w-full px-3 py-[10px] relative border rounded-[8px] focus:outline-none`}
            placeholder="8+ characters"
          />
        </div>
        {/* {error && <p className="text-red-500 text-sm pl-1">{error}</p>} */}
        <p className="text-base text-primary-black mt-4">
          Forgot password?{" "}
          <Link
            href="/auth/resetlink"
            className="text-primary-blue underline underline-offset-4 ml-[2px]"
          >
            Reset here
          </Link>
        </p>
      </div>
      <div className=" flex flex-col mt-1">
        <button
          type="submit"
          className={`rounded-[10px] md:px-[100px] px-[90px] max-w-full md:max-w-[400px] py-[10px]  text-white bg-primary-blue text-lg flex items-center justify-center`}
        >
          {"Sign in"}
        </button>
      </div>
    </form>
  );
};

export default Signinform;
