import { IframeHTMLAttributes } from "react";
import { Card, Image, Title } from "@mantine/core";
import { WebCamIframe } from "./WebCamIframe";
interface WebCamProps extends IframeHTMLAttributes<HTMLIFrameElement> {
  type: "iframe" | "image";
  title: string;
  mountain: string;
  src: string;
}

export const WebCam = (props: WebCamProps) => {
  const imgTime = new Date();
  return (
    <Card shadow="md" padding="sm" radius="md" withBorder w="30em" h={"30em"}>
      {props.type === "iframe" ? (
        <WebCamIframe
          className={props.className}
          src={String.raw`${props.src}`}
          height="100%"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          loading="lazy"
          allowFullScreen={true}
          frameborder="0"
          referrerpolicy="origin"
          align="center"
        />
      ) : (
        <Image
          className={props.className}
          src={
            props.src +
            "?timestamp=" +
            String(imgTime.getTime()).substring(0, 10)
          }
          alt={props.title}
          fit={"fill"}
          radius="md"
        />
      )}
      <Card.Section ta={"center"}>
        <Title order={5}>{props.mountain}</Title>
        <Title order={3}>{props.title}</Title>
      </Card.Section>
    </Card>
  );
};
