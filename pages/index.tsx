import dotenv from "dotenv";
import { WebCamsContainer } from "../components/WebCamsContainer";
import { useMst } from "../lib/hooks/useMst";
import { useEffect } from "react";

dotenv.config();

export default function IndexPage() {
  let { webcamStore } = useMst();
  useEffect(() => {
    webcamStore.getInitalCams()
  },[]);
  return <WebCamsContainer />;
}
