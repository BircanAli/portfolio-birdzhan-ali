import {
  FaHome,
} from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GoProjectSymlink } from "react-icons/go";
import { MdOutlineLocalPostOffice } from "react-icons/md";

const links = [
  {
    path: "/",
    text: "Home",
    icon: <FaHome />,
  },
  {
    path: "/about",
    text: "About Me",
    icon: <FcAbout />,
  },
  {
    path: "/projects",
    text: "Projects",
    icon: <GoProjectSymlink />,
  },
  {
    path: "/contacts",
    text: "Contact Me",
    icon: <MdOutlineLocalPostOffice />,
  },
];

export default links;
