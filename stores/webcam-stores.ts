import { Instance, types } from "mobx-state-tree";
import { withRootStore } from "../lib/with-root-store";
import { WebcamModel } from "../model/webcam";
import { PrismaClient } from "@prisma/client";

export const WebcamStoreModel = types
  .model("WebcamStoreModel")
  .props({
    webcams: types.array(WebcamModel),
  })
  .extend(withRootStore())
  .views((self) => ({}))
  .actions((self) => ({
    getInitialCams() {
      /* TODO Axios request to api */
    },
  }));

export interface IWebcamStoreModel extends Instance<typeof WebcamStoreModel> {}
