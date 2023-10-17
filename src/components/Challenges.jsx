import { Link } from "react-router-dom";
import challengesList from "../utils/challenges";

const Challenges = () => {
  return challengesList.map(({ src, path, alt, webp }, index) => {
    return (
      <li key={index}>
        <Link to={path} target="_blank">
          <picture>
            <source srcset={webp} type="image/webp" />
            <source srcset={src} type="image/jpeg" />
            <img src={src} alt={alt} width="600" height="400" />
          </picture>
        </Link>
      </li>
    );
  });
};
export default Challenges;
