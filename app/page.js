"use client";

import Image from "next/image";
import React from "react";
import logo from "../public/loginlog.png";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import { useRouter } from "next/navigation";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const page = () => {
  const router = useRouter();

  const handleform = (e) => {
    e.preventDefault();
    router.push("/cpanel");
  };

  return (
    <>
      <div className=" bg-loginimg h-screen w-full bg-[69%]  bg-no-repeat bg-cover  ">
        <div className=" flex items-center justify-center h-full w-full ">
          <div className=" bg-[#FFFFFF] pt-2 px-3 md:px-8 pb-8   ">
            <div className=" flex justify-center ">
              <Image src={logo} className=" h-[144px] w-[144px]  " />
            </div>
            <div className=" mx-2 mb-4 ">
              <h1 className=" text-[#2B3674]  font-DmSans font-bold text-4xl ">
                Sign In
              </h1>
              <h2 className=" font-DmSans font-normal text-base text-[#A3AED0] mt-1 ">
                Enter your email and password to sign in!
              </h2>
            </div>
            <div className="flex flex-col mx-2 mt-5">
              <form
                className="flex flex-col justify-center items-center gap-5 "
                onSubmit={handleform}
              >
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-[#2B3674] ">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 px-3 py-4 w-[350px] md:w-[450px] bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-2xl sm:text-sm focus:ring-1"
                    placeholder="Enter your name"
                  />
                </label>
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-[#2B3674]">
                    Password
                  </span>
                  <input
                    required
                    type="password"
                    name="password"
                    className="mt-1 w-[350px] md:w-[450px] px-3 py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-2xl sm:text-sm focus:ring-1"
                    placeholder="Enter your password"
                  />
                </label>
                <div className=" flex items-center justify-between w-full ">
                  <div className=" flex items-center   ">
                    <Checkbox {...label} defaultChecked />
                    <div className="">
                      <h1 className=" text-[#13AEE7] text-sm ">
                        Keep me logged in
                      </h1>
                    </div>
                  </div>
                  <div className=" ">
                    <Link href={"/"}>
                      <h1 className=" text-[#006E99] font-medium text-sm">
                        Forget password?
                      </h1>
                    </Link>
                  </div>
                </div>
                <div className="  ">
                  <button
                    type="submit"
                    className=" bg-[#006E99] rounded-xl py-5 px-11 w-[300px] md:w-[410px] "
                  >
                    <h1 className=" text-white  ">Sign in </h1>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
