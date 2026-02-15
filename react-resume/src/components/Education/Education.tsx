import React from 'react';
import { Education as EducationType } from '../../data/resumeData';
import styles from './Education.module.css';

interface EducationProps {
    data: EducationType[];
}

const Education: React.FC<EducationProps> = ({ data }) => {
    return (
        <div className={styles.container}>
            {data.map((edu, index) => (
                <div key={index} className={styles.item}>
                    <h4 className={styles.school}>{edu.school}</h4>
                    <p className={styles.program}>{edu.program}</p>
                    <div className={styles.meta}>
                        <span>{edu.period}</span>
                        <span> | {edu.location}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Education;
