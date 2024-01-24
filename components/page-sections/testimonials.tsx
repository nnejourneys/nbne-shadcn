"use client";
import Image from "next/image";
import { imgblurDataURL } from "@/lib/constants";
import Testimonialdata from "@/data/testimonials.json";
import { Icon } from "@iconify/react";
import Bounded from "../styledcomps/bounded";
import { Heading } from "../styledcomps/heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Testimonials() {
  return (
    <>
      <Bounded width="marginxy">
        <Heading variant="sectiontitle" size="md">
          Clientspeak
        </Heading>
        <Icon
          className="mb-2 h-16 w-16 p-0.5 text-primary leading-relaxed inline-block text-center"
          icon="icomoon-free:quotes-left"
          width="30"
          height="30"
        />
        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {Testimonialdata.testimonials.map((item, index) => (
              <CarouselItem key={index}>
                <div className="py-24 px-5 md:p-24 mb-10 w-full md:w-[80vw]">
                  <div className="md:flex gap-8 mb-6">
                    <Image
                      className="rounded-full block mb-5"
                      src={item.img}
                      placeholder="blur"
                      blurDataURL={imgblurDataURL}
                      alt="clients-image"
                      width="200"
                      height="200"
                    />
                    <div>
                      <p className="text-xl font-semibold italic mb-2">
                        {item.name}
                      </p>
                      <p className="text-muted-foreground">{item.tour}</p>
                    </div>
                  </div>
                  <p>{item.text}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:inline-flex"/>
          <CarouselNext className="hidden md:inline-flex"/>
        </Carousel>
      </Bounded>
    </>
  );
}
