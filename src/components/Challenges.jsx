import { Link } from "react-router-dom";
import challengesList from "../utils/challenges";

const Challenges = () => {
  return challengesList.map(({ src, path, alt }, index) => {
    return (
      <li key={index}>
        <Link to={path} target="_blank">
          <img src={src} alt={alt} />
        </Link>
      </li>
    );
  });
};
export default Challenges;
