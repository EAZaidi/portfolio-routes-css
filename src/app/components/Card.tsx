import Image from 'next/image';
import React from 'react';
import styles from '../styles/Card.module.css';


interface propsType {
    title: string;
    desc: string;
    img: string;
    tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
  return (
    <div className={styles.card}>
        <div>
            <Image
                className={styles.cardImage}
                src={img}
                width={350}
                height={350}
                alt={title}
            />
        </div>

        <div className={styles.cardContent}>
            <div className={styles.cardTitle}>{title}</div>
            <div>{desc}</div>
            <div>
                {tags.map((el) => (
                    <div className={styles.cardTag} key={el}>
                        {el}
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Card;
