import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const createStore = <T>(
  storeName: string,
  initializer: (set: any, get: any, api: any) => T
) => {
  return create<T>()(
    devtools(initializer, {
      name: storeName,
    })
  );
};