import HeroPage from "@/components/page-sections/hero-page";
import Bounded from "@/components/styledcomps/bounded";
import { Heading } from "@/components/styledcomps/heading";
import StaggeredList from "@/components/styledcomps/staggered-list";
import StaggeredListItem from "@/components/styledcomps/staggered-list-item";
import TourCard from "@/components/tours/tours-list/tour-card";
import { allTours } from "contentlayer/generated";

export default function Departures() {
  const tours = allTours
    .filter((tour) => tour.category === "departures")
    .sort((a, b) => a.weight! - b.weight!)
    .filter((tour) => !tour.draft);

  return (
    <>
    <HeroPage />
      <Bounded width="marginxy">
        <Heading size="xl" variant="sectiontitle" > Fixed Departures 2024 </Heading>
        <section className="mx-auto">
          <StaggeredList>
            {tours.map((tour, index) => (
              <StaggeredListItem key={index}>
                <TourCard
                  title={tour.title}
                  slug={tour.slug}
                  subtitle={tour.subtitle}
                  days={tour.days}
                  bg_image={tour.bg_image}
                  type={tour.type}
                  tourtype={tour.tourtype}
                  category={tour.category}
                  cat={tour.cat}
                  weight={tour.weight}
                  touricon={tour.touricon} _id={""} _raw={{
                    sourceFilePath: "",
                    sourceFileName: "",
                    sourceFileDir: "",
                    contentType: "data",
                    flattenedPath: ""
                  }} body={{
                    raw: "",
                    code: ""
                  }}                  />
              </StaggeredListItem>
            ))}
          </StaggeredList>
        </section>
      </Bounded>
    </>
  );
}
