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

import cg from "../public/cg.png"
import cs from "../public/cs.png"
import mlp from "../public/mlp.png"


const data = [
  {
    name: "CrypSimulator",
    img: cs,
    details: "Select an initial virtual amount, and trade 100+ cryptocurrencies. Get detailed pricing history for every currency and measure profit and loss.",
    stack: [".NET Core", "Angular", "PostgreSQL","MongoDB", "RabbitMQ", "Docker"
    ],
    github: "https://github.com/AliQumail/CrypSimulator",
  },
  {
    name: "MyLedgerPro",
    img: mlp,
    details: "Developed a ledger application offering financial tracking, reporting, and visual graphics",
    stack: [".NET Core", "Angular", "MySQL"],
    github: "https://github.com/AliQumail/MyLedgerPro",
  },

  {
    name: "ChartGenious",
    img: cg,
    details: "Upload data and find insights with the help of different charts and filters ( e.g sort, trim )",
    stack: ["Angular"],
    github: "https://github.com/AliQumail/ChartGenious",
  },
  {
    name: "Flight Reservation System",
    img: Fms,
    details: "A reservation and management system where user can book flights. Admin has a dashboard to manage flights.",
    stack: ["React", "Node", "Express","MongoDB"],
    github: "https://github.com/AliQumail/Flight-Reservation-System",
  },
];
export default function Projects() {
  return (
    <div className="container">
      <h2 className={` mt-5 ${styles.project_main_heading}`}>PROJECTS</h2>

      {data.map((item, index) => {
        return (
          <div key={index} className={`row bg-white p-5 mt-5 ${styles.project_div}`}>
            <div className="col-lg-6 col-sm-12  d-flex align-item-center">
              <Image src={item.img} alt="not supported" className={styles.project_img}/>
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
