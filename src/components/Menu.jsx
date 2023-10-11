import { NavLink } from "react-router-dom";
import links from "../utils/links";

const Menu = ({ toggleMenuBtn }) => {
  return (
    <div className="menu">
      <ul>
        {links.map((link) => {
          const { path, text, icon } = link;
          return (
            <li key={text}>
              <NavLink
                to={path}
                onClick={toggleMenuBtn}
                className={`${
                  (({ isActive }) => {
                    isActive ? "active" : "";
                  },
                  "menu__link")
                }`}
              >
                <span>{icon}</span>
                {text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Menu;
