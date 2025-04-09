import { HTMLAttributeReferrerPolicy, IframeHTMLAttributes } from "react";

interface WebCamIframeProps extends IframeHTMLAttributes<HTMLIFrameElement> {
  allowFullScreen?: boolean;
  frameBorder?: string;
  referrerPolicy?: HTMLAttributeReferrerPolicy;
  align?: string;
}

export const WebCamIframe = (props: WebCamIframeProps) => {
  return <iframe {...props} style={{ background: "black", color: "white" }} />;
};
