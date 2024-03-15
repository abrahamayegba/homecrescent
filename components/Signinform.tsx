import Link from "next/link";
import React from "react";
import GoogleIcon from "./logos/GoogleIcon";
import {
  GetUserByIdDocument,
  useSignInMutation,
} from "@/src/generated/graphql";
import { useForm } from "react-hook-form";
import { saveToken } from "@/lib/auth";
import { useApolloClient } from "@apollo/client";

interface FormData {
  email: string;
  password: string;
}

interface Props {
  closeModal: () => void;
}

const Signinform: React.FC<Props> = ({ closeModal }) => {
  const { register, reset, handleSubmit } = useForm<FormData>();
  const [signInMutation, { loading }] = useSignInMutation();
  const client = useApolloClient();

  const handleSignin = async (data: FormData) => {
    try {
      const response = await signInMutation({
        variables: {
          ...data,
        },
      });
      if (response) {
        saveToken(response?.data?.signIn?.token?.access_token!);
        client.writeQuery({
          query: GetUserByIdDocument,
          data: {
            getUserById: response?.data?.signIn?.user,
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
      onSubmit={handleSubmit(handleSignin)}
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
          className={`max-w-[400px] px-3 py-[10px] relative border rounded bg-gray-50 focus:border-blue-500 hover:border-blue-500 font-light`}
          placeholder="Enter email"
          {...register("email")}
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
            type="password"
            required
            className={`w-full px-3 py-[10px] border bg-gray-50 rounded focus:border-blue-500 hover:border-blue-500 font-light `}
            placeholder="8+ characters"
            {...register("password")}
          />
        </div>
        <div className=" flex flex-col mt-6">
          <button
            disabled={loading}
            type="submit"
            className={`rounded md:px-[100px] px-[90px] max-w-full md:max-w-[400px] py-[10px]  text-white bg-primary-blue text-lg flex items-center justify-center ${
              loading ? "opacity-50" : ""
            }`}
          >
            {loading ? "Loading..." : "Sign  in"}
          </button>
        </div>
        <p className="text-base text-primary-black mt-2">
          Forgot password?{" "}
          <Link
            href="/auth/resetlink"
            className="text-primary-blue underline underline-offset-4 ml-[2px]"
          >
            Reset here
          </Link>
        </p>
        <div className="flex items-center justify-center my-4">
          <div className="border-b border-gray-300 w-full"></div>
          <p className="mx-5 text-primary-blue font-medium">OR</p>
          <div className="border-b border-gray-300 w-full"></div>
        </div>
        <button className=" w-full py-[10px] rounded-[10px] border  border-gray-300 bg-white text-[17px] flex items-center justify-center gap-x-3">
          <GoogleIcon />
          Continue with Google
        </button>
      </div>
    </form>
  );
};

export default Signinform;
