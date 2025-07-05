import { create } from "zustand";
import { devtools } from "zustand/middleware";

import {
  createProductSlice,
  createCartDropdownSlice,
  createCartSlice,
} from "./slices";

// The devtools middleware enables inspection of Zustand state and actions in the Redux DevTools browser extension.
export const useStore = create(
  devtools(
    (set, get) => ({
      ...createProductSlice(set, get),
      ...createCartDropdownSlice(set, get),
      ...createCartSlice(set, get),
    }),
    { name: "FingertipsStore" }
  )
);
