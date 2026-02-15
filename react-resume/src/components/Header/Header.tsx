import React from 'react';
import { ResumeData } from '../../data/resumeData';
import styles from './Header.module.css';

interface HeaderProps {
    data: ResumeData;
}

const Header: React.FC<HeaderProps> = ({ data }) => {
    return (
        <header className={styles.header}>
            <div className={styles.intro}>
                <h2 className={styles.title}>{data.title}</h2>
                <h1 className={styles.name}>{data.name}</h1>
                <p className={styles.about}>{data.about}</p>
            </div>
            <div className={styles.contacts}>
                <h3>Contacts</h3>
                <ul>
                    <li>
                        <span className={styles.contactLabel}>C:</span>{' '}
                        <a href={`tel:${data.contacts.phone}`}>{data.contacts.phone}</a>
                    </li>
                    <li>
                        <span className={styles.contactLabel}>E:</span>{' '}
                        <a href={`mailto:${data.contacts.email}`}>{data.contacts.email}</a>
                    </li>
                    {data.contacts.github && (
                        <li>
                            <span className={styles.contactLabel}>GH:</span>{' '}
                            <a href={data.contacts.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                        </li>
                    )}
                    {data.contacts.linkedin && (
                        <li>
                            <span className={styles.contactLabel}>LI:</span>{' '}
                            <a href={data.contacts.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </li>
                    )}
                </ul>
            </div>
        </header>
    );
};

export default Header;
