import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="">
      <Image
        className="w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1651613543604-195861551d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        width={1920}
        height={1080}
        alt="naural"
      />
    </main>
  );
}
