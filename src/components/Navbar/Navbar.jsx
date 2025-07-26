import React from 'react'
import styles from "./navbar.module.css";
import Logo from "../../../public/logo.svg"
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  return (
    <div className={styles.navbarcontanier} >
      <div className={`${styles.emptydiv} ${styles.emptydivleft}`} ></div>
      <div className={styles.navbar} >
        <div className={styles.logo}>
          <Link href="/">
            <Logo className={styles.logoimg} alt='PixeleraX'   />
          </Link>
        </div>
        <div className={styles.navlinks}>
          <Link className={styles.navlink} href="" >Fiyatlandırma</Link>
          <Link className={styles.navlink} href="" >Ürünlerimiz</Link>
          <Link  className={styles.navlink} href="" >Referanslarımız</Link>
          <Link className={styles.navlink} href="" >Hakkımızda</Link>
          <Link className={`${styles.navlink} ${styles.bottomrightclipped}`} href="" >İletişim</Link>

        </div>
      </div>
      <div className={`${styles.emptydiv} ${styles.emptydivright}`} ></div>
    </div>
  )
}

export default Navbar