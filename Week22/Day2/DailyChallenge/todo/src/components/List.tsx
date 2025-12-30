import type React from "react";

type ListProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  emptyMessage?: React.ReactNode;
};

export function List<T>({ items, renderItem, emptyMessage }: ListProps<T>) {
  if (items.length === 0) return <>{emptyMessage ?? <p>No items.</p>}</>;
  return <>{items.map((item, index) => renderItem(item, index))}</>;
}
