import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import "./index.scss";
import Home from "../Home";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Home />
    </>
  );
};

export default Layout;
