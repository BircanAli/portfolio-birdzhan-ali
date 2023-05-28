import "../About/index.scss";
import certificate1 from "../../assets/certificates/certificate1.jpg";
import certificate2 from "../../assets/certificates/certificate2.jpg";

const About = () => {
  return (
    <>
      <div className="container-about">
        <div className="text">
          <h1>About Me.</h1>
          <p>
            My name is Birdzhan Ali born in Bulgarian 8 June 1991.My life has
            taken me to other countries like England, Norway, Denmark, Germany.I
            like to fight until my goals are achieved.
          </p>

          <p>
            My web development journey started at "December,2021". Since then, I
            have completed two courses and watched a lot of YouTube videos. You
            can see all my work in the section Project and also see my
            certifications under the section.By developing my skill as a web
            developer,i became more excited to learn more about coding and to
            expand my path to other areas.
          </p>
        </div>

        <div className="certificates">
          <div>
            <img src={certificate1} alt="certificate" />
          </div>
          <div>
            <img src={certificate2} alt="certificate" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
