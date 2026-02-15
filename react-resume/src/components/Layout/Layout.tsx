import React from 'react';
import styles from './Layout.module.css';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>
                <p>&copy; {new Date().getFullYear()} Shkandiuk Tymofii. Built with React & TypeScript.</p>
            </footer>
        </div>
    );
};

export default Layout;
