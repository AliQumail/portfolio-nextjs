import Intro from "../components/Intro"
import styles from "../styles/main.module.css"
import Head from "next/head";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {

  return (
    <div className={styles.main}>
      <Head>
        <title>Ali Qumail</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Encode+Sans+SC:wght@200&display=swap" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css2?family=Encode+Sans+SC:wght@200;500&family=Otomanopee+One&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Fuggles&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
       </Head>
      
      
      <Intro/>
    
      <section  id="educationSection">   <Education/>  </section>
      <section  id="projectsSection">  <Projects/> </section>
      <section  id="contactSection">    <Contact/> </section>
    </div>
  )
}
