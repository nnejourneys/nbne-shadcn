import React from "react";
import { Cross2Icon, TextAlignJustifyIcon } from "@radix-ui/react-icons";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Navbar from "./navbar";
import MenuItems from "../../../data/mainmenu.json";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/ui/mode-toggler";

export default function HamburgerMenu() {
  return (
    <>
      <div className="md:hidden my-auto">
        <Sheet>
          <SheetTrigger>
            <TextAlignJustifyIcon className="h-8 w-8 my-auto" />
            <span className="sr-only">Close</span>
          </SheetTrigger>
          <SheetContent className="w-full">
            {/* <Navbar /> */}
            <ModeToggle />
            <NavigationMenu className="mt-20 mx-auto">
              <NavigationMenuList className="flex flex-col">
                {MenuItems.menu.map((item) => {
                  if (!item.children)
                    return (
                      <NavigationMenuItem key={item.id} className="my-5">
                        <Link href={item.href} legacyBehavior passHref>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            <SheetTrigger>{item.title}</SheetTrigger>
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    );
                  {
                    return (
                      <NavigationMenuItem
                        key={item.id}
                        className="my-5"
                      >
                        <NavigationMenuTrigger>
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          
                            <ul className="w-full flex flex-col">
                              {item.children.map((item) => (
                                <SheetTrigger key={item.title}>
                                   
                                  <ListItem
                                    title={item.title}
                                    href={item.href}
                                  />
                                </SheetTrigger>
                              ))}
                            </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  }
                })}
              </NavigationMenuList>
            </NavigationMenu>

            {/* end nav */}
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground ">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
