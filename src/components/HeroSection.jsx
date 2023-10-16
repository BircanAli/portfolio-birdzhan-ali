import Icons from "./Icons";
import socials from "../utils/socials";
import computerImgOne from "../assets/images/Computer-keyboard.png";
import computerImgTwo from "../assets/images/Computer-keyboard-2.png";
import { useLayoutContext } from "../pages/Layout";

const HeroSection = () => {
  const [{ gitHub }, { linkedIn }] = socials;

  const { isDarkTheme } = useLayoutContext();

  return (
    <section className="hero">
      <article className="hero_header">
        <h1>Welcome .</h1>

        <p>I'm a Web Developer . </p>
        <ul>
          <li>
            <Icons path={linkedIn.path} icon={linkedIn.icon} />
          </li>
          <li>
            <Icons path={gitHub.path} icon={gitHub.icon} />
          </li>
        </ul>
      </article>
      <article className="_img_container">
        <picture className="__image">
          <img
            src={isDarkTheme ? computerImgTwo : computerImgOne}
            alt="computer keyboard disck plant"
          />
        </picture>
      </article>
    </section>
  );
};
export default HeroSection;
