import React from 'react';
import { Project } from '@/data/resumeData';
import styles from './MainContent.module.css';

interface ProjectsProps {
    projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => (
    <section className={styles.section}>
        <h2 className={styles.heading}>EXPERIENCE</h2>
        {projects.map((proj, index) => (
            <div key={index} className={styles.projectItem}>
                <h3 className={styles.projectTitle}>
                    {proj.link ? (
                        <a href={proj.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                            {proj.title}
                        </a>
                    ) : (
                        proj.title
                    )}
                </h3>
                <p className={styles.text}>{proj.description}</p>
            </div>
        ))}
    </section>
);

export default Projects;
