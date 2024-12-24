import { useEffect } from "react";
import { WebCam } from "../components/WebCam";
import { PrismaClient } from "@prisma/client";
import { Grid } from "@mantine/core";

interface ICam {
  id: number;
  title: string;
  mountain: string;
  type: "iframe" | "image";
  link: string;
}
export default function IndexPage({ cams }: any) {
  return cams.length <= 0 ? (
    <>Loading...</>
  ) : (
    <Grid gutter={"md"}>
      {cams.map((cam: ICam) => {
        return (
          <Grid.Col key={cam.id} span={4}>
            <WebCam
              className="aspect-video h-auto w-full"
              src={cam.link}
              loading="lazy"
              title={cam.title}
              mountain={cam.mountain}
              type={cam.type}
            />
          </Grid.Col>
        );
      })}
    </Grid>
  );
}

export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const cams = await prisma.cams.findMany();
  return { props: { cams } };
}
