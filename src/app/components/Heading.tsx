import React from 'react';
import styles from '../styles/Heading.module.css'; // Adjust the path if needed

interface propsType {
  title: string;
}

const Heading: React.FC<propsType> = ({ title }) => {
  return (
    <div className={styles.headingContainer}>
      <p className={styles.headingTitle}>{title}</p>
    </div>
  );
};

export default Heading;
