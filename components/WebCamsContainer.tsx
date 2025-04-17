import { WebCam, WebCamProps } from "../components/WebCam";
import { Grid, Select, Image, Box } from "@mantine/core";

import { useEffect, useState } from "react";
import { getUniques } from "../lib/helpers/toolbox";
import { IWebcamModel } from "../model/webcam";
import { observer } from "mobx-react-lite";
import { useMst } from "../lib/hooks/useMst";

export const WebCamsContainer = observer(() => {
  /* Test use MST  */
  let { webcamStore } = useMst();
  let webcams = webcamStore.webcams;

  // const   [searchedCams, setSearchedCams] = useState(cams);
  const [filteredCams, setFilteredCams] = useState([] as Array<WebCamProps>);
  const mountainOptions: Array<string> = getUniques(
    webcams.map((cam: WebCamProps) => cam.mountain)
  );

  // Hack to set initial filteredCams as webcams declared after inital render
  useEffect(() => {
    if (filteredCams.length === 0) setFilteredCams(webcams);
  }, [webcams]);

  // const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
  //   setSearchedCams(
  //     cams.filter((cam: ICam) =>
  //       cam.mountain.toLowerCase().includes(e.target.value.toLowerCase())
  //     )
  //   );
  // };

  const handleFilter = (filterValue: string | null) => {
    !filterValue
      ? setFilteredCams(webcams)
      : setFilteredCams(
          webcams.filter((cam: WebCamProps) =>
            cam.mountain.toLowerCase().includes(filterValue.toLowerCase())
          )
        );
  };

  return (
    <Grid
      w={{ xl: "90%", md: "95%", sm: "100%" }}
      m={"auto"}
    >
      <Grid.Col span={12} m="auto">
        <Box id="logo" m="2rem auto" w="25rem">
          <Image src="/imgs/logo.png" alt="Snow Cams " />
        </Box>
        {/* <TextInput
            id="cam-search-input"
            placeholder="Search..."
            w={"12.5rem"}
            onChange={(e) => handleSearch(e)}
          /> */}
        <Box className="filterForm">
          <Select
            w="20rem"
            m="auto"
            id="cam-search-select"
            data={["All", ...mountainOptions]}
            defaultValue={"All"}
            onChange={(_value) => {
              _value == "All" ? setFilteredCams(webcams) : handleFilter(_value);
            }}
          />
        </Box>
      </Grid.Col>
      {webcams.length <= 0 ? (
        <>Loading...</>
      ) : (
        filteredCams.map((cam: IWebcamModel, index: number) => (
          <Grid.Col key={index} span={"auto"}>
            <WebCam
              camId={cam.id}
              className="aspect-video h-auto w-full"
              link={cam.link}
              title={cam.title}
              mountain={cam.mountain}
              type={cam.type}
            />
          </Grid.Col>
        ))
      )}
    </Grid>
  );
});
