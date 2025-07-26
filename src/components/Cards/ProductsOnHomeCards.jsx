import React, { useRef } from 'react'
import styles from "./homeproductlist.module.css"
import Link from 'next/link';
import Arrowrigth from "../../assets/arrow-right.svg"
import Image from 'next/image';

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
                    <h1 className={styles.cardtitle} >İşinize uygun Yapay Zeka Asistanlar</h1>
                    <p className={styles.cardtext} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint corrupti beatae nemo odio amet quos maiores delectus laboriosam dolore quisquam eaque corporis hic debitis quod, earum adipisci! Odio, sunt?
                    </p>
                    <Link className={styles.cardlink} href="/">Detaylı Bilgi</Link>
                </div>
                <div className={`${styles.card} ${styles.card2}`}>
                    <svg className={styles.borderAnim} viewBox="0 0 100 100" preserveAspectRatio="none">
                        <rect x="0.25" y="0.25" width="99.5" height="99.5" rx="4" ry="8" />
                    </svg>
                    <h1 className={styles.cardtitle} >Web siteleri</h1>
                    <p className={styles.cardtext} >  consectetur adipisicing elit. Aspernatur sint corru eaque corporis hic debitis quod, earum adipisci! Odio, sunt?
                    </p>
                    <Link className={styles.cardlink} href="/">Detaylı Bilgi</Link>
                </div>
                <div className={`${styles.card} ${styles.card3}`}>
                    <svg className={styles.borderAnim} viewBox="0 0 100 100" preserveAspectRatio="none">
                        <rect x="0.25" y="0.25" width="99.5" height="99.5" rx="4" ry="8" />
                    </svg>
                    <h1 className={styles.cardtitle} >Mobil Uygulamalar</h1>
                    <p className={styles.cardtext} >  maiores delectus laboriosam dolore quisquam eaque corporis hic debitis quod, earum adipisci! Odio, sunt?
                    </p>
                    <Link className={styles.cardlink} href="/">Detaylı Bilgi</Link>
                </div>
                <Link className={styles.moreproductslink} href="/">
                    <Arrowrigth className="svgicononlink" width={40} height={40} alt='daha fazla' />
                </Link>
            </div>
        </div>
    )
}

export default ProductsOnHomeCards