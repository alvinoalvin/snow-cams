import { Instance, types } from "mobx-state-tree";
import { withRootStore } from "../lib/with-root-store";

export const WebcamStoreModel = types
  .model("WebcamStoreModel")
  .props({})
  .extend(withRootStore())
  .views((self) => ({}))
  .actions((self) => ({}));

export interface IWebcamStoreModel extends Instance<typeof WebcamStoreModel> {}
