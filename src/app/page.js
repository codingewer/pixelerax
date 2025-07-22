"use client";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./page.module.css";
import HomeContent from "@/components/Cards/HomeContent";
export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar/>
     
      <HomeContent/>
    </div>
  );
}
