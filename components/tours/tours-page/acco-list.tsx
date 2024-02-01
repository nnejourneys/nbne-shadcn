import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

type AccoProps = {
  meals: string;
  accommodation: string | undefined;
  refreshments: string | undefined;
};

export default function TouraccoList({
  meals,
  accommodation,
  refreshments,
}: AccoProps) {
  return (
    <>
      <Table>
        {meals ? (
          <TableRow>
            <TableCell>
              <p>
                <b className="fw-bolder text-muted-foreground">Meals</b>
                <br />
                {meals}
              </p>
            </TableCell>
          </TableRow>
        ) : null}
        {accommodation ? (
          <TableRow>
            <TableCell>
              <p>
                <b className="fw-bolder text-muted-foreground">Accommodation</b>
                <br />
                {accommodation}
              </p>
            </TableCell>
          </TableRow>
        ) : null}
        {refreshments ? (
          <TableRow>
            <TableCell>
              <p>
                <b className="fw-bolder text-muted-foreground">Refreshments</b>
                <br />
                {refreshments}
              </p>
            </TableCell>
          </TableRow>
        ) : null}
      </Table>
    </>
  );
}
