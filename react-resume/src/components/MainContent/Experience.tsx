import React from 'react';
import { Experience as ExperienceType } from '@/data/resumeData';
import styles from './MainContent.module.css';

interface ExperienceProps {
    experience: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => (
    <section className={styles.section}>
        <h2 className={styles.heading}>EMPLOYMENT HISTORY</h2>
        {experience.map((exp: ExperienceType, index: number) => (
            <div key={index} className={styles.experienceItem}>
                <div className={styles.expHeader}>
                    <h3 className={styles.role}>{exp.role}</h3>
                </div>
                <div className={styles.expMeta}>
                    <span className={styles.company}>{exp.company}</span>
                    <span className={styles.period}> | {exp.period}</span>
                </div>
                <ul className={styles.description}>
                    {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                    ))}
                </ul>
            </div>
        ))}
    </section>
);

export default Experience;
