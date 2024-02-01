"use client";
import Alertdata from "@/data/alert.json";
import { Icon } from "@iconify/react";
import { Button } from "../../ui/button";

export default function ContactBanner() {
  return (
    <>
      <div className="md:bg-secondary px-5">
        <ul className=" flex flex-wrap justify-center md:justify-end">
          {Alertdata.contact.map((item, index) => (
            <li className="m-0" key={index}>
              <a href={item.link} aria-label={item.name}>
                <Button variant="link">{item.name}</Button>
              </a>
            </li>
          ))}
          {Alertdata.social.map((item, index) => (
            <li key={index} className="m-0">
              <a
                href={item.link}
                target="_blank"
                aria-label={item.name}
              >
                <Button variant="link" size="icon">
                  <Icon
                    className="my-auto w-5 h-5"
                    icon={item.icons}
                    aria-label={item.name}
                  />
                </Button>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
