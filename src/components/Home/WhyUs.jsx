import React, { useEffect, useRef, useState } from "react";
import styles from "./whyus.module.css";
import Link from "next/link";

function WhyUs() {
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
    <div className={styles.whyuscontainer}>
      <div
        ref={contentRef}
        className={`${styles.whyuscontent} ${isVisible ? styles.active : ""}`}
      >
        <div
          className={`${styles.whyustexts} ${isVisible ? styles.whyustextsopacityactive : ""}`}
        >
          <h1>Neden Biz?</h1>
          <p>
            Her projeye kendi işimiz gibi yaklaşır, sade ve güçlü çözümler üretiriz. 
            Mobil uygulamalardan yapay zeka destekli sistemlere kadar,
             yüksek performanslı yazılımlar geliştiririz. Küçük ama 
             çevik ekibimizle hızlı, esnek ve size özel çözümler sunar, teslim sonrası destekle
            uzun vadeli iş ortaklıkları kurarız.
          </p>
        <Link className="cardlink" target="_blank" href="https://bionluk.com/coderingewer">Detaylı Bilgi</Link>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
