import styles from "./homecontent.module.css"
import Link from 'next/link'
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import TextSlider from "./TextFade";
import ProductsOnHomeCards from "./ProductsOnHomeCards";
import WhyUs from "./WhyUs";
import PricingListAthome from "./PricingListAthome"

// SSR hatalarını önlemek için Canvas içeriğini dinamik yükle
const Model = dynamic(() => import("../Models/HomeModel"), { ssr: false });

function HomeContent() {
  return (
    <div className={styles.homecontentcontainer} >
      <div className={styles.homebanner}>
        <div className={styles.bannercontentcontainer}>
          <div className={styles.homecardright} >
            <div className={styles.homecardtexts} >
              <span className={
                styles.homebannertitle
              } >
                Daha Akıllı Uygulamalarla Rakiplerinizin Önüne Geçin
              </span>
              <TextSlider />
              <Link href="packages" className={` ${styles.cardlink} ${styles.linecardlink}`}>Paketler</Link>
            </div>
            <div className={styles.bannerlistview} >
              <Model />
            </div>
          </div>
        </div>
      </div>
      <ProductsOnHomeCards />
      <WhyUs/>
      <PricingListAthome/>
    </div>
  )
}

export default HomeContent