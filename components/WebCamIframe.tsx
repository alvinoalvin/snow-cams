import { IframeHTMLAttributes } from "react";

interface WebCamIframeProps extends IframeHTMLAttributes<HTMLIFrameElement> {
  allowFullScreen?: boolean | undefined;
  frameBorder?: string;
  referrerpolicy?: string;
  align?: string;
}

export const WebCamIframe = (props: WebCamIframeProps) => {
  return <iframe {...props} style={{ background: "black", color: "white" }} />;
};
