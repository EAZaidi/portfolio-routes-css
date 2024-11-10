import React from 'react';
import styles from '../styles/Hero.module.css'; // Adjust the path if needed

const Hero = () => {
  return (
    <div id="hero" className={styles.hero}>
      <div className={styles.heroContent}></div>
      <div className={styles.heroHidden}></div>
      <div className={styles.heroText}>
        <div>
          <p data-aos="zoom-in">Hello, I&apos;m</p>
          <p data-aos="zoom-in">Essa</p>
          <p data-aos="zoom-in">Abbas Zaidi</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
