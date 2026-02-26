import create from 'zustand';

interface SortState {
    sortBy: 'population' | 'name';
    setSortBy: (sortBy: 'population' | 'name') => void;
}

export const useSortStore = create<SortState>((set) => ({
    sortBy: 'population',
    setSortBy: (sortBy) => set({ sortBy }),
}));