import React from 'react'
import styles from "./aboutus.module.css"
import { Users, Rocket, Target } from 'lucide-react';
function AboutUs() {
  return (
      <div className={styles.aboutContainer}>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Hakkımızda</h2>
        <p className={styles.sectionText}>
          Yenilikçi teknolojilerle modern ve kullanıcı odaklı çözümler üreten bir ekibiz.
          Tasarımlarımızda sadelik, erişilebilirlik ve performansı ön planda tutarız.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Değerlerimiz</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <Users className={styles.icon} />
            <h3>İşbirliği</h3>
            <p className={styles.sectionText}>
              Takım ruhunu önemseriz. Başarı birlikte çalışınca gelir.
            </p>
          </div>
          <div className={styles.featureCard}>
            <Rocket className={styles.icon} />
            <h3>İnovasyon</h3>
            <p className={styles.sectionText}>
              Sürekli yenileniriz. Geleceği bugünden inşa ederiz.
            </p>
          </div>
          <div className={styles.featureCard}>
            <Target className={styles.icon} />
            <h3>Odak</h3>
            <p className={styles.sectionText}>
              Müşteri deneyimini merkeze alır, sonuç odaklı çalışırız.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs