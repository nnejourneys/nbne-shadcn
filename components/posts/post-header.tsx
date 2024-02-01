import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import { H1 } from "../ui/h1";
import { Posts } from "@/.contentlayer/generated";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PostImage from "./post-image";

export default function PostHeader({
  title,
  coverImage,
  slug,
  author,
  date,
}: Posts) {
  return (
    <>
      {title && <H1>{title}</H1>}
      {coverImage &&
      <PostImage 
        src={coverImage}
        width={556}
      />}

      {author && (
        <div className="my-5">
          {author.map((item: any) => (
            <>
              <Avatar>
                <AvatarImage src={item.picture} />
                <AvatarFallback>{item.initials}</AvatarFallback>
              </Avatar>
              <p className="font-semibold text-md my-3">{item.name}</p>
            </>
          ))}
          <div className="mb-5 text-muted-foreground">
            <DateFormatter dateString={date} />
          </div>
        </div>
      )}
    </>
  );
}
