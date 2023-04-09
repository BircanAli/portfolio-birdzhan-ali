import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./components/About";

import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
