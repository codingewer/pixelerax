import styles from './sidebarmenu.module.css';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import ThemeSwticher from './ThemeSwticher';

export default function SidebarMenu({ open, onClose }) {
    const links = [
        { href: '/', label: 'Ana Sayfa' },
        { href: '/aboutus', label: 'Hakkımızda' },
        { href: '/packages', label: 'Paketlerimiz' },
        { href: '/serivces', label: 'Hizmetlerimiz' },
        { href: '/contact', label: 'İletişim' },
    ];

    const socialLinks = [
        { href: 'https://twitter.com/kullaniciadi', icon: <Twitter className={styles.socialIcon} />, label: 'Twitter' },
        { href: 'https://instagram.com/kullaniciadi', icon: <Instagram className={styles.socialIcon} />, label: 'Instagram' },
        { href: 'https://linkedin.com/in/kullaniciadi', icon: <Linkedin className={styles.socialIcon} />, label: 'LinkedIn' },
        { href: 'https://github.com/kullaniciadi', icon: <Github className={styles.socialIcon} />, label: 'Github' },
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
