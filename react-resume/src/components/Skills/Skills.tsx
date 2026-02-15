import React from 'react';
import { ResumeData } from '../../data/resumeData';
import styles from './Skills.module.css';

interface SkillsProps {
    data: ResumeData['skills'];
}

const Skills: React.FC<SkillsProps> = ({ data }) => {
    return (
        <div className={styles.container}>
            <div className={styles.category}>
                <h4 className={styles.categoryTitle}>Technical Skills</h4>
                {data.tech.map((category, index) => (
                    <div key={index} className={styles.subCategory}>
                        <h5 className={styles.subCategoryTitle}>{category.title}:</h5>
                        <div className={styles.list}>
                            {category.skills.map((skill, i) => (
                                <span key={i} className={styles.tag}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.category}>
                <h4 className={styles.categoryTitle}>Soft Skills</h4>
                <div className={styles.list}>
                    {data.soft.map((skill, index) => (
                        <span key={index} className={`${styles.tag} ${styles.soft}`}>
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
