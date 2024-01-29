"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "./navbar";
import HamburgerMenu from "./hamburger-menu";
import ContactBanner from "./contact-banner";

export default function Menu() {
  const [yValue, setYValue] = useState(0);
  const [toHide, setToHide] = useState(false);

  useEffect(() => {
    const showHeaderOnScrollUp = () => {
      if (yValue >= window.scrollY) {
        setToHide(false);
      } else {
        setToHide(true);
      }
      setYValue(window.scrollY);
    };

    window.addEventListener("scroll", showHeaderOnScrollUp);

    return () => {
      window.removeEventListener("scroll", showHeaderOnScrollUp);
    };
  }, [yValue]);

  return (
    <>
      <div
        className={
          "fixed top-0 left-0 right-0 z-30 bg-background/80 backdrop-blur" +
          (toHide && "py-0 h-0 hidden")
        }
      >
        {/* <ContactBanner /> */}
        <div className="container flex justify-between py-1">
          <Image
            src="/images/logo.svg"
            alt="NXNE"
            className="w-20 h-auto"
            width="300"
            height="205"
          />
          <HamburgerMenu />
          <div className="hidden md:flex">
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
}
