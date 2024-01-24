import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

import { type ReactNode } from "react";

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
};

// type itemProps = { l: string; d: string };

export function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <Table>
      <TableBody >{items.map(renderItem)}</TableBody>
    </Table>
  );
}

export default function TouroversList<T>({ items }: ListProps<T>) {
  return (
    <>
      <List 
        items={items}
        renderItem={(item: any) => (
          <TableRow>
            <TableCell className="font-medium">
              <b className="text-muted-foreground">{item.l}</b>
              <p>{item.d}</p>
            </TableCell>
          </TableRow>
        )}
      />
    </>
  );
}
