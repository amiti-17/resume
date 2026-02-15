import React from 'react';
import { Project } from '../../data/resumeData';
import styles from './Projects.module.css';

interface ProjectsProps {
    data: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
    return (
        <ul className={styles.list}>
            {data.map((project, index) => (
                <li key={index} className={styles.item}>
                    <div className={styles.header}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                            {project.title}
                        </a>
                        <span className={styles.techStack}>
                            [{project.technologies.join(', ')}]
                        </span>
                    </div>
                    {/* Description could go here if added to data */}
                </li>
            ))}
        </ul>
    );
};

export default Projects;
