import { withRootStore } from "../lib/with-root-store";
import { Instance, types } from "mobx-state-tree";

export const WebcamModel: any = types
  .model("WebcamModel")
  .props({
    id: types.identifier,
    title: types.string,
    mountain: types.string,
    type: types.union(types.literal("iframe"), types.literal("image")),
    link: types.string,
  })
  .extend(withRootStore())
  .views((self) => ({}))
  .actions((self) => ({}));

export interface IWebcamModel extends Instance<typeof WebcamModel> {}
