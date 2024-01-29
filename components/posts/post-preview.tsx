import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import { Posts } from "@/.contentlayer/generated";
import AvatarPost from "./post-avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Posts) {
  return (
    <Card>
      <CoverImage src={coverImage} width={0} />
      <CardHeader>
        <CardTitle>
          <Link
            href={`/posts/${slug}`}
            className="text-2xl font-semibold hover:text-primary"
          >
            {title}
          </Link>
        </CardTitle>
        <CardDescription>
          <DateFormatter dateString={date} />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3 mb-3">{excerpt}</p>
        <Link
          href={`/posts/${slug}`}
          className="text-2xl font-semibold hover:text-primary"
        >
          <Button>Read more</Button>{" "}
        </Link>
      </CardContent>
      <CardFooter>
        <AvatarPost author={author} />
      </CardFooter>
    </Card>
  );
}
