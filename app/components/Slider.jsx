"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";

export default function Slider() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      {/* hamburger icon */}
      <AiOutlineMenu
        className="absolute top-4 right-4 z-[99] md:hidden cursor-pointer"
        onClick={handleNav}
      />
      {
        // hamburger iconun icindeki menuler
        nav ? (
          <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center md:hidden z-50">
            <Link
              onClick={handleNav}
              href="#main"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200"
            >
              <AiOutlineHome size={20} />
              <span className="pl-4">Home</span>
            </Link>
            <Link
              onClick={handleNav}
              href="#work"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200"
            >
              <GrProjects size={20} />
              <span className="pl-4">Work</span>
            </Link>
            <Link
              onClick={handleNav}
              href="#proje"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200"
            >
              <AiOutlineProject size={20} />
              <span className="pl-4">Projects</span>
            </Link>
            <Link
              onClick={handleNav}
              href="#main"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200"
            >
              <BsPerson size={20} />
              <span className="pl-4">Resume</span>
            </Link>
            <Link
              onClick={handleNav}
              href="#contact"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200"
            >
              <AiOutlineMail size={20} />
              <span className="pl-4">Contact</span>
            </Link>
          </div>
        ) : (
          ""
        )
      }
      {/* hamburger iconun disindaki menuler, anasayfadaki */}
      <div className="hidden md:block fixed top-[25%] z-10">
        <div className="flex flex-col">
          <Link
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </Link>
          <Link
            href="#work"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-300"
          >
            <GrProjects size={20} />
          </Link>
          <Link
            href="#proje"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-300"
          >
            <AiOutlineProject size={20} />
          </Link>
          <Link
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-300"
          >
            <BsPerson size={20} />
          </Link>
          <Link
            href="#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-300"
          >
            <AiOutlineMail size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
