import clsx from "clsx";
type BoundedProps = {
  as?: React.ElementType;
  width?: "marginxy" | "marginx" | "fluidmy" | "fluid";
  className?: string;
  children: React.ReactNode;
};

export default function Bounded({
  as: Comp = "section",
  width = "fluid",
  className,
  children,
  ...restProps
}: BoundedProps) {
  return (
    <Comp
      className={clsx(
        " ",
        width === "marginxy" &&
          "sm:max-w-xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl px-2 md:px-0 mx-auto my-28",
        width === "marginx" &&
          "sm:max-w-xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl px-2 md:px-0 mx-auto",
        width === "fluidmy" && "w-full my-28",
        width === "fluid" && "w-full",
        className
      )}
      {...restProps}
    >
      <div>{children}</div>
    </Comp>
  );
}
