import React from 'react';
import { ResumeData } from '@/data/resumeData';
import styles from './Sidebar.module.css';
import ListRenderer from '../common/ListRenderer';

interface SkillsProps {
    skills: ResumeData['skills'];
    languages: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills, languages }) => (
    <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Skills</h3>

        <div className={styles.skillGroup}>
            <h4 className={styles.skillCategory}>Backend</h4>
            <ListRenderer items={skills.backend} />
        </div>

        <div className={styles.skillGroup}>
            <h4 className={styles.skillCategory}>Frontend</h4>
            <ListRenderer items={skills.frontend} />
        </div>

        <div className={styles.skillGroup}>
            <h4 className={styles.skillCategory}>Databases</h4>
            <ListRenderer items={skills.databases} />
        </div>

        <div className={styles.skillGroup}>
            <h4 className={styles.skillCategory}>Languages</h4>
            <ListRenderer items={languages} />
        </div>
    </div>
);

export default Skills;
