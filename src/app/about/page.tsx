import React from 'react';
import styles from '../styles/About.module.css';


function About() {
  return (
    <div className={styles.itemsCenter}>
      <div className={styles.gridLayout}>
        <div id="about" className={styles.container}>
          <h2 className={styles.aboutHeading}>About Me</h2>
        </div>

        <div className={styles.flexColumn}>
          <p className={styles.aboutParagraph}>
            I am a student at GIAIC, pursuing a course in Artificial Intelligence, Web 3.0 & Metaverse. I am passionate about technology and its potential to transform our lives and constantly learning new skills to stay up-to-date with the latest innovations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
