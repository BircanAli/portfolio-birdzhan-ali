import htmlIcon from "../assets/svg-icons/html-icon.svg";
import cssIcon from "../assets/svg-icons/css-icon.svg";
import jsIcon from "../assets/svg-icons/js-icon.svg";
import nodeIcon from "../assets/svg-icons/nodejs-icon.svg";
import expressIcon from "../assets/svg-icons/express-icon.svg";
import reactIcon from "../assets/svg-icons/react-icon.svg";
import sassIcon from "../assets/svg-icons/sass-icon.svg";
import { useLayoutContext } from "../pages/Layout";
const Skills = () => {
  const { isDarkTheme } = useLayoutContext();

  return (
    <section className="skills">
      <article className="skills__info">
        <p>
          A Software Developer who focuses on creating accessible and performant
          user experiences on the web. With a passion for learning, I am always
          searching for ways to improve the quality of the web for all users.
        </p>
      </article>
      <div className="skills__container">
        <ul>
          <li>
            <img src={htmlIcon} alt="html icon" />
          </li>
          <li>
            <img src={cssIcon} alt="html icon" />
          </li>
          <li>
            <img src={sassIcon} alt="html icon" />
          </li>
          <li>
            <img src={jsIcon} alt="html icon" />
          </li>
          <li>
            <img src={nodeIcon} alt="html icon" />
          </li>
          <li>
            <img
              src={expressIcon}
              alt="html icon"
              style={
                isDarkTheme
                  ? {
                      filter:
                        " invert(100%) sepia(0%) saturate(7458%) hue-rotate(107deg) brightness(97%) contrast(108%)",
                    }
                  : null
              }
            />
          </li>
          <li>
            <img src={reactIcon} alt="html icon" />
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Skills;
