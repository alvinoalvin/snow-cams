import { WebCam } from "../components/WebCam";
import { PrismaClient } from "@prisma/client";
import { Grid, TextInput } from "@mantine/core";
import { Pool, neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import dotenv from "dotenv";
import ws from "ws";
import { ChangeEvent, useState } from "react";

dotenv.config();
neonConfig.webSocketConstructor = ws;
const connectionString = `${process.env.DATABASE_URL}`;

const pool = new Pool({ connectionString });
const adapter = new PrismaNeon(pool);

interface ICam {
  link: string;
  title: string;
  id: number;
  mountain: string;
  type: "iframe" | "image";
}
export default function IndexPage({ cams }: any) {
  /* Test use MST  */
  const [filteredCams, setFilteredCams] = useState(cams);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setFilteredCams(
      cams.filter((cam: ICam) =>
        cam.mountain.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
  return cams.length <= 0 ? (
    <>Loading...</>
  ) : (
    <>
      <Grid
        gutter={{ base: 5, xs: "md", md: "xl", xl: 50 }}
        w={{ xs: "95%", md: "90%", lg: "90%", xl: "95%" }}
        m="auto"
      >
        <Grid.Col span={12}>
          <TextInput
            placeholder="Search..."
            w={"12.5rem"}
            onChange={(e) => handleSearch(e)}
          />
        </Grid.Col>
        {filteredCams.map((cam: ICam) => {
          return (
            <Grid.Col key={cam.id} span={"auto"}>
              <WebCam
                className="aspect-video h-auto w-full"
                src={cam.link}
                title={cam.title}
                mountain={cam.mountain}
                type={cam.type}
              />
            </Grid.Col>
          );
        })}
      </Grid>
    </>
  );
}

export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const cams = await prisma.cams.findMany();
  return { props: { cams } };
}
