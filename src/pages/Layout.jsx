import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components/index";
import { createContext, useContext, useState } from "react";

const LayoutContext = createContext();

const Layout = ({ isEnableDarkTheme }) => {
  const [isMenu, setIsMenu] = useState(false);
  const [isDarkTheme, setDarkTheme] = useState(isEnableDarkTheme);
  const [isSocialIcon, setIsSocialIcon] = useState(false);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  const toggleMenuBtn = () => {
    setIsMenu(!isMenu);
  };
  const toggleSocialIcons = () => {
    setIsSocialIcon(!isSocialIcon);
  };

  return (
    <LayoutContext.Provider
      value={{
        isMenu,
        isDarkTheme,
        isSocialIcon,
        toggleMenuBtn,
        toggleDarkTheme,
        toggleSocialIcons,
      }}
    >
      <Navbar />
      <Outlet context={isDarkTheme} />
      <Footer />
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => useContext(LayoutContext);
export default Layout;
