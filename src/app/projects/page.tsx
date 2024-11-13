import React from 'react';
import styles from '../styles/Projects.module.css';
import Card from '../components/Card';
import Heading from '../components/Heading';


const data = [
    {
        id: 0,
        name: 'Facebook Login Page Clone',
        description: 'A facebook login page clone using Next.js and Tailwind CSS.',
        img: '/facebook.jpg',
        tags: ['Next.js', 'HTML', 'Node', 'Tailwind CSS'],
    },
];

const Projects = () => {
  return (
    <div id="projects" className={styles.container}>
      <Heading title="My Projects" />
      <div className={styles.gridLayout}>
        {data.map((el) => (
          <Card 
            key={el.id}
            title={el.name}
            desc={el.description}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
