import React from "react";
import styles from "./Experience.module.css";
import experience from "../../data/experience.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        {/* Data is loaded in from experience.json */}
        <ul>
          {experience.map((experienceItem, id) => {
            return (
              <li key={id}>
                <img
                  src={getImageUrl(experienceItem.logo)}
                  alt={`${experienceItem.company} Logo`}
                />
                <div>
                  <h3>{`${experienceItem.role}, ${experienceItem.company}`}</h3>
                  <p>{`${experienceItem.startDate} - ${experienceItem.endDate}`}</p>
                  <ul>
                    {/* Lists all the details associated with each role */}
                    {experienceItem.details.map((details, id) => {
                      return <li key={id}>{details}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
