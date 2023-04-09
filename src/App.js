import "./App.scss";
import { Outlet, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./components/About";

import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
