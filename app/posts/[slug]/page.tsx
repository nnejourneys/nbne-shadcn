import React from "react";
import { notFound } from "next/navigation";
import { allPosts, Posts } from "contentlayer/generated";
import Bounded from "@/components/styledcomps/bounded";
import { BASE_PATH, SITE_TITLE } from "@/lib/constants";
import { PostBody } from "@/components/posts/post-body"; 
import PostHeader from "@/components/posts/post-header";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  // const filepath = `posts/${params.slug}`;
  // const post = allPosts.find((post) => post._raw.flattenedPath === filepath);
  const post = allPosts.find((post) => post.slug === params.slug);

  // if (!post) throw new Error(`Tour does not exist! ${params.slug}`);
  if (!post) {
    return {}
  }

  return {
    title: `${post.title} | ${SITE_TITLE}`,
    description: post.excerpt,
    generator: "Next.js",
    referrer: "origin-when-cross-origin",
    keywords: post.excerpt,
    authors: [{ name: "Roheen Browne" }, { name: "Mohan Kumar", url: "/" }],
    creator: "Mohan Kumar",
    publisher: "Roheen Browne",
    metadataBase: new URL(`${BASE_PATH}`),
    alternates: {
      canonical: `/tours/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | ${SITE_TITLE}`,
      description: post.excerpt,
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
  // const filepath = `posts/${params.slug}`;
  // const post = allPosts.find((post) => post._raw.flattenedPath === filepath);

  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="mb-0 py-1">
        <Bounded width="marginxy" className="mb-0"  >
          <article className="max-w-2xl mx-auto py-6 prose dark:prose-invert">
            {post.title && (
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                slug={post.slug}
                author={post.author}
                date={post.date}
                _id={""}
                _raw={{
                  sourceFilePath: "",
                  sourceFileName: "",
                  sourceFileDir: "",
                  contentType: "data",
                  flattenedPath: "",
                }}
                type={"Posts"}
                body={{
                  raw: "",
                  code: "",
                }}
              />
            )}
            {post.body && <PostBody code={post.body.code} />}
          </article>
        </Bounded>
      </section>
    </>
  );
}
