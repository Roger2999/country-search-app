export type SortOrder = 'asc' | 'desc' | 'none';

export interface SortState {
  sortOrder: SortOrder;
  setSortOrder: (order: SortOrder) => void;
  toggleSort: () => void;
}

export const SORT_LABEL: Record<SortOrder, string> = {
  asc: 'Population (Low to High)',
  desc: 'Population (High to Low)',
  none: 'Default',
};