import { IStateTreeNode, types } from "mobx-state-tree";
import { WebcamStoreModel, IWebcamStoreModel } from "./webcam-stores";
export const RootStoreModel = types
  .model("RootStoreModel")
  .props({
    webcamStore: types.optional(WebcamStoreModel, {}),
  })
  .actions((self) => ({}));

export interface IRootStore extends IStateTreeNode {
  webcamStore: IWebcamStoreModel;
}
