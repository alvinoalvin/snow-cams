import { IStateTreeNode, types } from "mobx-state-tree";
import { WebcamStore, IWebcamStore } from "./webcam-stores";
export const RootStoreModel = types
  .model("RootStoreModel")
  .props({
    webcamStore: types.optional(WebcamStore, {}),
  })
  .actions((self) => ({}));

export interface IRootStore extends IStateTreeNode {
  webcamStore: IWebcamStore;
}
