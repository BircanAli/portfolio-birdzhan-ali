import { Logo, Menu, MenuButton, ThemeBtn } from "./index";
import { useLayoutContext } from "../pages/Layout";

const Navbar = () => {
  const {
    isMenu,
    isSocialIcon,
    isDarkTheme,
    toggleMenuBtn,
    toggleSocialIcons,
    toggleDarkTheme,
  } = useLayoutContext();

  return (
    <>
      <header className="header">
        <div className="navbar">
          <section className="navbar__logo ">
            <Logo />
          </section>
          <nav className="navbar__nav">
            <MenuButton toggleMenuBtn={toggleMenuBtn} isMenu={isMenu} />
          </nav>

          <ThemeBtn
            toggleDarkTheme={toggleDarkTheme}
            isDarkTheme={isDarkTheme}
          />
        </div>
        {isMenu && <Menu toggleMenuBtn={toggleMenuBtn} />}
      </header>
      {isMenu && <div className="fixed" onClick={toggleMenuBtn}></div>}
    </>
  );
};
export default Navbar;
