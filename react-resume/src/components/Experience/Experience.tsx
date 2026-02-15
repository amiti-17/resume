import React from 'react';
import { Experience as ExperienceType } from '../../data/resumeData';
import styles from './Experience.module.css';

interface ExperienceProps {
    data: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
    return (
        <div className={styles.container}>
            {data.map((exp, index) => (
                <div key={index} className={styles.item}>
                    <div className={styles.header}>
                        <h4 className={styles.role}>{exp.role}</h4>
                        <span className={styles.company}> @ {exp.company}</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.period}>{exp.period}</span>
                        <span className={styles.location}> | {exp.location}</span>
                    </div>
                    <ul className={styles.description}>
                        {exp.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Experience;
