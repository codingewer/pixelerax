import React from "react";
import styles from "./aboutus.module.css";
import { Users, Rocket, Target } from "lucide-react";
function AboutUs() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Hakkımızda</h2>
        <p className={styles.sectionText}>
          Biz, teknolojiyi sadece bir araç değil, insanlara değer katan bir
          deneyim olarak gören bir ekibiz. Yenilikçi fikirlerle, modern ve
          kullanıcı odaklı çözümler geliştiriyor; her projede sadelik,
          erişilebilirlik ve performansı ön planda tutuyoruz. Farklı alanlardan
          gelen geliştiriciler, tasarımcılar ve fikir üreticilerinden oluşan
          küçük ama tutkulu bir ekibiz. Kod yazarken de tasarım yaparken de tek
          bir hedefimiz var: gerçek bir etki yaratmak. Her markayı, kendi
          hikâyesine ve hedeflerine göre ele alıyor; onları dijital dünyada daha
          görünür, daha güçlü ve daha kendine özgü hâle getiriyoruz. Bizim için
          her proje, birlikte öğrenilen ve birlikte büyünülen bir yolculuk. 🚀
          Kısacası; biz sadece projeler yapmıyoruz, markalarla birlikte hayal
          kuruyoruz. ✨
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
  );
}

export default AboutUs;
