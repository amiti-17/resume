import React from 'react';
import styles from './MainContent.module.css';

interface AboutProps {
    about: string;
}

const About: React.FC<AboutProps> = ({ about }) => (
    <section className={styles.section}>
        <h2 className={styles.heading}>About me</h2>
        <p className={styles.text}>{about}</p>
    </section>
);

export default About;
