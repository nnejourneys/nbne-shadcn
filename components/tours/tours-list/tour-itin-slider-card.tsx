import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Tours } from "@/.contentlayer/generated";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function TourSliderCard({
  bg_image,
  title,
  subtitle,
  slug,
  cat,
}: Tours) {
  return (
    <div className="relative mx-1">
      <Link href={`/tours/${slug}`}>
        <AspectRatio ratio={16 / 9}>
          <Image
            className="w-full object-cover"
            src={bg_image!}
            width={720}
            height={480}
            alt={title!}
          />
        </AspectRatio>

        <div className="tour-list-item absolute top-0 left-0 h-full w-full bg-black/5 ease-in-out duration-300">
          <p className="absolute top-0 end-0 text-white text-xs bg-primary text-center px-3 py-1">
            {cat}
          </p>
          <div className="absolute left-2 bottom-10 translate-y-5 opacity-90 hover:bg-primary p-2">
            <h5 className="font-bold text-white">{title}</h5>
            <h6 className="font-light text-xs text-white">{subtitle}</h6>
          </div>
        </div>
      </Link>
    </div>
  );
}
