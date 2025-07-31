import React from 'react'
import styles from "./pricinglistathome.module.css"
import Link from 'next/link';

function PricingListAthome() {
  const packages = [
    {
      title: 'Mobil Uygulama',
      description: 'iOS ve Android için native deneyim. Flutter, React Native veya Swift/Java.',
      features: ['Push Bildirim', 'Offline Mod', 'Kamera/GPS Entegrasyonu'],
      price: '₺45.000',
    },
    {
      title: 'Web Uygulama',
      description: 'Tüm ekranlara uyumlu, SEO dostu web uygulaması. React, Next.js altyapısı.',
      features: ['Admin Panel', 'SEO Desteği', 'Responsive Tasarım', 'Responsive Tasarım'],
      price: '₺35.000',
    },
    {
      title: 'CLI Uygulama',
      description: 'Terminal üzerinden çalışan hızlı ve etkili komut satırı araçları.',
      features: ['Otomasyon', 'Loglama', 'Cross-platform desteği'],
      price: '₺15.000',
    },
  ];
  return (
    <>
      <main className={styles.container}>
        <h1 className={styles.title}>Paketlerimiz</h1>

        <div className={styles.cardContainer}>
          {packages.map((pkg, i) => (
            <div key={i} className={styles.card}>
              <h2 className={styles.cardTitle}>{pkg.title}</h2>
              <p className={styles.cardDesc}>{pkg.description}</p>
              <ul className={styles.featureList}>
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <div className={styles.price}>{pkg.price}</div>
              <Link href="" className={`${styles.button}`}>Teklif Al</Link>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default PricingListAthome