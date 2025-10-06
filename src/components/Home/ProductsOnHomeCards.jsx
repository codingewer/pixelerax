import React, { useEffect, useRef, useState } from "react";
import styles from "./homeproductlist.module.css";
import Link from "next/link";
import Arrowrigth from "../../assets/arrow-right.svg";
import Image from "next/image";

function ProductsOnHomeCards() {
  const shadowRef = useRef(null);
  const handleMouseMove = (e) => {
    const wrapper = e.currentTarget;
    const rect = wrapper.getBoundingClientRect();

    const offsetY = 20; // 20px aşağı

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top + offsetY;

    if (shadowRef.current) {
      shadowRef.current.style.left = `${x}px`;
      shadowRef.current.style.top = `${y}px`;
    }
  };

  const contentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth > 768) return; // sadece mobilde tetikle

    if (!contentRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.wrapper} onMouseMove={handleMouseMove}>
      <div ref={shadowRef} className={styles.shadow} />
      <div ref={contentRef} className={styles.container}>
        <div
          className={`${styles.card} ${styles.card1} ${
            isVisible ? styles.cardactive : ""
          }`}
        >
          <svg
            className={styles.borderAnim}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <rect x="0.25" y="0.25" width="99.5" height="99.5" rx="4" ry="2" />
          </svg>
          <span className={styles.cardtitle}>Sosyal Medya Panelleri</span>
          <span className={styles.cardtext}>
            {" "}
            Tüm hesaplarını tek yerden kontrol et, paylaşımlarını planla,
            etkileşimini takip et. Zamanını raporlarla değil, markanı büyütmekle
            harca. Biz paneli kolaylaştırdık, sen sadece yaratıcı ol!
          </span>
          <Link className="cardlink" href="https://bionluk.com/coderingewer">
            Teklif Al
          </Link>
        </div>
        <div
          className={`${styles.card} ${styles.card2} ${
            isVisible ? styles.cardactive : ""
          }`}
        >
          <svg
            className={styles.borderAnim}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <rect x="0.25" y="0.25" width="99.5" height="99.5" rx="4" ry="4" />
          </svg>
          <span className={styles.cardtitle}>Mobil Uygulamalar</span>
          <span className={styles.cardtext}>
            {" "}
            iOS ve Android uyumlu çözümlerimizle markaların dijital gücünü
            artırıyoruz. Kişiselleştirilmiş deneyim, güçlü altyapı ve modern
            tasarım anlayışıyla kullanıcıların beklentilerini bir adım öteye
            taşıyoruz.
          </span>
          <Link className="cardlink" href="https://bionluk.com/coderingewer">
            Teklif Al
          </Link>
        </div>
        <div
          className={`${styles.card} ${styles.card3} ${
            isVisible ? styles.cardactive : ""
          }`}
        >
          <svg
            className={styles.borderAnim}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <rect x="0.25" y="0.25" width="99.5" height="99.5" rx="4" ry="4" />
          </svg>
          <span className={styles.cardtitle}>Web Uygulamaları</span>
          <span className={styles.cardtext}>
            {" "}
            SEO dostu, hızlı ve erişilebilir altyapımızla markanızı dijital
            dünyada öne çıkarıyoruz. Ölçeklenebilir mimarimizle işletmenizin
            büyümesine güç katıyor, dijital dönüşümünüzü bir adım öteye
            taşıyoruz.
          </span>
          <Link className="cardlink" href="https://bionluk.com/coderingewer">
            Teklif Al
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductsOnHomeCards;
