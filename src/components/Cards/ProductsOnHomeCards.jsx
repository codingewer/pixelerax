import React, { useRef } from 'react'
import styles from "./homeproductlist.module.css"
import Link from 'next/link';

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


    return (
        <div className={styles.wrapper} onMouseMove={handleMouseMove}>
            <div ref={shadowRef} className={styles.shadow} />
            <div className={styles.container}>
                <div className={`${styles.card} ${styles.card1}`}>
                    <svg className={styles.borderAnim} viewBox="0 0 100 100" preserveAspectRatio="none">
                        <rect x="0.25" y="0.25" width="99.5" height="99.5" rx="2" ry="2" />
                    </svg>
                    <h1>İşinize uygun Yapay Zeka Asistanlar</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint corrupti beatae nemo odio amet quos maiores delectus laboriosam dolore quisquam eaque corporis hic debitis quod, earum adipisci! Odio, sunt?
                    </p>
                    <Link href="/">Detaylı Bilgi</Link>
                </div>
                <div className={`${styles.card} ${styles.card2}`}>
                    <svg className={styles.borderAnim} viewBox="0 0 100 100" preserveAspectRatio="none">
                        <rect x="0.25" y="0.25" width="99.5" height="99.5" rx="2" ry="7" />
                    </svg>
                    <h2  >Yapa Zeka Destekli Mobil Uygulamalar</h2>
                    <p>Yapa Zeka Destekli Mobil Uygulamalar</p>
                    <Link href="/">Detaylı Bilgi</Link>
                </div>
                <div className={`${styles.card} ${styles.card3}`}>
                    <svg className={styles.borderAnim} viewBox="0 0 100 100" preserveAspectRatio="none">
                        <rect x="0.25" y="0.25" width="99.5" height="99.5" rx="2" ry="7" />
                    </svg>
                    <h2>Sunucu taraflı uygulamalar</h2>
                    <p>Sunucu taraflı uygulamalar</p>
                    <Link href="/">Detaylı Bilgi</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductsOnHomeCards