import { type ReactNode } from "react";

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
};

export function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul className="divide-y divide-gray-100 pl-0 mb-10">
      {items.map(renderItem)}
    </ul>
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
          <li
            key={item}
            className="list-[circle] list-inside border-bottom-not-last liststyle mb-0 py-4 pl-1 hover:bg-muted/50"
          >
            {item}
          </li>
        )}
      />
    </>
  );
}
