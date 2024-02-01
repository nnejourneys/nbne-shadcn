"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Heading } from "@/components/styledcomps/heading";

export default function Othertours({ othertours, tourtype }: any) {
  return (
    <>
      <Carousel
        className="mx-5 md:mx-14 mb-20"
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <Heading className="text-semibold capitalize">
          Other {tourtype} tours
        </Heading>
        <CarouselContent>
          {othertours.map((item: any, index: number) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 group"
            >
              <div className="relative">
                <AspectRatio ratio={16 / 9}>
                  <Image
                    className="img-fluid w-full"
                    src={item.image}
                    width={240}
                    height={160}
                    alt={item.title}
                  />
                </AspectRatio>
                <div className="absolute top-0 left-0 h-full w-full bg-black[60%] z-50 transition duration-300 ease-out">
                  <Link
                    href={item.link}
                    className="font-bold drop-shadow absolute left-7 bottom-10 translate-x-5 translate-y-5 rounded-md
                  group-hover:bg-primary group-hover:p-2 group-hover:translate-x-0 group-hover:translate-y-0 
                  transition duration-300 ease-out "
                  >
                    <Heading
                      size="xs"
                      className="text-white text-balance mb-0"
                      asChild={true}
                    >
                      <h5> {item.title} </h5>
                    </Heading>
                    {/* <h5 className="text-white">{item.title}</h5> */}
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:inline-flex" />
        <CarouselNext className="hidden md:inline-flex" />
      </Carousel>
    </>
  );
}
