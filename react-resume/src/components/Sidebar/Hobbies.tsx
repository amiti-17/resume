import React from 'react';
import styles from './Sidebar.module.css';
import ListRenderer from '../common/ListRenderer';

interface HobbiesProps {
    hobbies: string[];
}

const Hobbies: React.FC<HobbiesProps> = ({ hobbies }) => (
    <div className={styles.section}>
        <div className={styles.skillGroup}>
            <h3 className={styles.sectionTitle}>Hobbies</h3>
            <ListRenderer items={hobbies} />
        </div>
    </div>
);

export default Hobbies;
