import Avatar from "./post-avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import Image from "next/image";
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
      <CoverImage
      src={coverImage!} width={0} 
        // slug={slug}
        // title={title}
               
        // height={278}
        // width={556}
      />
       
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
        <p>{excerpt}</p>
      </CardContent>
      <CardFooter>
        <AvatarPost author={author} />
      </CardFooter>
    </Card>
  );
}
