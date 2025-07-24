import styles from "./homecontent.module.css"
import Link from 'next/link'
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import TextSlideshow from "./TextFade";
import TextSlider from "./TextFade";
import { motion } from 'framer-motion';
import ProductsOnHomeCards from "./ProductsOnHomeCards";

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
                Devlerin liginde mücadeleye etmek isteyenlerin yeri
              </span>
              <TextSlider />
              <Link href="" className={` ${styles.cardlink} ${styles.linecardlink}`}>Fiyatlandırma</Link>
            </div>
            <div className={styles.bannerlistview} >
              <Model />
            </div>
          </div>
        </div>
      </div>
      <ProductsOnHomeCards />
    </div>
  )
}

export default HomeContent