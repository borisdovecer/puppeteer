import pages from "@app/pages";
import { Route, Routes } from "react-router-dom";
import { IPage } from "@app/global/interfaces.ts";

const Router = () => {
  const routes: JSX.Element[] = pages.map((page: IPage) => {
    return <Route key={page.name} path={page.path} element={<page.element />} />;
  });

  return (
    <div>
      <Routes>{routes}</Routes>
    </div>
  );
};

export default Router;