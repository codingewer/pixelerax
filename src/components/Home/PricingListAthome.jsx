import React from "react";
import styles from "./pricinglistathome.module.css";
import Link from "next/link";

function PricingListAthome() {
  const packages = [
    {
      title: "Web Platformları",
      price: "₺5000+",
      url: "https://bionluk.com/coderingewer",
      description:
        "Yüksek hızlı, AI destekli, SEO odaklı modern web platformları.",
      features: [
        "Next.js mimarisi",
        "OpenAI veya özel AI entegrasyonu",
        "Akıllı öneri sistemleri",
        "Kurumsal arayüz tasarımı",
        "Mobil uyum & erişilebilirlik",
        "Lighthouse skoru optimizasyonu",
        "Gelişmiş panel & API altyapısı",
      ],
    },
    {
      title: "Sosyal Medya Yönetim Paneli",
      price: "Yakında!",
      url: "https://bionluk.com/coderingewer",
      description:
        "Sosyal medya hesaplarınızda otomatik paylaşım yapın ve her şeyi tek bir yerden takip edin",
      features: [
        "Modern kullanıcı deneyimi",
        "AI (GPT, LLaMA) entegrasyonu",
        "İşletmenize özel içerik sunumu",
        "Veri güvenliği önceliği",
      ],
    },
    {
      title: "Gerçek Zamanlı Analiz Paneli",
      price: "Yakında",
      url: "https://bionluk.com/coderingewer",
      description:
        "Gerçek zamanlı veri, AI öngörüleri ve özel paneller tek platformda.",
      features: [
        "Canlı veri görselleştirme",
        "ML tabanlı tahmin & analiz",
        "Özel metrik & KPI izleme",
        "Yetki bazlı kullanıcı erişimi",
        "Plotly.js / Grafana destekli grafikler",
        "PDF/Excel raporlama",
        "Filtreleme ve segmentasyon",
      ],
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
              <div className={styles.pricecontainer}>
                <div className={styles.price}>{pkg.price}</div>
                <Link
                  target="_blank"
                  href={pkg.url}
                  className={`${styles.button}`}
                >
                  Teklif Al
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default PricingListAthome;
