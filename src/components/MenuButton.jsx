import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const MenuButton = ({ toggleMenuBtn, isMenu }) => {
  const toggleMenu = toggleMenuBtn;

  return (
    <>
      <button onClick={toggleMenu} title="Menu" aria-label="Menu">
        {isMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
      <span>{isMenu ? "Close" : "Menu"}</span>
    </>
  );
};
export default MenuButton;
