export type SortOrder = "asc" | "desc" | "none";

export interface SortState {
  sortOrder: SortOrder;
  setSortOrder: (order: SortOrder) => void;
  toggleSort: () => void;
}
