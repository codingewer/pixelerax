import styles from './sidebarmenu.module.css';
import {  Instagram, Github } from 'lucide-react';
import ThemeSwticher from './ThemeSwticher';

export default function SidebarMenu({ open, onClose }) {
    const links = [
        { href: '/', label: 'Ana Sayfa' },
        { href: '/aboutus', label: 'Hakkımızda' },
        { href: '/packages', label: 'Paketlerimiz' },
        { href: '/services', label: 'Hizmetlerimiz' },
        { href: '/contact', label: 'İletişim' },
    ];

    const socialLinks = [
        { href: 'https://instagram.com/mithrabyte', icon: <Instagram className={styles.socialIcon} />, label: 'Instagram' },
        { href: 'https://github.com/codingewer', icon: <Github className={styles.socialIcon} />, label: 'Github' },
    ];

    return (
        <>
            <nav className={`${styles.sidebar} ${open ? styles.open : ''}`}>
                <ul>
                    {links.map(({ href, label }) => (
                        <li key={href}>
                            <a href={href} onClick={onClose}>{label}</a>
                        </li>
                    ))}
                </ul>

                <div className={styles.socialContainer}>
                    {socialLinks.map(({ href, icon, label }) => (
                        <a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className={styles.socialLink}
                            onClick={onClose}
                        >
                            {icon}
                        </a>
                    ))}
                    <ThemeSwticher/>
                </div>
            </nav>

            {open && <div className={styles.overlay} onClick={onClose}></div>}
        </>
    );
}
