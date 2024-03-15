import React, { useState } from "react";
import GoogleIcon from "./logos/GoogleIcon";
import { Checkbox } from "./ui/checkbox";
import {
  GetUserByIdDocument,
  useSignUpMutation,
} from "@/src/generated/graphql";
import { useForm } from "react-hook-form";
import { saveToken } from "@/lib/auth";
import { useApolloClient } from "@apollo/client";

interface FormData {
  email: string;
  fullname: string;
  password: string;
  mobile: string;
}

interface Props {
  closeModal: () => void;
}

const Signupform: React.FC<Props> = ({ closeModal }) => {
  const { register, reset, handleSubmit } = useForm<FormData>();
  const [signUpMutation, { loading }] = useSignUpMutation();
  const [industryPro, setIndustryPro] = useState<boolean | "indeterminate">(
    false
  );
  const client = useApolloClient();

  const handleSignUp = async (data: FormData) => {
    try {
      const response = await signUpMutation({
        variables: {
          ...data,
          isDeveloper: industryPro === true,
        },
      });
      if (response) {
        saveToken(response?.data?.signUp?.token?.access_token!);
        client.writeQuery({
          query: GetUserByIdDocument,
          data: {
            getUserById: response?.data?.signUp?.user,
          },
        });
      }
      closeModal();
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleSignUp)}
      className=" flex flex-col mt-[15px] w-full md:gap-y-6 gap-y-4 p-3"
    >
      <div className=" flex flex-col gap-y-[5px]">
        <label
          className=" text-primary-black text-[15px] font-medium text-start"
          htmlFor="fullname"
        >
          Fullname
        </label>
        <input
          type="text"
          required
          className={` w-full px-3 py-[10px] border rounded bg-gray-50 focus:border-blue-500 hover:border-blue-500 font-light `}
          placeholder="Enter fullname"
          {...register("fullname")}
        />
      </div>
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
          {...register("email")}
        />
      </div>
      <div className=" flex flex-col gap-y-[5px]">
        <label
          className=" text-primary-black text-[15px] font-medium text-start"
          htmlFor="mobile"
        >
          Phone number
        </label>
        <input
          type="tel"
          required
          className={` w-full px-3 py-[10px] border rounded bg-gray-50 focus:border-blue-500 hover:border-blue-500 font-light `}
          placeholder="Enter phone number"
          {...register("mobile")}
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
            type="password"
            required
            className={`w-full px-3 py-[10px] border bg-gray-50 rounded focus:border-blue-500 hover:border-blue-500 font-light `}
            placeholder="Create password"
            {...register("password")}
          />
        </div>
        <div className="flex items-center gap-x-2 mt-5">
          <Checkbox
            checked={industryPro}
            onCheckedChange={(isChecked) => {
              setIndustryPro(isChecked);
            }}
            className="border-gray-300"
            id="industrypro"
          />
          <label
            htmlFor="terms"
            className=" text-primary-blue leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I am a landlord or industry professional
          </label>
        </div>
        <div className=" flex flex-col mt-6">
          <button
            disabled={loading}
            type="submit"
            className={`rounded md:px-[100px] px-[90px] max-w-full md:max-w-[400px] py-[10px]  text-white bg-primary-blue text-lg flex items-center justify-center ${
              loading ? "opacity-50" : ""
            }`}
          >
            {loading ? "Submitting..." : "Submit"}
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
        <button
          type="button"
          className=" w-full py-[10px] rounded-[10px] border  border-gray-300 bg-white text-[17px] flex items-center justify-center gap-x-3"
        >
          <GoogleIcon />
          Sign up with Google
        </button>
      </div>
    </form>
  );
};

export default Signupform;
