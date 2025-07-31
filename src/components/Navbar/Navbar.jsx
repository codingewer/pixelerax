"use client";
import React, { useEffect, useState } from 'react'
import styles from "./navbar.module.css";
import Link from 'next/link';
import { MdNightlightRound, MdSunny } from "react-icons/md";
import { Logs } from 'lucide-react';
import SidebarMenu from './SidebarMenu';
function Navbar() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // LocalStorage'dan tema al
    const storedTheme = localStorage.getItem("theme") || "dark";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };
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

          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="theme-toggle"
          >

            <div className={`toggle-thumb ${theme}`}>
              {
                theme === "dark" ? <span className="icon-sun"><MdSunny /></span>
                :
                <span className="icon-moon"><MdNightlightRound /></span>
              }
            </div>
          </button>
        </div>
              <button className={styles.navmenubutton} onClick={() => setMenuOpen(!menuOpen)} isOpen={menuOpen} ><Logs/> </button>
      </div>
      <div className={`${styles.emptydiv} ${styles.emptydivright}`} ></div>
    </div>
  )
}

export default Navbar