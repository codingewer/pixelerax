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
            çünkü iş bulamıyoz abii
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio cupiditate doloribus commodi id reprehenderit, doloremque illo asperiores minus error culpa quo temporibus maxime numquam esse, fugiat magnam ad nesciunt quaerat!
          </p>
        </div>
        <Link className="cardlink" href="/">Detaylı Bilgi</Link>
      </div>
    </div>
  );
}

export default WhyUs;
