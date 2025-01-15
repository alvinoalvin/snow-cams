import { Instance } from "mobx-state-tree";
import { createContext, ReactNode } from "react";
import { RootStoreModel } from "../stores/root-stores";

const initialState = {};

export const rootStore = RootStoreModel.create(initialState);
export type RootInstance = Instance<typeof RootStoreModel>;
export const RootStoreContext = createContext<RootInstance | null>(null);

interface IMstProviderProps {
  initialState?: RootInstance;
  children: ReactNode;
}

export const MstProvider = ({
  initialState = rootStore,
  children,
}: IMstProviderProps) => (
  <RootStoreContext.Provider value={initialState}>
    {children}
  </RootStoreContext.Provider>
);
