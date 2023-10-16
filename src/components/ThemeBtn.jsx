import { Link } from "react-router-dom";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";

const ThemeBtn = ({ toggleDarkTheme, isDarkTheme }) => {
  return (
    <div className="navbar__dark">
      <span>THEME</span>
      <button
        onClick={toggleDarkTheme}
        aria-label="Dark-mode"
        title="Dark Mode"
      >
        {isDarkTheme ? <FaSun /> : <BsFillMoonStarsFill />}
      </button>
    </div>
  );
};
export default ThemeBtn;
