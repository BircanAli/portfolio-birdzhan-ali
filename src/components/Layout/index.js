import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import "./index.scss";
import Footer from "../Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
