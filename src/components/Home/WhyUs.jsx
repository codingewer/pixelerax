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
            Biz, her projeyi kendi işimiz gibi görür, sade ve etkili çözümler üretmeye odaklanırız. Mobil uygulamalardan yapay zeka destekli platformlara, veri analizinden özel geliştirdiğimiz araçlara kadar geniş bir yelpazede yüksek kaliteyi ve performansı ön planda tutarız. Teknolojiyi sadece kullanmakla kalmaz, işin ruhunu ve kullanıcı deneyimini derinlemesine anlayarak projelere yansıtırız. Küçük ama çevik bir ekip olarak, hızlı ve esnek hareket eder; ihtiyaçlarınıza özel, size değer katan yazılım çözümleri sunarız. Teslim sonrası destekle, uzun vadeli iş ortaklıkları kurmayı hedefleriz. Eğer işine önem veren, sonuç odaklı bir yazılım ortağı arıyorsan, doğru adrestesin.
          </p>
        </div>
        <Link className="cardlink" href="/">Detaylı Bilgi</Link>
      </div>
    </div>
  );
}

export default WhyUs;
