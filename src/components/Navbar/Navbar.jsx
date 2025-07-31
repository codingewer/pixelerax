"use client";
import React, { useEffect, useState } from 'react'
import styles from "./navbar.module.css";
import Link from 'next/link';
import { MdNightlightRound, MdSunny } from "react-icons/md";
import { Logs } from 'lucide-react';
import SidebarMenu from './SidebarMenu';
import ThemeSwticher from './ThemeSwticher';
function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.navbarcontanier} >
            <SidebarMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className={`${styles.emptydiv} ${styles.emptydivleft}`} ></div>
      <div className={styles.navbar} >
        <div className={styles.logo}>
          <Link href="/">
            <img
              src="/logo.svg"
              alt="mithrabyte"
              className={styles.logoimg}
            />
          </Link>
        </div>
        <div className={styles.navlinks}>
          <Link className={styles.navlink} href="packages" >Paketler</Link>
          <Link className={styles.navlink} href="services" >Hizmetlerimiz</Link>
          <Link className={styles.navlink} href="aboutus" >Hakkımızda</Link>
          <Link className={styles.navlink} href="contact" >İletişim</Link>

       <ThemeSwticher/>
        </div>
              <button className={styles.navmenubutton} onClick={() => setMenuOpen(!menuOpen)}  ><Logs/> </button>
      </div>
      <div className={`${styles.emptydiv} ${styles.emptydivright}`} ></div>
    </div>
  )
}

export default Navbar