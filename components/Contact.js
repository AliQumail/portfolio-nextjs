import styles from "../styles/contact.module.css";
import linkedin from "../public/linkedin.png";
import github from "../public/github.png";
import gmail from "../public/gmail.png";
import medium from "../public/medium.png";
import Image from "next/image";

export default function Contact() {
  return (
    <div className={`container bg-white mt-5 pb-5 ${styles.contact_div}`}>
      <h2 className={styles.contact_main_heading}>LET&apos;S CONNECT</h2>
      <div className="row d-flex justify-content-center ">
        <button type="button" className="btn btn-primary m-1">
          <a href="https://www.linkedin.com/in/ali-qumail-4b77601a8/" target="_blank" rel="noreferrer">Linkedin</a>
        </button>
        <button type="button" className="btn btn-dark m-1">
          <a href="https://github.com/AliQumail" target="_blank" rel="noreferrer">Github</a>
        </button>
        <button type="button" className="btn btn-danger m-1">
          <a href="https://aliqumail.medium.com/" target="_blank" rel="noreferrer">Medium</a>
        </button>
        {/* <div className="col col-lg-1 col-sm-3 d-flex justify-content-center">
          <a href="https://www.linkedin.com/in/ali-qumail-4b77601a8/"><Image
            src={linkedin}
            alt="not supported"
            className={styles.s_icons}
            width={60}
            height={60}
          /></a>
        </div>
        <div className="col col-lg-1 col-sm-3 d-flex justify-content-center">
        <a href="https://github.com/AliQumail">
          <Image src={github} alt="not supported" width={60}
            height={60}/>
          </a>
        </div>
        <div className="col col-lg-1 col-sm-3 d-flex justify-content-center">
        <a href="https://aliqumail.medium.com/">
          <Image src={medium} alt="not supported" width={60}
            height={60}/>
          </a>
        </div> */}
        {/* <div className="col col-lg-1 col-sm-3 d-flex justify-content-center">
        <a href="https://www.linkedin.com/in/ali-qumail-4b77601a8/">
          <Image src={gmail} alt="not supported" width={60}
            height={60}/>
          </a>
        </div> */}
      </div>
    </div>
  );
}
