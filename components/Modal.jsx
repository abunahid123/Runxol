import Image from "next/image";
import React, { Children } from "react";
// import Cross from "../public//crossOutline.svg";
import Cross from "../public/icons/crossOutline.svg";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;
  return (
    <>
      <div className=" fixed inset-0 bg-[#D9D9D9]/50 backdrop-blur-sm flex justify-center items-center ">
        <div className=" flex flex-col min-w-[200px] ">
          <div className="flex justify-between items-center bg-[#13AEE7] px-2 py-1 ">
            <h1 className=" text-white font-bold  "> Add User </h1>

            <div onClick={() => onClose()} className=" cursor-pointer ">
              <Image src={Cross} className=" h-[28] w-[28] text-white " />
            </div>
          </div>
          <div className=" p-2  bg-white border border-[#000000]/50 ">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
