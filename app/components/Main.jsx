import Image from "next/image";
import React from "react";
import Animation from "./Animation";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Main() {
  return (
    <div className="">
      <Image
        className="w-full h-screen object-cover object-top"
        src="https://images.unsplash.com/photo-1685438436929-108c5050855d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        width={2560}
        height={1440}
        alt="naural"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/30">
        <div className="max-w-[700px] m-auto w-full h-full flex flex-col justify-center items-center lg:items-start ">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I{"'"}m CODEOZ
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I{"'"}m a
            <Animation />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter className="cursor-pointer" size={20} />
            <FaFacebook className="cursor-pointer" size={20} />
            <FaInstagram className="cursor-pointer" size={20} />
            <FaLinkedin className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
