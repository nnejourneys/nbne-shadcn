import { compareDesc } from "date-fns";
import { allPosts, Posts } from "contentlayer/generated";
import PostItem from "@/components/posts/post-item";
import Bounded from "@/components/styledcomps/bounded";
import HeroPage from "@/components/page-sections/hero-page";

export default function PostsPage() {
  const posts: Posts[] = allPosts
    .filter((post) => !post.draft)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <>
      <HeroPage />
      <Bounded width="marginxy">
        <PostItem posts={posts} />
      </Bounded>
    </>
  );
}
