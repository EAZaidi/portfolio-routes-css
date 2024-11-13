import React from 'react';
import styles from '../styles/Hero.module.css'; 

const Hero = () => {
  return (
    <div id="hero" className={styles.hero}>
      <div className={styles.heroContent}></div>
      <div className={styles.heroHidden}></div>
      <div className={styles.heroText}>
        <div>
          <p>Hello, I&apos;m</p>
          <p>Essa</p>
          <p>Abbas Zaidi</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
