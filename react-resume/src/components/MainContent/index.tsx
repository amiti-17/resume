import React from 'react';
import { ResumeData } from '@/data/resumeData';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import styles from './MainContent.module.css';

interface MainContentProps {
    data: ResumeData;
}

const MainContent: React.FC<MainContentProps> = ({ data }) => {
    return (
        <main className={styles.main}>
            <About about={data.about} />
            <Experience experience={data.experience} />
            <Projects projects={data.projects} />
        </main>
    );
};

export default MainContent;
