import styles from "../styles/contact.module.css";

export default function Contact() {
  return (
    <div className={styles.main}>
       <h3><b> <i>Contact</i></b></h3>
      <div className="container mt-5">
        <div className="row ">
   
          <div className="col-lg-6 col-md-6 col-sm-12 justify-content-center">
         
            <h6 className={styles.email}>
              You can email me at{" "}
              <text className={styles.emailAddress}>aliqumail8@gmail.com</text>
            </h6>
          
     
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
      
          <div className="col m-auto">
            <form method="POST" action="mailto:aliqumail8@gmail.com"
            encType="multipart/form-data" name="EmailForm" >
              <input className={styles.inputDiv} placeHolder="Email" /> <br />
              <textarea
                className={styles.inputDiv2}
                placeHolder="Message"
              />{" "}
              <br />
              <button type="submit" className="btn btn-primary w-75 mt-1">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
      <h5 className="mt-5">© Ali Qumail 2021.</h5>
    </div>
  );
}
