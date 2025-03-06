import { WebCam } from "../components/WebCam";
import { PrismaClient } from "@prisma/client";
import { Grid, Select } from "@mantine/core";
import { Pool, neonConfig } from "@neondatabase/serverless";
import dotenv from "dotenv";
import ws from "ws";
import { useState } from "react";
import { getUniques } from "../lib/helpers/toolbox";
import { useMst } from "../lib/hooks/useMst";

dotenv.config();
neonConfig.webSocketConstructor = ws;
const connectionString = `${process.env.DATABASE_URL}`;

const pool = new Pool({ connectionString });

interface ICam {
  link: string;
  title: string;
  id: number;
  mountain: string;
  type: "iframe" | "image";
}
export default function IndexPage({ cams }: any) {
  /* Test use MST  */
  let { webcamStore } = useMst();
  webcamStore.getInitalCams();
  // const [searchedCams, setSearchedCams] = useState(cams);
  const [filteredCams, setFilteredCams] = useState([cams]);
  const mountainOptions: Array<string> = getUniques(
    cams.map((cam: ICam) => cam.mountain)
  );

  // const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
  //   setSearchedCams(
  //     cams.filter((cam: ICam) =>
  //       cam.mountain.toLowerCase().includes(e.target.value.toLowerCase())
  //     )
  //   );
  // };

  const handleFilter = (filterValue: string | null) => {
    !filterValue
      ? setFilteredCams([])
      : setFilteredCams(
          cams.filter((cam: ICam) =>
            cam.mountain.toLowerCase().includes(filterValue.toLowerCase())
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
          {/* <TextInput
            id="cam-search-input"
            placeholder="Search..."
            w={"12.5rem"}
            onChange={(e) => handleSearch(e)}
          /> */}
          <Select
            id="cam-search-select"
            data={["All", ...mountainOptions]}
            defaultValue={"All"}
            onChange={(_value) => {
              _value === "All"
                ? setFilteredCams(filteredCams)
                : handleFilter(_value);
            }}
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
