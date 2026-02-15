import React from 'react';
import styles from './Sidebar.module.css';

interface ProfileProps {
    name: string;
    title: string;
}

const Profile: React.FC<ProfileProps> = ({ name, title }) => (
    <div className={styles.profile}>
        <div className={styles.avatarContainer}>
            <img src="/profile.jpg" alt={name} className={styles.avatar} />
        </div>
        <h1 className={styles.name}>{name}</h1>
        <h2 className={styles.title}>{title}</h2>
    </div>
);

export default Profile;
