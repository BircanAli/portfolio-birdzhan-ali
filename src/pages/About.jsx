import { useOutletContext } from "react-router-dom";
import questionRafiki from "../assets/images/Questions-rafiki.png";
import questionRafikiTwo from "../assets/images/Questions-rafiki(1).png";
import { ImgZoomer } from "../components";
import { useState } from "react";
import certificateImg from "../utils/certificates";

const About = () => {
  const isDarkTheme = useOutletContext();
  const [imgSrc, setImgSrc] = useState(null);

  const toggleImgZoom = () => {
    document.querySelector(".img-zoomer").classList.toggle("hidden");
  };

  return (
    <main className="about">
      <section className="about__container">
        <article className="about__container__story">
          <div>
            <h1>My Story</h1>
            <p>
              My journey started in November 2021 when I decided to follow my
              dreams and started my first course as a front-end developer. I
              always wanted to do this when I was in my 20s, but I never had the
              time due to life circumstances. Now I'm determined..
            </p>
            <p>
              I have used <em>React, Styled-Components</em> and other tools to
              create user-interfaces that are
              <em> responsive, performant, and accessible.</em> From developing
              full-stack applications with authentication and integration
              testing, I have a set of skills that allow me to plan, test, and
              create user interfaces.
            </p>
            <p>
              I am currently open to job opportunities where I can
              <em> contribute, learn, and grow</em> as a software developer and
              as a person. If you believe that I am a developer that will mesh
              well with your team and goals, please feel free to contact me!
            </p>
          </div>
          <picture>
            <img
              src={isDarkTheme ? questionRafikiTwo : questionRafiki}
              alt=""
            />
          </picture>
        </article>
        <article className="about__container__images">
          {certificateImg.map((img, index) => {
            const { file, alt } = img;

            return (
              <div
                key={index}
                className="img_container"
                onClick={() => {
                  setImgSrc(file);
                  toggleImgZoom();
                }}
              >
                <img src={file} alt={alt} />
              </div>
            );
          })}

          <ImgZoomer toggleImgZoom={toggleImgZoom} imgSrc={imgSrc} />
        </article>
      </section>
    </main>
  );
};
export default About;
