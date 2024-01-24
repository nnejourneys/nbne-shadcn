"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent, 
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem, 
} from "@/components/ui/carousel"; 
import useKeypress from "react-use-keypress";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

export default function Gallery({
  galleryImages,
}: {
  galleryImages: string[];
}) {
  const [slideNumber, setSlideNumber] = useState(0);

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  useKeypress("ArrowLeft", () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  });
  useKeypress("ArrowRight", () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  });
  useKeypress(" ", () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  });

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, []);

  const detectKeyDown = (e: { key: string }) => {
    if (e.key === "Enter") {
    }
  };

  return (
    <>
      <Dialog>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 ">
          {galleryImages &&
            galleryImages.map((slide: any, index: any) => {
              return (
                <div key={index}>
                  <DialogTrigger
                    onClick={() => setSlideNumber(index)}
                    className="cursor-pointer overflow-hidden"
                  >
                    <Image
                      className="max-w-full hover:scale-105 overflow-hidden"
                      src={slide}
                      alt="image"
                      width="640"
                      height="480"
                    />
                  </DialogTrigger>
                  <DialogContent className="w-full">
                    <Carousel
                      opts={{
                        align: "start",
                        loop: true,
                      }}
                    >
                      <CarouselContent>
                        <CarouselItem>
                          <Image
                            src={galleryImages[slideNumber]}
                            alt="image"
                            width="1920"
                            height="1080"
                          />
                        </CarouselItem>
                      </CarouselContent>
                      <Button
                        onClick={prevSlide}
                        variant="outline"
                        size="icon"
                        className="absolute h-8 w-8 rounded-full top-1/2 left-5 "
                      >
                        <ArrowLeftIcon className="h-4 w-4" />
                        <span className="sr-only">Previous slide</span>
                      </Button>
                      <Button
                        onClick={nextSlide}
                        variant="outline"
                        size="icon"
                        className="absolute h-8 w-8 rounded-full top-1/2 right-5 "
                      >
                        <ArrowRightIcon className="h-4 w-4" />
                        <span className="sr-only">Next slide</span>
                      </Button>
                    </Carousel>
                  </DialogContent>
                </div>
              );
            })}
        </div>
      </Dialog>
    </>
  );
}
