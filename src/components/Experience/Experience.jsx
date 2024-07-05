import React from "react";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <ul>
          <li>
            <img src={getImageUrl(".png")} alt="Company Logo" />
            <div>
              <h3>Job Title, Company</h3>
              <p>Start Date - End Date</p>
              <ul>
                <li>details</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
