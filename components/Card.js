import styles from "../styles/card.module.css";
import Image from "next/image";

export default function Card(props) {
  return (
    <div>
      <Image src={props.img} alt="Not supported"></Image>

      <h6>
        {props.name}{" "}
        <a
          href={props.githubLink}
          rel="noreferrer"
          target="_blank"
          className={styles.githubLink}
        >
          {" "}
          Github{" "}
        </a>
      </h6>
    </div>
  );
}
