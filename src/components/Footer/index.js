import "../Footer/index.scss";

const Footer = () => {
  let date = new Date();
  let fullYear = date.getFullYear();
  return (
    <>
      <div className="container-footer">
        <p>Copy right Birdzhan Ali &copy; {fullYear}</p>
      </div>
    </>
  );
};

export default Footer;
