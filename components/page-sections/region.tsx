"use client";
import React, { useEffect } from "react";
import Regiondata from "@/data/region.json";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Bounded from "../styledcomps/bounded";
import { Heading } from "../styledcomps/heading";
import { P } from "../ui/p";

export default function Region() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.1,
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0, y: "5vh" });
    }
  }, [inView, animation]);

  return (
    <>
      <Bounded width="marginxy">
        <Heading variant="sectiontitle" size="lg">
          The region at a glance
        </Heading>
        <ul ref={ref} className="region-card-list my-20">
          {Regiondata.accordion.map((item, index) => (
            <motion.li
              className="row block md:flex md:flex-row even:flex-row-reverse gap-8 py-20 "
              key={index}
              animate={animation}
            >
              <div className="w-full md:w-1/2 mb-4">
                <Heading variant="sectiontitlehalf" size="md">
                  {item.title}
                </Heading>
                <P className="text-justify">{item.text}</P>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  className="w-full"
                  src={item.image}
                  // placeholder="blur"
                  // blurDataURL={imgblurDataURL}
                  alt={item.title}
                  width="480"
                  height="480"
                />
              </div>
            </motion.li>
          ))}
        </ul>
      </Bounded>
    </>
  );
}
