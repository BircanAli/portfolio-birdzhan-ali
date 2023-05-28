import "./index.scss";
import KeeperAppImg from "../../assets/projects-images/KeeperApp.png";
import ToDoList from "../../assets/projects-images/ToDoList.png";
import OmniFood from "../../assets/projects-images/OmniFoot — Never cook again-small.png";
import Sociopad1 from "assets/projects-images/ReactAppHomeLightMode.png";
import Sociolad2 from "assets/projects-images/ReactAppHomePageDarkModee.png";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="project">
        <div className="img-container">
          <a
            href="https://react-vite-keeper-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="img-project" src={KeeperAppImg} alt="project img" />
          </a>
        </div>
        <div className="project-text">
          <p>
            My first app{" "}
            <a
              href="https://bircan-first-todolist.onrender.com"
              rel="noreferrer"
            >
              https://bircan-first-todolist.onrender.com
            </a>
          </p>
        </div>
      </div>

      <div className="project">
        <div className="img-container">
          <a
            href="https://bircan-first-todolist.onrender.com"
            target="_blank"
            rel="noreferrer"
          >
            <img className="img-project" src={ToDoList} alt="project img" />
          </a>
        </div>
        <div className="project-text">
          <p>
            This is my To Do List Application. If u wish you can write . . .
            <a href="https://bircan-first-todolist.onrender.com" rel="noreffer">
              https://bircan-first-todolist.onrender.com
            </a>
          </p>
        </div>
      </div>

      <div className="project">
        <div className="img-container">
          <a
            href="https://omnifood-birdzhanali.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="img-project" src={OmniFood} alt="project img" />
          </a>
        </div>
        <div className="project-text">
          <h1>My Landing page from Jonas Schmedtmann course .</h1>
          <p>This landing page includes .</p>
          <p>Hero section .</p>
          <p>Testimonials .</p>
          <p>Small gallery .</p>
          <p>Card section .</p>
          <p>Contact me .</p>
          <p>
            <a href="https://omnifood-birdzhanali.netlify.app/" rel="noreffer">
              https://omnifood-birdzhanali.netlify.app/
            </a>
          </p>
        </div>
      </div>

      <div className="project">
        <div className="img-container">
          <a
            href="https://github.com/BircanAli/MERN-Social-page"
            target="_blank"
            rel="noreferrer"
          >
            <img className="img-project" src={Sociopad1} alt="project img" />
          </a>
        </div>
        <div className="img-container">
          <a
            href="https://github.com/BircanAli/MERN-Social-page"
            target="_blank"
            rel="noreferrer"
          >
            <img className="img-project" src={Sociolad2} alt="project img" />
          </a>
        </div>
        <div className="project-text">
          <h1>
            This is my MERN Stak Project check it on my github:
            <br />
            <a
              href="https://github.com/BircanAli/MERN-Social-page"
              rel="noreffer"
            >
              https://github.com/BircanAli/MERN-Social-page
            </a>
          </h1>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
