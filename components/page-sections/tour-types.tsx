"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { imgblurDataURL } from "@/lib/constants";
import Tourtypedata from "@/data/tourtypes.json";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Bounded from "../styledcomps/bounded";
import { Heading } from "../styledcomps/heading";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

export default function TourTypes() {
  const { ref, inView, entry } = useInView({ threshold: 0.1 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <>
      <Bounded width="marginxy">
        <Heading variant="sectiontitle">{Tourtypedata.tourtypetitle}</Heading>
        {/* <Sectiontitle>{Tourtypedata.tourtypetitle}</Sectiontitle> */}
        <div className="grid md:grid-cols-3 gap-4" ref={ref}>
          {Tourtypedata.tourtype.map((item, index) => (
            <div className="mb-4" key={index}>
              <motion.div
                animate={animation}
                // className="border shadow-sm rounded text-center"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">{item.title}</CardTitle>
                  </CardHeader>
                  <div className="relative">
                    <Image
                      className="w-full"
                      src={item.img}
                      alt={item.title}
                      placeholder="blur"
                      blurDataURL={imgblurDataURL}
                      width={240}
                      height={170}
                      sizes="30vw"
                    />
                  </div>
                  <CardContent>
                    <p className="text-justif pt-3 px-1 mb-5">{item.text}</p>
                    <Link href={item.url}>
                      <Button id={item.btnText} aria-label={item.btnText} title={item.btnText}>{item.btnText}</Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </Bounded>
    </>
  );
}
