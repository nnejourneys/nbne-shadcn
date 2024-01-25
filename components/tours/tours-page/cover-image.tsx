import Image from "next/image";
import { imgblurDataURL } from "@/lib/constants";
import { Heading } from "@/components/styledcomps/heading";

type TourProps = {
  title: string;
  subtitle?: string;
  days?: string;
  image: string | undefined;
};

export default function TourCoverImage({
  title,
  subtitle,
  days,
  image
}: TourProps) {
  const coverImage = (
    <Image
      src={image as string}
      alt={title}
      placeholder="blur"
      blurDataURL={imgblurDataURL}
      className="z-10 bg-cover bg-center w-[100%] h-[60%] lg:h-full"
      // width={1920}
      // height={1080}
      fill
      priority
      sizes="100vw"
      style={{
        objectFit: "cover",
      }}
    />
  );
  return (
    <div className="tour-cover-image w-full h-[60vh] lg:h-[100vh] bg-center bg-no-repeat relative z-10 ">
      <div className="tour-overlay absolute top-0 left-0 h-[100vh] w-full z-20 bg-black/20" />
      {coverImage}
      <div className="tour-content page absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-center z-30">
        {/* <h1 className="uppercase text-white  text-3xl lg:text-6xl font-bold text-center">
          {title}
        </h1>  
        <h2 className="capitalize text-white text-3xl">{subtitle}</h2>
        <h4 className="capitalize text-white text-xl">{days}</h4> */}
        <Heading size="xl" variant="sectiontitlesm" className="uppercase text-white font-bold" asChild={true}><h1>{title}</h1></Heading>
        <Heading size="md" variant="sectiontitlesm" className="capitalize text-white font-semibold">{subtitle}</Heading>
        <Heading size="sm" variant="sectiontitlesm" className="capitalize text-white">{days}</Heading>
      </div>
    </div>
  );
}
