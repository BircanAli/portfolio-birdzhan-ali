import certificateOne from "../assets/images/certificate1.jpg";
import certificateImg from "../utils/certificates";
import { CgClose } from "react-icons/cg";

const ImgZoomer = ({ toggleImgZoom, imgSrc }) => {
  return (
    <section className="hidden img-zoomer">
      <div className="img-container">
        <img src={imgSrc} alt="certificate images" />
        <span onClick={toggleImgZoom}>
          <CgClose />
        </span>
      </div>
    </section>
  );
};
export default ImgZoomer;
