"use client";
import React, { useEffect } from "react";
import Contacts from "@/components/page-sections/contacts";
// import ContactForm from "@/components/contact-form";
import { SITE_TITLE, BASE_PATH } from "@/lib/constants";
import Head from "next/head";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Bounded from "@/components/styledcomps/bounded";
import ContactForm from "@/components/page-sections/contact-form";

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const animation = useAnimation();
  const anime = useAnimation();

  useEffect(() => {
    // console.log("use effect", inView);
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
          duration: 1,
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
      <Bounded width="marginxy">
        <div className="grid lg:grid-cols-2 gap-2">
          <div>
            <Contacts />
          </div>
          <motion.div> <ContactForm /> </motion.div>
        </div>
      </Bounded>
    </>
  );
}
