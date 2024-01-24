"use client";
import Alertdata from "@/data/alert.json";
import { Icon } from "@iconify/react";
import { Button } from "../../ui/button";

export default function ContactBanner() {
  return (
    <>
      <div className="bg-secondary flex justify-end px-5">
        <ul className="flex flex-wrap text-center md:text-end">
          {Alertdata.contact.map((item, index) => (
            <li className={item.class} key={index}>
              <a href={item.link} aria-label={item.name}>
                <Button variant="link">{item.name}</Button>
              </a>
            </li>
          ))}
          {Alertdata.social.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="icon hover:text-nne-primary"
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
