// import cn from 'classnames'
import Link from "next/link";
import Image, { ImageLoaderProps } from "next/image";
import { Posts } from "@/.contentlayer/generated";

export default function PostImage({ src }: ImageLoaderProps) {
  return (
    <>
      {src ? (
        <Image
          src={src}
          alt={`image for post`}
          width="720"
          height="480"
          className="w-full my-10"
        />
      ) : null}
    </>
  );
}
