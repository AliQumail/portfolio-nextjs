import styles from "../styles/projects.module.css";
import Card from "./Card";

import Gpacalc from "../public/gpacalc.png";
import Journalapp from "../public/journalapp.png";
import Smbgame from "../public/smbgame.png";
import Quizapp from "../public/quizapp.png";
import Todolist from "../public/todolist.png";
import Portfolio from "../public/portfolio.png";

export default function Projects() {
  return (
    <div className="container mt-5">
      <h3 className={styles.heading}>Projects</h3>
      <div className="row mt-5">
        <div className="col-lg-6 mt-2">
          <Card
            img={Journalapp}
            name="My Journal App"
            githubLink="https://github.com/AliQumail/My-journal-app-using-node-js"
          />
        </div>
        <div className="col-lg-6 mt-2">
          <Card
            img={Gpacalc}
            name="Gpa calculator"
            githubLink="https://github.com/AliQumail/Gpa-Calculator-React-Js"
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-6 mt-2">
          <Card
            img={Smbgame}
            name="Spend my billions game"
            githubLink="https://github.com/AliQumail/Spend-My-Billions-Game-React-js"
          />
        </div>
        <div className="col-lg-6 mt-2">
          <Card
            img={Portfolio}
            name="Porfolio Website (old)"
            githubLink="https://github.com/AliQumail/portfolio-website"
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-6 mt-2">
          <Card
            img={Quizapp}
            name="Quiz taking app"
            githubLink="https://github.com/AliQumail/Quiz-taking-app-react-js"
          />
        </div>
        <div className="col-lg-6 mt-2">
          <Card
            img={Todolist}
            name="To do list app"
            githubLink="https://github.com/AliQumail/to-do-list-app-ReactJs"
          />
        </div>
      </div>
    </div>
  );
}
