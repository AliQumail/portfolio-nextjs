import styles from "../styles/projects.module.css";
import Card from "./Card";
import Image from "next/image";
import Gpacalc from "../public/gpacalc.png";
import Journalapp from "../public/journalapp.png";
import Smbgame from "../public/smbgame.png";
import Quizapp from "../public/quizapp.png";
import Todolist from "../public/todolist.png";
import Portfolio from "../public/portfolio.png";
import Fms from "../public/fms.png";
import Bbs from "../public/bbs.jpg";
import Hms from "../public/hms.png";

const data = [
  

  {
    name: "Flight Reservation System",
    img: Fms,
    details: "A reservation and management system where user can book flights. Admin has a dashboard to manage flights.",
    stack: ["React", "Node", "Express","MongoDB"],
    github: "https://github.com/AliQumail/Flight-Reservation-System",
  },

  {
    name: "Hostel Management System",
    img: Hms,
    details: "Allows user to book a room in hostel. Admin has a dashboard to view hostel details.",
    stack: ["EJS", "Node", "Express","MongoDB"],
    github: "https://github.com/AliQumail/Hostel-management-system-using-Express-mongoDB",
  },
  {
    name: "GPA Calculator",
    img: Gpacalc,
    details: "A web application that calculates both CGPA and SGPA.",
    stack: ["React", "Bootstrap"],
    github: "https://github.com/AliQumail/Gpa-Calculator-React-Js",
  },

  {
    name: "Basic Banking System",
    img: Bbs,
    details: "Implemented a basic version of banking system where user can make money transactions and view records.",
    stack: ["EJS", "Node", "Express","MongoDB"],
    github: "https://github.com/AliQumail/Basic-Banking-System",
  }
];
export default function Projects() {
  return (
    <div className="container">
      <h2 className={` mt-5 ${styles.project_main_heading}`}>PROJECTS</h2>

      {data.map((item, index) => {
        return (
          <div key={index} className={`row bg-white p-5 mt-5 ${styles.project_div}`}>
            <div className="col-lg-6 col-sm-12  d-flex align-item-center">
              <Image src={item.img} alt="not supported" />
            </div>
            <div className="col-lg-6 col-sm-12  mt-3 d-flex align-item-center">
              <div className={` ${styles.inner_div} m-auto text-center`}>
                <h5 className={styles.project_heading}>{item.name}</h5>
                <p className={styles.project_desc}>{item.details}</p>

                <div className="row d-flex justify-content-center">
                  {item.stack.map((stack, i) => {
                    return (
                      <span className={styles.project_stack} key={i}>
                        {stack}
                      </span>
                    );
                  })}
                </div>

                <button className="btn btn-outline-danger mt-3"><a className={styles.a_github} rel="noreferrer" target="_blank" href={item.github}>Github</a></button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
