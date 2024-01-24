import { Button } from "@/components/ui/button";

export default function Copyright({ footerdata }: any) {
  return (
    <>
      <div className="pt-5 pb-10 relative">
        <p className="me-1 text-muted-foreground ">
          © {new Date().getFullYear()} {footerdata.copyright}
          <a
            // className="text-muted-foreground  transition duration-150 ease-out hover:text-nne-primary"
            href={footerdata.email.link}
          >
            <Button variant="link" className="text-muted-foreground ">
              {footerdata.email.name}
            </Button>
          </a>
        </p>
      </div>
    </>
  );
}
