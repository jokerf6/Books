"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Right() {
  return (
    <div className=" lg:w-2/4 xl:w-2/4 h-full bg-primary4 z-20 flex flex-col items-center justify-center w-full">
      <div className="flex flex-col gap-12 items-center justify-center w-full">
        <p className=" text-gray-800">Sign in to Homepage</p>
        <form className=" flex flex-col justify-center items-center w-full gap-4">
          <div className=" flex flex-col w-2/3">
            <span className=" text-gray-300 text-lg">Email</span>
            <input
              className=" px-2 py-2 text-gray-800 text-sm border outline-none"
              placeholder="Type your Email"
            />
          </div>
          <div className=" flex flex-col w-2/3">
            <span className=" text-gray-300 text-lg">Password</span>
            <input
              className=" px-2 py-2 text-sm border outline-none text-gray-800"
              type="password"
              placeholder="Type your Password"
            />
          </div>
          <div className=" w-2/3 flex flex-row-reverse justify-between items-center">
            <Link href={"/reset"} className=" text-primary3">
              Reset Password!
            </Link>
          </div>
          <button
            className=" bg-primary3 w-2/3 py-3 border rounded-md"
            onClick={(e) => {
              e.preventDefault();
              //   console.log("hhi");
              window.location.href = "/home";
            }}
          >
            Login
          </button>
        </form>
        <div className=" w-full flex gap-1 justify-center items-center">
          <p className=" text-gray-800">Donot have an account? </p>
          <Link className=" text-primary3" href={"/register"}>
            Register now
          </Link>
        </div>
      </div>
    </div>
  );
}
