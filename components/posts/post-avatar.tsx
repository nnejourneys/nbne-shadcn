import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; 

export default function AvatarPost({author}: any ) {
  return (
    <div className="flex items-center">
      {author.map((item: any) => (
        <>
          <Avatar>
            <AvatarImage src={item.picture} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="font-semibold text-md ml-5 my-3">{item.name}</p>
        </>
      ))}
    </div>
  );
}
