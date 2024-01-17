"use client";
import React, { useState } from "react";
import { kalam } from "@/app/fonts";
import Image from "next/image";
import ring from "../../public/ring.png";

const RingBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-screen h-screen flex flex-col space-y-10 justify-center items-center bg-black">
      {/* ring box div */}
      <div
        className="w-60 relative flex flex-col justify-center items-center cursor-pointer"
        onClick={handleClick}
      >
        {/* Opeb Button Div */}
        <div
          className={`${
            isOpen ? "-bottom-2" : "bottom-1"
          } transition-all ease-out duration-500 absolute flex justify-center items-end custom-z-index`}
        >
          <div
            className={`${
              isOpen ? "rotate-45" : "rotate-0"
            } w-1 h-4 transition-all ease-in-out duration-300 bg-slate-400 rounded-full absolute`}
          ></div>
          <div
            className={`${
              isOpen ? "-rotate-45" : "rotate-0"
            } w-1 h-4 transition-all ease-in-out duration-300 bg-slate-400 rounded-full absolute`}
          ></div>
        </div>
        {/* ring place div */}
        <div
          className={`${
            isOpen
              ? "-bottom-0 z-40 transition-all ease-out duration-500"
              : "-bottom-3"
          } w-56 h-10 bg-red-500 border-2 border-black absolute flex justify-center items-center rounded-full`}
        >
          {/* Ring */}
          <span
            className={`relative  transition-all ease-out duration-1000 ${
              isOpen ? "bottom-3 block z-20" : " hidden"
            }`}
          >
            <Image src={ring} alt="ring" className="z-50 w-12 h-full" />
          </span>
        </div>
        {/* open close div */}
        <div
          className={`${
            isOpen
              ? "w-60 h-32 bottom-0 rounded-3xl bg-red-950 z-10"
              : "w-60 h-12 bottom-2 rounded-xl bg-red-700 z-50"
          }   border-2 border-white flex justify-center items-center p-1 absolute transition-all duration-300 ease-in-out mb-0.5`}
        >
          <div
            className={`${
              isOpen ? "border border-red-700 py-3" : " py-1"
            } w-full h-full rounded-3xl  transition-all duration-300 ease-in-out text-slate-300 flex-col justify-center items-center text-center ${
              kalam.className
            }`}
          >
            {isOpen ? "Will you Merry Me?" : "For you My Love"}
          </div>
        </div>
        {/* bottom div */}
        <div className="w-60 h-10 bg-red-700 rounded-b-xl flex justify-center items-center  border-2 border-white absolute z-40"></div>
      </div>
      <div
        className={`${kalam.className} font-semibold text-center text-white`}
      >
        This is for you Jaan. <br />
        💫💞
      </div>
      <div className={`${kalam.className} animate-bounce text-white text-end absolute bottom-10`}>Click on the Ring Box👆</div>
    </div>
  );
};

export default RingBox;
