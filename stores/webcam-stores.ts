import { Instance, types } from "mobx-state-tree";
import { withRootStore } from "../lib/with-root-store";
import { IWebcamModel, WebcamModel } from "../model/webcam";
import axios from "axios";

export const WebcamStore = types
  .model("WebcamStore")
  .props({
    webcams: types.array(WebcamModel),
  })
  .extend(withRootStore())
  .views((self) => ({}))
  .actions((self) => ({
    async getInitalCams(): Promise<void> {
      axios
        .get("/api/webcams")
        .then((res) => {
          // self.webcams.replace(res.data as IWebcamModel);
          this.setWebcams(res.data as IWebcamModel);
        })
        .catch((err) => {
          console.log("there was an retrieving inital webcams: ", err);
        });
    },

    setWebcams(newCams: IWebcamModel[]): void {
      self.webcams.replace(newCams);
    },
  }));

export interface IWebcamStore extends Instance<typeof WebcamStore> {}
