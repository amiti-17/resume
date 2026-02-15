import React from 'react';
import { ResumeData } from '../../data/resumeData';
import styles from './Sidebar.module.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

interface SidebarProps {
    data: ResumeData;
}

const SkillList: React.FC<{ items: string[] }> = ({ items }) => (
    <ul>
        {items.map(item => <li key={item}>{item}</li>)}
    </ul>
);

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
                        {data.contacts.linkedin && (
                            <div className={styles.contactItem}>
                                <FaLinkedin className={styles.icon} />
                                <a href={data.contacts.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            </div>
                        )}
                        {data.contacts.github && (
                            <div className={styles.contactItem}>
                                <FaGithub className={styles.icon} />
                                <a href={data.contacts.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                        )}
                        <div className={styles.contactItem}>
                            <FaMapMarkerAlt className={styles.icon} />
                            {data.location}
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Skills</h3>

                <div className={styles.skillGroup}>
                    <h4 className={styles.skillCategory}>Backend</h4>
                    <SkillList items={data.skills.backend} />
                </div>

                <div className={styles.skillGroup}>
                    <h4 className={styles.skillCategory}>Frontend</h4>
                    <SkillList items={data.skills.frontend} />
                </div>

                <div className={styles.skillGroup}>
                    <h4 className={styles.skillCategory}>Databases</h4>
                    <SkillList items={data.skills.databases} />
                </div>

                <div className={styles.skillGroup}>
                    <h4 className={styles.skillCategory}>Languages</h4>
                    <SkillList items={data.languages} />
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
                    <SkillList items={data.hobbies} />
                </div>
            </div>


        </aside >
    );
};

export default Sidebar;
