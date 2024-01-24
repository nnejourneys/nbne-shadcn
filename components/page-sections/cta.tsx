"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { imgblurDataURL } from "@/lib/constants";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "../ui/button";
import { Heading } from "../styledcomps/heading";
// import BtnPrimary from "./ui/btn-primary";

export default function CTA() {
  const { ref, inView, entry } = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    // console.log("use effect", inView, entry );
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1, 
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.1,
        },
      });
    }
    if (!inView) {
      animation.start({ y: "5vh", opacity: 0 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return (
    <>
      <section className="h-96 relative">
        <Image
          className="object-cover object-center"
          src="/images/ferry-crossing.jpg"
          alt="Northeast India ferry crossing"
          fill
          placeholder="blur"
          blurDataURL={imgblurDataURL}
        />

        {/* <div ref={ref} className="absolute left-1/2 -translate-x-1/2 top-1/2">
          <motion.div animate={animation}  >
            <Heading size="lg" variant="sectiontitlesm" className="text-white"> Looking for adventure? </Heading>
          </motion.div>
        </div> */}
        <div ref={ref} className="absolute right-20 top-1/2">
          <Link href="/contact">
            <motion.div animate={animation} whileTap={{ scale: 0.9 }}>
              <Button size="lg" className="uppercase">
                get in touch
              </Button>
            </motion.div>
          </Link>
        </div>
      </section>
    </>
  );
}
