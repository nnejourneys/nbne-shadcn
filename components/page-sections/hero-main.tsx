"use client";
import Image from "next/image";
import Slides from "@/data/heroslider.json";
import { motion, useAnimation } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function HeroMain() {

  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {Slides.hero.slides.map((item, index) => (
              <CarouselItem key={index}>
                <motion.div className="aspect-video relative w-full h-[60vh] sm:h-[100vh] z-0">
                  <Image
                    className="absolute object-cover"
                    src={item.image}
                    alt="North by Northeast Journeys"
                    fill
                    priority
                  />
                  <div className="absolute top-[40%] left-[10%]">
                    <motion.h3 className="text-white font-bold text-md lg:text-xl mb-1 text-shadow">
                      {item.title}
                    </motion.h3>
                    <motion.h1 className="text-white font-bold text-4xl lg:text-8xl mb-3 text-shadow-md">
                      {item.subtitle}
                    </motion.h1>
                    <motion.p className="text-white font-semibold text-md lg:text-xl mb-5 text-shadow">
                      {item.description}
                    </motion.p>
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
