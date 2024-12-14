import { IframeHTMLAttributes } from "react";
import { Card, Image, Title } from "@mantine/core";
interface WebCamProps extends IframeHTMLAttributes<HTMLIFrameElement> {
  type: "iframe" | "image";
  title: string;
  mountain: string;
}

export const WebCam = (props: WebCamProps) => {
  return (
    <Card shadow="md" padding="sm" radius="md" withBorder w="30em" h={"30em"}>
      {props.type === "iframe" ? (
        <iframe height="100%" {...props} />
      ) : (
        <Image src={props.src} fit={"fill"} radius="md" />
      )}
      <Card.Section  ta={"center"}>
        <Title order={5}>
        {props.mountain}
        </Title>
        <Title order={3}>
        {props.title}
        </Title>
      </Card.Section>
    </Card>
  );
};
