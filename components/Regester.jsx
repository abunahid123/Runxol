import React from "react";
import Plus from "../public/icons/plusblack.svg";
import Image from "next/image";

const Regester = () => {
  return (
    <>
      <div className=" flex bg-[#D9D9D9]/50 gap-2  items-center hover:bg-white border border-black/20 pl-2 pr-3 cursor-pointer text-black ">
        <Image src={Plus} className=" h-[24px] w-[24px] " />
        <div className=" text-sm ">
          <h1>Register</h1>
        </div>
      </div>
    </>
  );
};

export default Regester;
