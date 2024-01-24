// "use client";
import Image from "next/image";
import { imgblurDataURL } from "@/lib/constants";
import { Tours } from "@/.contentlayer/generated";
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function TourCardImg({ bg_image, title }: Tours) {
  return (
    <>
    <div className="w-[420px]">

      <AspectRatio ratio={16 / 9}>
        {/* <Image src="..." alt="Image" className="rounded-md object-cover" /> */}
        <Image
          className="object-cover transition duration-500 ease-in-out group-hover:scale-110"
          src={bg_image!}
          placeholder="blur"
          blurDataURL={imgblurDataURL}
          width={720}
          height={480}
          alt={title!}
        />
      </AspectRatio>
    </div>
    </>
  );
}
