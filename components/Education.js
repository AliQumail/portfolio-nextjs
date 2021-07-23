import styles from "../styles/education.module.css"

export default function Education(){
    return <div className="container mt-5">
        <div className={styles.educationDetails}>
          <h3 className={styles.heading}>Education</h3>
           <p className={styles.para}> I am currently a <b>third-year computer science student studying at Fast 
               Nuces Lahore.</b> I am very much interested in building web applications
               and hope to pursue a career as full stack developer where I can make 
               applications from scratch to deployment.  
          </p>
        </div>
        <div className={styles.educationDetails}>
          <h3 className={styles.heading}>Skills</h3>
           <p className={styles.para}> I am fimiliar with building basic web applications 
           using<b> Html, Css, Javascript, Bootstrap, React Js, Node js, MongoDb</b> and currently 
           working on <b>Next Js</b>. I am also good in <b>C++</b>.  
          </p>
        </div>
        </div>
}