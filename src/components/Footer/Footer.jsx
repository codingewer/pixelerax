import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        {/* Logo */}
        <div className={styles.left}>
          <div className={styles.logo}>
            <Image src="/logo.svg" alt="Logo" width={120} height={40} />
          </div>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Mithrabyte Tüm hakları saklıdır.
          </p>
        </div>

        {/* Menü linkleri */}
        <div className={styles.links}>
          <Link href="/" className={styles.link}>Ana Sayfa</Link>
          <Link href="/hakkimizda" className={styles.link}>Hakkımızda</Link>
          <Link href="/hizmetler" className={styles.link}>Hizmetler</Link>
          <Link href="/iletisim" className={styles.link}>İletişim</Link>
        </div>
      </div>
    </footer>
  );
}
