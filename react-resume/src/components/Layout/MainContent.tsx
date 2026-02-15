import React from 'react';
import { ResumeData } from '../../data/resumeData';
import styles from './MainContent.module.css';

interface MainContentProps {
    data: ResumeData;
}

const MainContent: React.FC<MainContentProps> = ({ data }) => {
    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <h2 className={styles.heading}>About me</h2>
                <p className={styles.text}>{data.about}</p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.heading}>EMPLOYMENT HISTORY</h2>
                {data.experience.map((exp, index) => (
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

            <section className={styles.section}>
                <h2 className={styles.heading}>EXPERIENCE</h2>
                {data.projects.map((proj, index) => (
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
        </main>
    );
};

export default MainContent;
