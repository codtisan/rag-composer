import { create } from "zustand";

interface FileStore {
  files: File[];
  setFiles: (newFiles: File[]) => void;
}

const useFileStore = create<FileStore>((set) => ({
  files: [],
  setFiles: (newFiles) =>
    set((state) => ({ files: [...state.files, ...newFiles] })),
}));

export default useFileStore;
