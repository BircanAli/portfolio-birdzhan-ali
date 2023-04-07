import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import "./index.scss";
import Home from "../Home";
import TicTacToe from "../TicTacToe";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <div className="container">
        <Home />
        <TicTacToe />
      </div>
    </>
  );
};

export default Layout;
