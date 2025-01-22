import { WebCam } from "../components/WebCam";
import { PrismaClient } from "@prisma/client";
import { Grid } from "@mantine/core";
import { Pool, neonConfig } from '@neondatabase/serverless'
import { PrismaNeon } from '@prisma/adapter-neon'
import dotenv from 'dotenv'
import ws from 'ws'

dotenv.config()
neonConfig.webSocketConstructor = ws
const connectionString = `${process.env.DATABASE_URL}`

const pool = new Pool({ connectionString })
const adapter = new PrismaNeon(pool)

interface ICam {
  id: number;
  title: string;
  mountain: string;
  type: "iframe" | "image";
  link: string;
}
export default function IndexPage({ cams }: any) {
  /* Test use MST  */
  // const { webcamStore } = useMst();
  // useEffect(() => {
  //   webcamStore.getInitialCams();
  // }, []);
  // cams = webcamStore.webcams;

  return cams.length <= 0 ? (
    <>Loading...</>
  ) : (
    <Grid
      gutter={{ base: 5, xs: "md", md: "xl", xl: 50 }}
      w={{ xs: "80%", md: "100%", lg: "85%", xl: "80%" }}
      m="auto"
    >
      {cams.map((cam: ICam) => {
        return (
          <Grid.Col key={cam.id} span={{ sm: 12, md: 6, xl: 4 }}>
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
  );
}

export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const cams = await prisma.cams.findMany();
  return { props: { cams } };
}
