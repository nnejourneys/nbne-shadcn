import { type ReactNode } from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
};

export function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <Table>
      <TableBody>{items.map(renderItem)} </TableBody>
    </Table>
  );
}

export default function ListItem<T extends string | undefined>({
  items,
}: ListProps<T>) {
  return (
    <>
      <List
        items={items}
        renderItem={(item) => (
          <TableRow
            key={item}
            // className="font-medium list-[circle] list-inside"
          >
            <TableCell>
              <li className="list-circle">{item}</li>
            </TableCell>
          </TableRow>
        )}
      />
    </>
  );
}
