import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Othertours({ othertours }: any) {
  return (
    <>
      <Carousel>
        <CarouselContent>
          {othertours.map((item: any, index: number) => (
            <CarouselItem key={index} className="basis-1/4 group">
              <div className="relative">
                <Image
                  className="img-fluid w-full"
                  src={item.image}
                  width={240}
                  height={160}
                  alt={item.title}
                />
                <div className="absolute top-0 left-0 h-full w-full bg-black[60%] z-50 transition duration-300 ease-out">
                  <Link
                    href={item.link}
                    className="font-bold drop-shadow absolute left-7 bottom-10 translate-x-5 translate-y-5  
                  group-hover:bg-primary group-hover:p-1 group-hover:translate-x-0 group-hover:translate-y-0 
                  transition duration-300 ease-out "
                  >
                    <h5 className="text-white">{item.title}</h5>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
