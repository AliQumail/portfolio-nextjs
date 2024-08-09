import Intro from "../components/Intro";
import styles from "../styles/main.module.css";
import Head from "next/head";

import Projects from "../components/Projects";
import Contact from "../components/Contact";
import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Ali Qumail</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Encode+Sans+SC:wght@200&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Encode+Sans+SC:wght@200;500&family=Otomanopee+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fuggles&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300&family=Poppins:wght@300;600&family=Roboto:wght@100&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        ></link>
      </Head>
      {/* 
      <Intro />

      <section id="educationSection">
        <Education />
      </section>
      <section id="projectsSection">
        {" "}
        <Projects />
      </section>
      <section id="contactSection">
        {" "}
        <Contact />
      </section> */}
      <HeroSection />
      <Skills />
      <Projects />
      <Contact />
      <footer className="page-footer font-small  blue mt-5">
        <div className="footer-copyright text-center py-3">
          © 2024 Copyright:
          <Link href="/"> Ali Qumail </Link>
        </div>
      </footer>
    </div>
  );
}
