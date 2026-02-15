import React from 'react';
import { ResumeData } from '@/data/resumeData';
import Profile from './Profile';
import Contact from './Contact';
import Skills from './Skills';
import Education from './Education';
import Hobbies from './Hobbies';
import styles from './Sidebar.module.css';

interface SidebarProps {
    data: ResumeData;
}

const Sidebar: React.FC<SidebarProps> = ({ data }) => {
    return (
        <aside className={styles.sidebar}>
            <Profile name={data.name} title={data.title} />
            <Contact contacts={data.contacts} location={data.location} />
            <Skills skills={data.skills} languages={data.languages} />
            <Education education={data.education} />
            <Hobbies hobbies={data.hobbies} />
        </aside>
    );
};

export default Sidebar;
