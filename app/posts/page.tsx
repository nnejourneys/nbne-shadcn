import Link from "next/link";
import { allPosts, Posts } from "contentlayer/generated";
import PostItem from "@/components/posts/post-item";
import Bounded from "@/components/styledcomps/bounded";
import HeroPage from "@/components/page-sections/hero-page";

export default function PostsPage() {
  const posts: Posts[] = allPosts
    // .sort((a, b) => a.weight! - b.weight!)
    .filter((post) => !post.draft);

  return (
    <>
    <HeroPage/>
      <Bounded width="marginxy">
        <PostItem posts={posts} />
      </Bounded>
    </>
  );
}
