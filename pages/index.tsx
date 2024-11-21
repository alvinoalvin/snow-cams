import { Button, Group } from "@mantine/core";

export default function IndexPage() {
  return (
    <Group mt={50} justify="center">
      <Button size="xl">Welcome to Mantine!</Button>
      <iframe
        className="aspect-video h-auto w-full"
        src="https://www.skaping.com/cypress-mountain/mount-strachan"
        loading="lazy"
        title="Sky Chair Camera"
      ></iframe>
    </Group>
  );
}
