import React, { useState } from "react";
import styles from "../styles/herosection.module.css";
import Link from "next/link";
export default function HeroSection() {
  const [email, setEmail] = useState("aliqumail8@gmail.com");
  const [text, setText] = useState("Email me");
  async function handleChange(e) {
    navigator.clipboard.writeText(email);
    setText("Email copied")

  }
  
  return (
    <div className={`${styles.main}`}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className={`navbar-brand ${styles.brand}`} href="#">
            Ali Qumail.
          </a>

          <button
            data-toggle="tooltip"
            data-placement="bottom"
            title="Click to copy"
            className={`btn my-2 my-sm-0 emailme`}
            onClick={handleChange}
          >
            {text}
          </button>
        </div>
      </nav>
      <style jsx>  {`
          .emailme {
            color: ${text=='Email me' ? '#5a4ff3' : 'white'};
            font-weight: 600;
            border: solid 2px;
            font-size: 0.8rem;
            border-radius: 4%;
            padding: 0.6rem 1.2rem;
            border-color: ${text=='Email me' ? '#5a4ff3' : '#6F766F'};
            background-color: ${text=='Email copied' && '#6F766F'};
          }

          .emailme:hover {
            background-color: ${text=='Email me' && '#5a4ff3'};
            color: ${text=='Email me' && 'white'};
          }
        `}
      </style>
      <div className={`container text-center`}>
        <div className={`${styles.inner_container}`}>
          <h1 className={styles.heading}>
            Hi. I&apos;m <span className={styles.headingname}>Ali Qumail.</span>
          </h1>
          <p className={styles.paragraph}>
            Experienced Software Engineer Crafting Clean, Efficient, and Robust Software Solutions
          </p>
          
            <button className={styles.resume}><a href="/Resume.pdf" target="_blank">Resume</a></button>
      
        </div>
      </div>
    </div>
  );
}
