// import TourProps from "@/types";
import React from "react";

type AccoProps = {
  meals: string;
  accommodation: string | undefined;
  refreshments: string | undefined;
};
 
export default function TouraccoList({
  meals,
  accommodation,
  refreshments,
}: AccoProps) {
  return (
    <>
      <ul role="list" className="divide-y divide-gray-100">
        {meals ? (
          <li className="flex justify-between py-3 hover:bg-muted/50">
            <p className="my-1">
              <b className="fw-bolder text-muted-foreground">Meals</b>
              <br />
              {meals} 
            </p>
          </li>
        ) : null}
        {accommodation ? (
          <li className="flex justify-between py-3 border-bottom-not-last hover:bg-muted/50">
            <p className="my-1">
              <b className="fw-bolder text-muted-foreground">Accommodation</b>
              <br />
              {accommodation}
            </p>
          </li>
        ) : null}
        {refreshments ? (
          <li className="flex justify-between py-3 border-bottom-not-last hover:bg-muted/50">
            <p className="my-1">
              <b className="fw-bolder text-muted-foreground">Refreshments</b>
              <br />
              {refreshments}
            </p>
          </li>
        ) : null}
      </ul>
    </>
  );
}
