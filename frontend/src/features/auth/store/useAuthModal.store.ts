import {create} from "zustand";

type State = {
    isOpen:boolean;
    mode: "login" | "register";
    open: (mode?: "login" | "register") => void;
    close : () => void;
}

export const useAuthModal = create<State>((set) => ({
  isOpen: false,
  mode: "login",
  open: (mode = "login") => set({ isOpen: true, mode }),
  close: () => set({ isOpen: false }),
}));