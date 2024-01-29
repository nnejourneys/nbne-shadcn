"use client";
import Image from "next/image";
import Slides from "@/data/heroslider.json";
import { delay, motion, useAnimation } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Button } from "../ui/button";
import Autoplay from "embla-carousel-autoplay";
import { Heading } from "../styledcomps/heading";
import React from "react";

export default function HeroMain() {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {Slides.hero.slides.map((item, index) => (
            <CarouselItem key={index}>
              <motion.div className="aspect-video relative w-full h-[60vh] sm:h-[100vh] z-0">
                <Image
                  className="absolute aspect-video object-cover"
                  src={item.image}
                  alt="North by Northeast Journeys"
                  fill
                  priority={item.load}
                />
                <div className="absolute top-[40%] left-[10%]">
                  <Heading
                    size="xs"
                    className="text-white font-bold mb-1 [text-shadow:_0.5px_0.5px_rgb(0_0_0_/_100%)]"
                    asChild={true} 
                  >
                    <h1> {item.title} </h1>
                  </Heading>
                  <Heading
                    size="xl"
                    className="text-white font-bold mb-3 [text-shadow:_1px_1px_rgb(0_0_0_/_100%)]"
                    
                  >
                    {item.subtitle}
                  </Heading>
                  <Heading
                    size="sm"
                    className="text-white font-semibold mb-5 [text-shadow:_0.5px_0.5px_rgb(0_0_0_/_100%)]"
                    asChild={true}
                  >
                    <h3>{item.description}</h3>
                  </Heading>
                  <Button size="lg">
                    <Link href="/tours">Explore all tours</Link>
                  </Button>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-5" />
        <CarouselNext className="absolute top-1/2 right-5" />
      </Carousel>
    </>
  );
}
