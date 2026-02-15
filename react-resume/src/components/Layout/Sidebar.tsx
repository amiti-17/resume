import React from 'react';
import { ResumeData } from '../../data/resumeData';
import styles from './Sidebar.module.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

interface SidebarProps {
    data: ResumeData;
}

const Sidebar: React.FC<SidebarProps> = ({ data }) => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.profile}>
                <div className={styles.avatarContainer}>
                    <img src="/profile.jpg" alt={data.name} className={styles.avatar} />
                </div>
                <h1 className={styles.name}>{data.name}</h1>
                <h2 className={styles.title}>{data.title}</h2>
            </div>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Skills</h3>

                <div className={styles.skillGroup}>
                    <h4 className={styles.skillCategory}>Backend</h4>
                    <ul>{data.skills.backend.map(s => <li key={s}>{s}</li>)}</ul>
                </div>

                <div className={styles.skillGroup}>
                    <h4 className={styles.skillCategory}>Frontend</h4>
                    <ul>{data.skills.frontend.map(s => <li key={s}>{s}</li>)}</ul>
                </div>

                <div className={styles.skillGroup}>
                    <h4 className={styles.skillCategory}>Databases</h4>
                    <ul>{data.skills.databases.map(s => <li key={s}>{s}</li>)}</ul>
                </div>

                <div className={styles.skillGroup}>
                    <h4 className={styles.skillCategory}>Languages</h4>
                    <ul>{data.languages.map(s => <li key={s}>{s}</li>)}</ul>
                </div>
            </div>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Education</h3>
                {data.education.map((edu, index) => (
                    <div key={index} className={styles.educationItem}>
                        <div className={styles.school}>{edu.school}</div>
                        <div className={styles.degree}>{edu.degree}</div>
                        <div className={styles.period}>{edu.period}</div>
                    </div>
                ))}
            </div>

            <div className={styles.section}>
                <div className={styles.skillGroup}>
                    <h3 className={styles.sectionTitle}>Hobbies</h3>
                    <ul>{data.hobbies.map(h => <li key={h}>{h}</li>)}</ul>
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.skillGroup}>
                    <h3 className={styles.sectionTitle}>Contact</h3>
                    <div className={styles.contactList}>
                        <div className={styles.contactItem}>
                            <FaPhone className={styles.icon} />
                            <a href={`tel:${data.contacts.phone}`}>{data.contacts.phone}</a>
                        </div>
                        <div className={styles.contactItem}>
                            <FaEnvelope className={styles.icon} />
                            <a href={`mailto:${data.contacts.email}`}>{data.contacts.email}</a>
                        </div>
                        <div className={styles.contactItem}>
                            <FaMapMarkerAlt className={styles.icon} />
                            {data.location}
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
