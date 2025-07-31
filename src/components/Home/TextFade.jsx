'use client';

import { useEffect, useState } from "react";
import styles from './textfade.module.css';

const texts = [
  "Kurumlarınızın geleceğine yapay zeka ile şekil verin",
  "Güçlü dinamik ve ekibinize uygun YZ uygulamaları",
];

export default function TextSlider() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setAnimate(false);
      }, 500); // animasyon süresi kadar bekle
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.text} ${animate ? styles.slideUp : ""}`}>
        {texts[index]}
      </div>
    </div>
  );
}
