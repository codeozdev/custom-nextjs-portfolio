"use client";

import { TypeAnimation } from "react-type-animation";

export default function Animation() {
  return (
    <div>
      <TypeAnimation
        sequence={[
          "Developer", // Types 'One'
          1000, // Waits 1s
          "Coder",
          2000,
          "Tech Enthusiast", // Deletes 'One' and types 'Two'
          2000, // Waits 2s
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: "1em", display: "inline-block", paddingLeft: "5px" }}
      />
    </div>
  );
}
