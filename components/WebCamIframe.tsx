import { IframeHTMLAttributes } from "react";

interface WebCamIframeProps extends IframeHTMLAttributes<HTMLIFrameElement> {
  allowfullscreen?: string;
  frameborder?: string;
  referrerpolicy?: string;
}

export const WebCamIframe = (props: WebCamIframeProps) => {
  return <iframe {...props} style={{ background: "black",color:"white" }} />;
};
 