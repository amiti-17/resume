import React from 'react';
import { Education as EducationType } from '@/data/resumeData';
import styles from './Sidebar.module.css';

interface EducationProps {
    education: EducationType[];
}

const Education: React.FC<EducationProps> = ({ education }) => (
    <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Education</h3>
        {education.map((edu, index) => (
            <div key={index} className={styles.educationItem}>
                <div className={styles.school}>{edu.school}</div>
                <div className={styles.degree}>{edu.degree}</div>
                <div className={styles.period}>{edu.period}</div>
            </div>
        ))}
    </div>
);

export default Education;
