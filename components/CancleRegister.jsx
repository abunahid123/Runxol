import React from "react";
import Cancle from "../public/icons/calcleblace.svg";
import Image from "next/image";

const CancleRegister = ({ onClose }) => {
  return (
    <>
      <div
        onClick={() => onClose()}
        className=" flex bg-[#D9D9D9]/50 gap-1  items-center hover:bg-white border border-black/20 pl-2 pr-3 cursor-pointer text-black "
      >
        <Image src={Cancle} className=" h-[28px] w-[24px] " />
        <div className=" text-sm ">
          <h1>Cancle</h1>
        </div>
      </div>
    </>
  );
};

export default CancleRegister;
