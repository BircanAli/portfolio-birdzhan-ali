import Project from "../components/Project";
import Icons from "../components/Icons";
import socials from "../utils/socials";
import { CgBrowser } from "react-icons/cg";
import myProjects from "../utils/projects";
import { Challenges } from "../components";

const Projects = () => {
  const [{ gitHub }] = socials;

  return (
    <main>
      <header>
        <h1>Projects</h1>
      </header>
      <section className="grid">
        <article className="grid__video">
          <Project {...myProjects.projectOne} />
        </article>
        <article className="grid__info">
          <div>
            <h1>X-joby</h1>
            <p>
              X-joby is similar to LinkedIn,indeed. You can look at the web page
              without <em>registration</em>. In the side bar you can find
              all-job, create-job, statistics, profile and admin. The Admin
              section is only provided for the person who is <em>authorized</em>
              . In the profile section you can upload your avatar picture and
              change personal details. The webpage also have a{" "}
              <em>dark-mode</em>.
            </p>
          </div>
          <div className="btn-container">
            <ul>
              <li>
                <Icons
                  path={"https://github.com/BircanAli/X-Joby"}
                  icon={gitHub.icon}
                />
              </li>
              <li>
                <Icons
                  path={"https://x-joby.onrender.com/"}
                  icon={<CgBrowser />}
                />
              </li>
            </ul>
          </div>
        </article>
      </section>
      <section className="grid">
        <article className="grid__video">
          <Project {...myProjects.projectTwo} />
        </article>
        <article className="grid__info">
          <div>
            <h1>Sociopedia</h1>
            <p>
              Its is similar to Social Media web page. <em>MERN </em> Stack
              project with styled components.
            </p>
            <p>
              <em>Widgets</em> and functionality are Advert, Friend List, Posts,
              User widgets.
            </p>
          </div>
          <div className="btn-container">
            <ul>
              <li>
                <Icons
                  path={"https://github.com/BircanAli/MERN-Social-page"}
                  icon={gitHub.icon}
                />
              </li>
            </ul>
          </div>
        </article>
      </section>
      <section className="grid">
        <article className="grid__video">
          <Project {...myProjects.projectThree} />
        </article>
        <article className="grid__info">
          <div>
            <h1>OmniFood</h1>
            <p>
              Landing page for <em>healthy food and nutrition</em>
            </p>
            <p>
              In this project we have created a landing page with a simple
              <em>"Z" </em> pattern design.
            </p>
            <p>
              <em>Sections</em> in projects are Hero, CTA Buttons, Cards,
              Testimonials, Small Gallery.
            </p>
          </div>
          <div className="btn-container">
            <ul>
              <li>
                <Icons
                  path={"https://github.com/BircanAli/OmnifootBirdzhanALi"}
                  icon={gitHub.icon}
                />
              </li>
              <li>
                <Icons
                  path={"https://omnifood-birdzhanali.netlify.app/"}
                  icon={<CgBrowser />}
                />
              </li>
            </ul>
          </div>
        </article>
      </section>
      <section className="grid">
        <article className="grid__video">
          <Project {...myProjects.projectFour} />
        </article>
        <article className="grid__info">
          <div>
            <h1>TinDog</h1>
            <p>Simple Landing page.</p>
          </div>
          <div className="btn-container">
            <ul>
              <li>
                <Icons
                  path={"https://github.com/BircanAli/TinDog-Landing"}
                  icon={gitHub.icon}
                />
              </li>
              <li>
                <Icons
                  path={"https://bircanali.github.io/TinDog-Landing/"}
                  icon={<CgBrowser />}
                />
              </li>
            </ul>
          </div>
        </article>
      </section>
      <section className="challenges">
        <h1>Challenges</h1>

        <div className="challenges__grid">
          <ul className="challenge">
            <Challenges />
          </ul>
        </div>
      </section>
    </main>
  );
};
export default Projects;
