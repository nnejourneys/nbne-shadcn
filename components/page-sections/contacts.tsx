"use client"
import React, { useEffect } from "react";
import Contactdata from "@/data/contact.json";
import { Icon } from "@iconify/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contacts() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const animation = useAnimation();
  const anime = useAnimation();

  useEffect(() => {
    console.log("use effect", inView);
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "tween",
          duration: 1,
          bounce: 0.3,
        },
      });
      anime.start({
        opacity: "1",
        transition: {
          type: "tween",
          duration: 2,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "-5vw" });
      anime.start({ opacity: "0" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return (
    <>
      <div ref={ref}>
        <motion.h2 animate={anime} className="text-3xl font-bold mb-14">
          Contact Us
        </motion.h2>
        <motion.ul animate={animation} className="ps-0">
          {Contactdata.contact.map((item, index) => (
            <li className="group flex mb-8" key={index}>
              <div className="relative round-icon me-3 h-16 w-16 rounded-full border-2 border-muted text-center leading-loose text-3xl text-nne-primary inline-block">
                <Icon
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-primary transition duration-150 ease-out"
                  icon={item.icon}
                  width="25"
                  height="25"
                />
              </div>
              <a className="my-auto font-semibold text-md group-hover:text-primary transition duration-150 ease-out" href={item.link}>
                {item.name}
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </>
  );
}
