import { useContext } from "react";
import { RootStoreContext } from "../../setup";

export function useMst() {
  const store = useContext(RootStoreContext);
  if (!store) {
    throw new Error("Store must be defined, please add a context provider");
  }
  return store;
}
