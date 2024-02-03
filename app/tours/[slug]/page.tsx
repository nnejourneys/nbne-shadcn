import React from "react";
import { notFound } from "next/navigation";
import { allTours, Tours } from "contentlayer/generated";
import { Mdx } from "@/components/tours/tours-page/mdx-components";
import TourCoverImage from "@/components/tours/tours-page/cover-image";
import Bounded from "@/components/styledcomps/bounded";
import TouroversList from "@/components/tours/tours-page/overs";
import TouraccoList from "@/components/tours/tours-page/acco-list";
import EnquiryForm from "@/components/tours/tours-page/enquiry-form";
import Othertours from "@/components/tours/tours-page/othertours";
import Gallery from "@/components/tours/tours-page/gallery";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heading } from "@/components/styledcomps/heading";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import TourOverviewItem from "@/components/tours/tours-page/overview-item";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ListItem from "@/components/tours/tours-page/list-item";
import { BASE_PATH, SITE_TITLE } from "@/lib/constants";

export const generateStaticParams = async () =>
  allTours.map((tour) => ({ slug: tour._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const tour = allTours.find((tour) => tour.slug === params.slug);
  if (!tour) {
    return {};
  }

  return {
    title: `${tour.title} | ${SITE_TITLE}`,
    description: tour.description,
    generator: "Next.js",
    referrer: "origin-when-cross-origin",
    keywords: tour.keywords,
    authors: [{ name: "Roheen Browne" }],
    creator: "Roheen Browne",
    publisher: "Roheen Browne",
    metadataBase: new URL(`${BASE_PATH}`),
    alternates: {
      canonical: `/tours/${tour.slug}`,
    },
    openGraph: {
      title: `${tour.title} | ${SITE_TITLE}`,
      description: tour.description,
      authors: ["Roheen Browne", "Mohan"],
      images: "/images/og-logo.png",
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
      },
    },
  };
};

export default async function TourPage({
  params,
}: {
  params: { slug: string };
}) {
  const tour = allTours.find((tour) => tour.slug === params.slug);
  if (!tour) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    image: tour.image,
    description: tour.description,
  };

  return (
    <>
      {tour.title && (
        <TourCoverImage
          title={tour.title}
          subtitle={tour.subtitle}
          days={tour.days}
          image={tour.image}
        />
      )}
      <section className="mb-0 py-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Bounded width="marginx" className="mb-0 overflow-x-hidden">
          <article className="py-6 prose dark:prose-invert">
            {tour.description && (
              <p className="font-bold text-xl text-center my-10">
                {tour.description}
              </p>
            )}

            <div className="flex flex-col md:flex-row justify-start gap-4 mb-10">
              {tour.overview ? (
                <Card className="w-full md:max-w-96 min-h-fit float-left mx-auto md:mx-0 mr-0 md:mr-5 mb-5 md:mb-0">
                  <ul className="divide-y divide-muted p-3">
                    {tour.overview.map((item: any, index) => (
                      <TourOverviewItem
                        key={index}
                        data={item.data}
                        label={item.label}
                        icon={item.icon}
                      />
                    ))}
                  </ul>
                </Card>
              ) : null}

              {tour.highlights ? (
                <div>
                  <Heading>Tour Highlights</Heading>
                  <ListItem
                    items={tour.highlights}
                    renderItem={function (): React.ReactNode {
                      throw new Error("Function not implemented.");
                    }}
                  />
                </div>
              ) :  null } 
            </div>

            {tour.body ? <Mdx code={tour.body.code} /> : null}

            <div className="grid lg:grid-cols-2 gap-4 mb-10">
              <div>
                {tour.overs ? (
                  <Tabs defaultValue="overview" className="w-full mt-10">
                    <TabsList>
                      {tour.overs ? (
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                      ) : null}
                      {/* {tour.highlights ? (
                        <TabsTrigger value="highlights">Highlights</TabsTrigger>
                      ) : null} */}
                      {tour.inclusions ? (
                        <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
                      ) : null}
                      {tour.exclusions ? (
                        <TabsTrigger value="exclusions">Exclusions</TabsTrigger>
                      ) : null}
                      {tour.meals ? (
                        <TabsTrigger value="accomodation">
                          Accomodation
                        </TabsTrigger>
                      ) : null}
                    </TabsList>

                    {tour.overs ? (
                      <TabsContent value="overview">
                        {tour.overs && (
                          <TouroversList
                            items={tour.overs}
                            renderItem={function (): React.ReactNode {
                              throw new Error("Function not implemented.");
                            }}
                          />
                        )}
                      </TabsContent>
                    ) : null}

                    {/* {tour.highlights ? (
                      <TabsContent value="highlights">
                        {tour.highlights && (
                          <ListItem
                            items={tour.highlights}
                            renderItem={function (): React.ReactNode {
                              throw new Error("Function not implemented.");
                            }}
                          />
                        )}
                      </TabsContent>
                    ) : null} */}
                    {tour.inclusions ? (
                      <TabsContent value="inclusions">
                        {tour.inclusions && (
                          <ListItem
                            items={tour.inclusions}
                            renderItem={function (): React.ReactNode {
                              throw new Error("Function not implemented.");
                            }}
                          />
                        )}
                      </TabsContent>
                    ) : null}
                    {tour.exclusions ? (
                      <TabsContent value="exclusions">
                        {tour.exclusions && (
                          <ListItem
                            items={tour.exclusions}
                            renderItem={function (): React.ReactNode {
                              throw new Error("Function not implemented.");
                            }}
                          />
                        )}
                      </TabsContent>
                    ) : null}
                    {tour.meals ? (
                      <TabsContent value="accomodation">
                        {tour.meals && (
                          <TouraccoList
                            meals={tour.meals}
                            accommodation={tour.accommodation}
                            refreshments={tour.refreshments}
                          />
                        )}
                      </TabsContent>
                    ) : null}
                  </Tabs>
                ) : null}
              </div>
              <div className="mt-10">
                {tour.faq ? (
                  <>
                    <p className="bg-muted w-full inline-flex h-9 items-center rounded-lg px-3 py-1 text-xs md:text-sm font-medium mb-3">
                      FAQ
                    </p>
                    <Accordion type="single" collapsible>
                      {tour.faq.map((item: any, index) => (
                        <AccordionItem key={index} value={item.title}>
                          <AccordionTrigger className="text-lg font-semibold px-2">
                            {item.title}
                          </AccordionTrigger>
                          <AccordionContent>{item.text}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </>
                ) : null}
              </div>
            </div>
            {tour.galleryimages && (
              <Gallery galleryImages={tour.galleryimages} />
            )}

            <Separator className="mt-10" />
            <Heading className="mt-10">Enquire about this tour.</Heading>
            <EnquiryForm title={tour.title} />

            <div className="my-12">
              <h6 className="py-8 text-destructive fw-light text-center">
                * Our Itineraries are quite unique hence we prefer not to put it
                up on the site. Please write in to us for the detailed itinerary
                and cost.
              </h6>
              <Separator />
            </div>
          </article>
        </Bounded>
        {tour.othertours ? (
          <Othertours tourtype={tour.tourtype} othertours={tour.othertours} />
        ) : null}
      </section>
    </>
  );
}
