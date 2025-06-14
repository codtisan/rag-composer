// store.ts
import { create } from "zustand";

interface SelectedMenuItemStore {
  selectedMenuItem: string;
  setSelectedMenuItem: (newText: string) => void;
}

const useSelectedMenuItemStore = create<SelectedMenuItemStore>((set) => ({
  selectedMenuItem: "",
  setSelectedMenuItem: (newMenuItem: string) =>
    set({ selectedMenuItem: newMenuItem }),
}));

export default useSelectedMenuItemStore;
