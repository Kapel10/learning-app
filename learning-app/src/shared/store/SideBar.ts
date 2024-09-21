import { createWithEqualityFn } from 'zustand/traditional';

interface SideBarState {
  isSideBarVisible: boolean;
  setIsSideBarVisible: (state: boolean) => void;
}

export const useSideBarStore = createWithEqualityFn<SideBarState>()((set) => ({
  isSideBarVisible: false,
  setIsSideBarVisible: (state: boolean) => set({ isSideBarVisible: state }),
}));
