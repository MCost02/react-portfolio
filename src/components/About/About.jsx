import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Marx!</h1>
        <p className={styles.description}>(Intro paragraph)</p>
      </div>
      <img
        src={getImageUrl("Headshot.png")}
        alt="Picture of me"
        className={styles.aboutImage}
      />
    </section>
  );
};
