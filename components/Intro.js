import styles from "../styles/intro.module.css";

function Intro() {
  return (
    <div className={styles.background}>
      {/* OUR NAVBAR CODE  */}

      <div className="container">
        <div className="row pt-3 pb-1 justify-content-sm-center">
          <div className="col col-lg-9 col-md-7 col-sm-6">
            <p className={styles.signature}>Ali Qumail</p>
          </div>
          <div className="col col-lg-3 col-md-4 col-sm-6">
            <a
              href="https://www.linkedin.com/in/ali-qumail-4b77601a8/"
              rel="noreferrer"
              target="_blank"
              className={`fa fa-linkedin ${styles.fa} `}
            ></a>
            <a
              href="https://github.com/AliQumail"
              target="_blank"
              rel="noreferrer"
              className={`fa fa-github ${styles.fa} `}
            ></a>
            <a
              href="https://aliqumail.medium.com/"
              target="_blank"
              rel="noreferrer"
              className={`fa fa-medium ${styles.fa}`}
            ></a>
            <a
              href="https://www.quora.com/profile/Ali-Qumail-2"
              target="_blank"
              rel="noreferrer"
              className={`fa fa-quora ${styles.fa}`}
            ></a>
          </div>
        </div>
      </div>

      {/* OUR INTRO CODE  */}

      <div className="container">
        <div className={styles.introDetails}>
          <h4 className={styles.name}>Hi I am Ali Qumail</h4>
          <h6 className={styles.tags}>
            Student | Computer Science | Web Developer
          </h6>
          <div className={`${styles.links} row justify-content-center`}>
            <a className={styles.link} href="#educationSection">
              Education
            </a>
            <a className={styles.link} href="#educationSection">
              Skills
            </a>
            <a className={styles.link} href="#projectsSection">
              Projects
            </a>
            <a className={styles.link} href="/Resume.pdf">
              Resume
            </a>
            <a className={styles.link} href="#contactSection">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Intro;
