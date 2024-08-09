import styles from "../styles/skills.module.css";

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "Boostrap",
  "JavaScript",

  "React",
  "Redux",
  "SASS",
  "Material UI",
  "Git",
  "CI/CD",
  "Jest",
  "Enzyme",
];

export default function Skills() {
  return (
    <section className={`container pb-5 ${styles.skills}`}>
      <h2 className={styles.techstack}>TECH STACK</h2>
      <div className="row d-flex justify-content-center mt-3 ">
        {/* <div className={`col-4 col-lg-2 col-md-2 col-sm-4 mt-4   ${styles.icon_div}`}>
          <i className={`devicon-html5-plain colored ${styles.icon}`}></i>
          <h6 className={`mt-1 ${styles.skill_text}`}>HTML</h6>
        </div> */}
        {/* <div className={`col-4 col-lg-2 col-md-2 col-sm-4 mt-4   ${styles.icon_div}`}>
          <i className={`devicon-css3-plain colored ${styles.icon}`}></i>
          <h6 className={`mt-1 ${styles.skill_text}`}>CSS</h6>
        </div> */}
        {/* <div className={`col-4 col-lg-2 col-md-2 col-sm-4 mt-4   ${styles.icon_div}`}>
          <i className={`devicon-bootstrap-plain colored ${styles.icon}`}></i>
          <h6 className={`mt-1 ${styles.skill_text}`}>
            Bootstrap
          </h6>
        </div> */}
        {/* <div className={`col-4 col-lg-2 col-md-2 col-sm-4 mt-4   ${styles.icon_div}`}>
          <i className={`devicon-javascript-plain colored ${styles.icon}`}></i>
          <h6 className={`mt-1 ${styles.skill_text}`}>Js</h6>
        </div> */}
        <div className={`col-4 col-lg-2 col-md-2 col-sm-4 mt-4   ${styles.icon_div}`}>
          <i className={`devicon-react-plain colored ${styles.icon}`}></i>
          <h6 className={`mt-1 ${styles.skill_text}`}>
            React
          </h6>
        </div>
        <div className={`col-4 col-lg-2 col-md-2 col-sm-4 mt-4   ${styles.icon_div}`}>
          <i className={`devicon-angularjs-plain colored ${styles.icon}`}></i>
          <h6 className={`mt-1 ${styles.skill_text}`}>
            Angular
          </h6>
        </div>
        <div className={`col-4 col-lg-2 col-md-2 col-sm-4 mt-4   ${styles.icon_div}`}>
          <i className={`devicon-dotnetcore-plain colored ${styles.icon}`}></i>
          <h6 className={`mt-1 ${styles.skill_text}`}>
            .NET Core
          </h6>
        </div>
        <div className={`col-4 col-lg-2 col-md-2 col-sm-4 mt-4   ${styles.icon_div}`}>
          <i className={`devicon-nodejs-plain colored ${styles.icon}`}></i>
          <h6 className={`mt-1 ${styles.skill_text}`}>Node JS</h6>
        </div>
        <div className={`col-4 col-lg-2 col-md-2 col-sm-4 mt-4   ${styles.icon_div}`}>
          <i className={`devicon-csharp-plain colored ${styles.icon}`}></i>
          <h6 className={`mt-1 ${styles.skill_text}`}>
            C#
          </h6>
        </div>
        <div className={`col-4 col-lg-2 col-md-2 col-sm-4 mt-4   ${styles.icon_div}`}>
          <i className={`devicon-typescript-original colored ${styles.icon}`}></i>
          <h6 className={`mt-1 ${styles.skill_text}`}>
            TypeScript
          </h6>
        </div>
      </div>
      
      <div className="row d-flex justify-content-center pb-5">
        
        
      
        <div className={`col-4 col-lg-2 col-md-2 col-sm-4 mt-4   ${styles.icon_div}`}>
          <i className={`devicon-mongodb-plain colored ${styles.icon}`}></i>
          <h6 className={`mt-1 ${styles.skill_text}`}>MongoDB</h6>
        </div>
        <div className={`col-4 col-lg-2 col-md-2 col-sm-4 mt-4   ${styles.icon_div}`}>
          <i className={`devicon-mysql-plain colored ${styles.icon}`}></i>
          <h6 className={`mt-1 ${styles.skill_text}`}>MySQL</h6>
        </div>
        <div className={`col-4 col-lg-2 col-md-2 col-sm-4 mt-4   ${styles.icon_div}`}>
          <i className={`devicon-postgresql-plain colored ${styles.icon}`}></i>
          <h6 className={`mt-1 ${styles.skill_text}`}>PostgreSQL</h6>
        </div>
       
        <div className={`col-4 col-lg-2 col-md-2 col-sm-4 mt-4   ${styles.icon_div}`}>
          <i className={`devicon-docker-plain colored ${styles.icon}`}></i>
          <h6 className={`mt-1 ${styles.skill_text}`}>Docker</h6>
        </div>

        <div className={`col-4 col-lg-2 col-md-2 col-sm-4 mt-4   ${styles.icon_div}`}>
          <i className={`devicon-git-plain colored ${styles.icon}`}></i>
          <h6 className={`mt-1 ${styles.skill_text}`}>Git</h6>
        </div>
        
        <div className={`col-4 col-lg-2 col-md-2 col-sm-4 mt-4   ${styles.icon_div}`}>
          <i className={`devicon-github-plain colored ${styles.icon}`}></i>
          <h6 className={`mt-1 ${styles.skill_text}`}>Github</h6>
        </div>
      </div>
    </section>
  );
}
