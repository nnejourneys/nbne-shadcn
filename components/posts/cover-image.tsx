// import cn from 'classnames'
import Link from "next/link";
import Image from "next/image";
import { Posts } from "@/.contentlayer/generated";
import type { ImageLoaderProps } from 'next/image';

export default function CoverImage({ src }: ImageLoaderProps ) {
  // const image = (
    return (
    <Image
      src={src}
      alt={`Cover Image for  `}
      width="720"
      height="480"
      className="w-full rounded-t-xl"
    />
  );
  // return (
  //   <div className="sm:mx-0">
  //     {slug ? (
  //       <Link href={`${slug}`} aria-label={title}>
  //         {image}
  //       </Link>
  //     ) : (
  //       image
  //     )}
  //   </div>
  // );
}
