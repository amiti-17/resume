import React from 'react';
import { ResumeData } from '@/data/resumeData';
import styles from './Sidebar.module.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

interface ContactProps {
    contacts: ResumeData['contacts'];
    location: string;
}

const Contact: React.FC<ContactProps> = ({ contacts, location }) => (
    <div className={styles.section}>
        <div className={styles.skillGroup}>
            <h3 className={styles.sectionTitle}>Contact</h3>
            <div className={styles.contactList}>
                <div className={styles.contactItem}>
                    <FaPhone className={styles.icon} />
                    <a href={`tel:${contacts.phone}`}>{contacts.phone}</a>
                </div>
                <div className={styles.contactItem}>
                    <FaEnvelope className={styles.icon} />
                    <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
                </div>
                {contacts.linkedin && (
                    <div className={styles.contactItem}>
                        <FaLinkedin className={styles.icon} />
                        <a href={contacts.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                )}
                {contacts.github && (
                    <div className={styles.contactItem}>
                        <FaGithub className={styles.icon} />
                        <a href={contacts.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                )}
                <div className={styles.contactItem}>
                    <FaMapMarkerAlt className={styles.icon} />
                    {location}
                </div>
            </div>
        </div>
    </div>
);

export default Contact;
