import { Link } from "react-router-dom";

const Icons = ({ path, icon }) => {
  return (
    <div>
      <a href={path} target="_blank">
        {icon}
      </a>
    </div>
  );
};
export default Icons;
