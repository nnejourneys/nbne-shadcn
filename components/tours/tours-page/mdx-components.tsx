import Image from "next/image";
import { H1 } from "@/components/ui/h1";
import { H2 } from "@/components/ui/h2";
import { H3 } from "@/components/ui/h3";
import { H4 } from "@/components/ui/h4";
import { P } from "@/components/ui/p";
import { useMDXComponent } from "next-contentlayer/hooks";

const components = {
  Image,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="md:col-span-4 text-justify mb-4">
      <Component components={components} />
    </div>
  );
}
