"use client"
import { Icon } from "@iconify/react"; 
import { Key } from "react";
import { Button } from "@/components/ui/button";

export default function SocialLinks({ footerdata }: any) {
  return (
    <>
      <ul className="flex">
        {footerdata.social.map(
          (item: { link: string; name: string; icons: string }, index: Key) => (
            <li className="mr-1" key={index}>
              <a href={item.link} aria-label={item.name} target="_blank">
                <Button variant="link">
                  <Icon
                    icon={item.icons}
                    width={30}
                    height={30}
                    className="text-foreground hover:text-primary transition duration-150 ease-out"
                  />
                </Button>
              </a>
            </li>
          )
        )}
      </ul>
    </>
  );
}
