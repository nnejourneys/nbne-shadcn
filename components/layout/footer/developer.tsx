import { Button } from "@/components/ui/button";

export default function Developer() {
  return (
    <>
      <div className="text-center">
        <p className="text-xs m-0 font-sm text-foreground/50">
          Designed and Developed by
          <a
            className="hover:text-primary"
            href="https://mohankumar.dev/"
            target="_blank"
          >
            {" "}
            Mohan
          </a>
        </p>
      </div>
    </>
  );
}
