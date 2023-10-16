import { Link } from "react-router-dom";

const Icons = ({ path, icon }) => {
  return (
    <div>
      <a
        href={path}
        target="_blank"
        aria-label="Read more about projects and author"
      >
        {icon}
      </a>
    </div>
  );
};
export default Icons;
