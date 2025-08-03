"use client";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./page.module.css";
import HomeContent from "@/components/Home/HomeContent";
import Footer from "../components/Footer/Footer"
export const metadata = {
  title: "Mithrabyte | Yapay Zeka Destekli Çözümler",
  description: "Yapay zeka destekli mobil ve web uygulamalarıyla işinizi büyütün.",
};
export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <HomeContent />
      <Footer />
    </div>
  );
}
