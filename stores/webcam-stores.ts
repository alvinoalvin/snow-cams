import { Instance, types } from "mobx-state-tree";
import { withRootStore } from "../lib/with-root-store";
import { WebcamModel } from "../model/webcam";
import { PrismaClient } from "@prisma/client";

export const WebcamStore = types
  .model("WebcamStore")
  .props({
    webcams: types.array(WebcamModel),
  })
  .extend(withRootStore())
  .views((self) => ({}))
  .actions((self) => ({
    getInitalCams() {
    },
  }));

export interface IWebcamStore extends Instance<typeof WebcamStore> {}
