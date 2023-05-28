import "./index.scss";
import KeeperAppImg from "../../assets/projects-images/KeeperApp.png";
import ToDoList from "../../assets/projects-images/ToDoList.png";
import OmniFood from "../../assets/projects-images/OmniFoot — Never cook again-small.png";
import Sociopad1 from "assets/projects-images/ReactAppHomeLightMode.png";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="project">
        <div className="img-container">
          <a href="https://react-vite-keeper-app.netlify.app/" target="_blank">
            <img className="img-project" src={KeeperAppImg} alt="project img" />
          </a>
        </div>
        <div className="project-text">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
            aspernatur dolorum velit quod doloribus et hic, est quam. Ratione a
            dolor esse architecto blanditiis. Tenetur beatae aspernatur quasi
            velit sed.t
          </p>
        </div>
      </div>

      <div className="project">
        <div className="img-container">
          <a href="https://bircan-first-todolist.onrender.com" target="_blank">
            <img className="img-project" src={ToDoList} alt="project img" />
          </a>
        </div>
        <div className="project-text">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
            aspernatur dolorum velit quod doloribus et hic, est quam. Ratione a
            dolor esse architecto blanditiis. Tenetur beatae aspernatur quasi
            velit sed.t
          </p>
        </div>
      </div>

      <div className="project">
        <div className="img-container">
          <a href="https://omnifood-birdzhanali.netlify.app/" target="_blank">
            <img className="img-project" src={OmniFood} alt="project img" />
          </a>
        </div>
        <div className="project-text">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
            aspernatur dolorum velit quod doloribus et hic, est quam. Ratione a
            dolor esse architecto blanditiis. Tenetur beatae aspernatur quasi
            velit sed.t
          </p>
        </div>
      </div>

      <div className="project">
        <div className="img-container">
          <a href="" target="_blank">
            <img className="img-project" src={Sociopad1} alt="project img" />
          </a>
        </div>
        <div className="img-container">
          <a href="" target="_blank">
            <img className="img-project" src={OmniFood} alt="project img" />
          </a>
        </div>
        <div className="project-text">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
            aspernatur dolorum velit quod doloribus et hic, est quam. Ratione a
            dolor esse architecto blanditiis. Tenetur beatae aspernatur quasi
            velit sed.t
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
