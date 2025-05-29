"use client";
import React, { useEffect, useState } from "react";
import { HeroContent } from "./HeroContent";
import videoSrc from "@/assets/videos/RK_bunt_480p.mp4";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="h-screen text-center flex flex-col items-center justify-center bg-neutral-950">
      <div className="top-0 bottom-0 right-0 left-0 h-screen object-cover">
        <video
          style={{
            transform: `translateY(${offsetY * 0.4}px)`,
          }}
          className="absolute top-0 bottom-0 right-0 left-0 w-screen h-screen object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <div className="h-screen fixed top-0 left-0 right-0 bottom-0 bg-black/70 z-0" />
      <HeroContent />
    </div>
  );
};

export default Hero;
