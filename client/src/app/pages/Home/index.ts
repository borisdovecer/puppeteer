import Home from "./Home.tsx";
import { IPage } from "@app/global/interfaces.ts";

const homeEntity: IPage = {
  name: "Home",
  path: "/",
  element: Home,
};

export default homeEntity;