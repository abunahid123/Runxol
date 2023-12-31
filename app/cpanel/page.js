"use client";

import Image from "next/image";
import React, { useState } from "react";

import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

//  ********* icons.....
import wpcp from "../../public/icons/worldcpanel.svg";
import manicon from "../../public/icons/manicon.svg";
import markpalce from "../../public/icons/markplace.svg";
import manfill from "../../public/icons/manfill.svg";
import plus from "../../public/icons/plus.svg";
import cross from "../../public/icons/cross.svg";
import settings from "../../public/icons/settings.svg";

// *********** components.......

import UserTable from "@/components/UserTable";
import Modal from "@/components/Modal";
import CustomInput from "@/components/custominput";
import Regester from "@/components/Regester";
import CancleRegister from "@/components/CancleRegister";

const page = () => {
  const [showmodal, setShowmodal] = useState(false);

  return (
    <>
      <div className=" flex flex-col min-h-screen ">
        {/* ******************************* Header Section Start **************************************** */}
        <div className="flex justify-between items-center border w-full">
          <div className="flex ">
            <div className=" bg-[#13AEE7]  w-[80px] h-[73px] flex items-center justify-center ">
              <Image src={wpcp} className=" h-[42px] w-[43px] " />
            </div>
            <div className=" bg-[#F1F4F9] flex items-center justify-center px-3 gap-2 ">
              <div className="  ">
                <Image src={manicon} className=" h-[28px] w-[28px] " />
              </div>
              <div className="">
                <h1>( 2 )</h1>
              </div>
            </div>
            <div className="flex items-center mx-4 ">
              <Image src={markpalce} className=" h-[35px] w-[35px] " />
              <h1 className=" font-medium mx-1">(0/100/0) </h1>
            </div>
          </div>
          <div className=" flex mx-4 gap-4 ">
            <div className=" bg-[#FFF9F9] border  border-[#BAACAC] px-11 py-2 ">
              <h1 className=" text-black/60 font-medium text-sm ">English</h1>
            </div>
            <div className=" flex items-center mr-6 px-6 py-1 rounded-full border border-black/60 gap-2 ">
              <Image src={manfill} className=" h-[22px] w-[22px] " />
              <h1 className=" font-medium text-sm text-black/60  ">
                Runxolgps
              </h1>
            </div>
          </div>
        </div>
        {/* ******************************* Header Section End **************************************** */}

        {/* ******************************* Table  Section Start **************************************** */}

        <div className=" mx-5 mt-9  mb-5">
          <h1 className="  ">
            <span className=" font-bold text-[#13AEE7] "> Control Panel </span>{" "}
            - User List
          </h1>
        </div>
        <div className="">
          <UserTable />
        </div>

        {/* ******************************* Table Section End **************************************** */}

        {/* ******************************** Modal Start ************************************** */}

        <Modal isVisible={showmodal} onClose={() => setShowmodal(false)}>
          <div className=" my-3 ">
            <label className=" flex gap-10 items-center ">
              <span className=" text-sm ">Email</span>
              <input
                type="email"
                name="email"
                id="email"
                className=" bg-[#D9D9D9]/50 border border-black/20 px-2 outline-none "
              />
            </label>
            <div className="flex items-center gap-3 text-sm ">
              <h1>Send Send Credentials</h1>

              <Checkbox {...label} defaultChecked />
            </div>
            <div className=" flex justify-center gap-3 ">
              <Regester />
              <CancleRegister onClose={() => setShowmodal(false)} />
            </div>
          </div>
        </Modal>

        {/* ******************************** Modal Emd ************************************** */}

        {/* *****************************Modal button start*************************************************** */}

        <div className=" absolute   bottom-0  px-5 py-2 w-full  ">
          <div className=" flex bg-[#D9D9D9]/60 justify-start items-center gap-4 ">
            <div
              onClick={() => setShowmodal(true)}
              className=" bg-[#13AEE7] py-2 px-4 cursor-pointer "
            >
              <Image src={plus} className=" w-[14px] h-[14px]   " />
            </div>

            <div className="   ">
              <Image
                src={cross}
                className=" w-[20px] h-[18px] border broder-[000000]/60  "
              />
            </div>
            <div className="   ">
              <Image
                src={settings}
                className=" w-[20px] h-[18px] border broder-[000000]/60  "
              />
            </div>
          </div>
        </div>

        {/* *****************************Modal button  End*************************************************** */}
      </div>
    </>
  );
};

export default page;
