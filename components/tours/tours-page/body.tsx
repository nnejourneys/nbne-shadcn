import { Mdx } from "@/components/tours/tours-page/mdx-components";

type TourProps = {
body: any;
code: string;
} 

export default function TourBody( tour : TourProps) {
  return (
    <>
      <Mdx code={tour.body.code} />
    </>
  );
}
