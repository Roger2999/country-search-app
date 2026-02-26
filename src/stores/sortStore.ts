import create from 'zustand';
import { persist } from 'zustand/middleware';

interface SortState {
    sortBy: string;
    sortOrder: 'asc' | 'desc';
    setSort: (sortBy: string, sortOrder: 'asc' | 'desc') => void;
}

const useSortStore = create<SortState>(persist(
    (set) => ({
        sortBy: 'name',
        sortOrder: 'asc',
        setSort: (sortBy, sortOrder) => set({ sortBy, sortOrder }),
    }),
    {
        name: 'sort-storage', // unique name
        getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
    }
));

export default useSortStore;
