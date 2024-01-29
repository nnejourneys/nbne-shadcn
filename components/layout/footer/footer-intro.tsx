import Image from "next/image";
import { imgblurDataURL } from "@/lib/constants";

type footerIntroProps = { 
  // footerdata: string;
  img: string;
  content: string;
};

export default function FooterIntro({footerdata}: any) {
  return (
    <>
      <Image
        className="mt-1 mb-5"
        src={footerdata.img}
        placeholder="blur"
        blurDataURL={imgblurDataURL}
        alt="logo"
        width="300"
        height="205"
      />
      <p className="text-foreground mt-3 mb-5 pe-5">{footerdata.content}</p>
    </>
  );
}
