import socials from "../utils/socials";
import Icons from "./Icons";

const Socials = () => {
  return (
    <article>
      <ul>
        <li>
          {socials.map((social, index) => {
            return <Icons to={social} key={index} />;
          })}
        </li>
      </ul>
    </article>
  );
};
export default Socials;
