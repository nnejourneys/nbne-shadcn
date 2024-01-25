"use client";
import React from "react";
import Image from "next/image";
import { imgblurDataURL } from "@/lib/constants";
import { usePathname } from "next/navigation"; 

export default function HeroPage() {
  const pathname = usePathname();
  const pagename = usePathname().split("/").pop();
  const pagetitle = pagename?.split("/").join(" ").split("-").join(" ");
  const imageFolder = "/images/page-hero";
  const imageFile = pathname + ".jpg";
  const image = imageFolder + imageFile;

  return (
    <>
      <Image
        className="object-cover  object-center h-[60vh]"
        src={image}
        alt="Cover Image"
        placeholder="blur"
        blurDataURL={imgblurDataURL}
        width={1920}
        height={1280}
        priority
      />

      <div className="absolute top-[30%] left-1/2 -translate-x-1/2">
        <h1 className="text-white font-bold text-center uppercase text-3xl md:text-5xl mb-3">
          {pagetitle}
        </h1>
      </div>
    </>
  );
}
