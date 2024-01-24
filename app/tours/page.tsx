import Link from "next/link";
import { allTours, Tours } from "contentlayer/generated";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import HeroPage from "@/components/page-sections/hero-page";
import TourCard from "@/components/tours/tours-list/tour-card";
import Bounded from "@/components/styledcomps/bounded";
import StaggeredList from "@/components/styledcomps/staggered-list";
import StaggeredListItem from "@/components/styledcomps/staggered-list-item";
import { Heading } from "@/components/styledcomps/heading";

export default function TourHome({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const categoryVariants = ["active", "leisure", "culture"];

  const active = ["", "cycling", "trekking", "multi-activity", "overland"];
  const leisure = ["", "comfort", "offbeat", "wildlife", "roadtrip"];
  const culture = ["", "arunachal", "assam", "nagaland"];

  const tours: Tours[] = allTours
    .filter((tour) => tour.category !== "departures")
    .sort((a, b) => a.weight! - b.weight!)
    .filter((tour) => !tour.draft);

  let selectedCategory = searchParams.category;
  let selectedTag = searchParams.tag;

  const filterByTag = (filteredData: any[]) => {
    if (!selectedTag) {
      return filteredData;
    }
    const filteredTours = filteredData.filter(
      (tour: Tours) => tour.tags?.indexOf(`${selectedTag}`) !== -1
    );
    return filteredTours;
  };
  const filterByCategory = (filteredData: Tours[]) => {
    if (!selectedCategory) {
      return filteredData;
    }
    const filteredTours = filteredData.filter(
      (tour: Tours) => tour.category === selectedCategory
    );
    return filteredTours;
  };
  let filteredData = filterByTag(tours);
  filteredData = filterByCategory(filteredData);

  return (
    <>
      <HeroPage />
      
      <Bounded className="mb-5" width="marginxy">
        <Heading size="xl" variant="sectiontitle">
        Tours
      </Heading>
        <div>
          <div className=" text-center">
            {categoryVariants.map((item, index) => (
              <Link
                key={index}
                href={`?category=${item}&tag=`}
                scroll={false}
                className="mr-3"
              >
                <Button className="capitalize">{item}</Button>
              </Link>
            ))}
          </div>

          <RadioGroup
            defaultValue="option-one"
            className="mt-5 flex-col justify-center"
          >
            <div
              className={
                `${selectedCategory}` === "active"
                  ? "md:flex justify-center"
                  : "hidden"
              }
            >
              {active.map((item, index) => (
                <Link
                  key={index}
                  href={`?category=${selectedCategory}&tag=${item}`}
                  scroll={false}
                  className="mx-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value={item} id={item} />
                    <Label htmlFor={item} className="capitalize">
                      {item || "All"}
                    </Label>
                  </div>
                </Link>
              ))}
            </div>

            <div
              className={
                `${selectedCategory}` === "leisure"
                  ? "md:flex justify-center"
                  : "hidden"
              }
            >
              {leisure.map((item, index) => (
                <Link
                  key={index}
                  href={`?category=${selectedCategory}&tag=${item}`}
                  scroll={false}
                  className="mx-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value={item} id={item} />
                    <Label htmlFor={item} className="capitalize">
                      {item || "All"}
                    </Label>
                  </div>
                </Link>
              ))}
            </div>

            <div
              className={
                `${selectedCategory}` === "culture"
                  ? "md:flex justify-center"
                  : "hidden"
              }
            >
              {culture.map((item, index) => (
                <Link
                  key={index}
                  href={`?category=${selectedCategory}&tag=${item}`}
                  scroll={false}
                  className="mx-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value={item} id={item} />
                    <Label htmlFor={item} className="capitalize">
                      {item || "All"}
                    </Label>
                  </div>
                </Link>
              ))}
            </div>
          </RadioGroup>
        </div>

        <section className="mx-auto mt-20">
          <StaggeredList>
            {filteredData.map((tour: Tours, index) => (
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
                  touricon={tour.touricon}
                  _id={""}
                  _raw={{
                    sourceFilePath: "",
                    sourceFileName: "",
                    sourceFileDir: "",
                    contentType: "data",
                    flattenedPath: "",
                  }}
                  body={{
                    raw: "",
                    code: "",
                  }}
                />
              </StaggeredListItem>
            ))}
          </StaggeredList>
        </section>
      </Bounded>
    </>
  );
}
