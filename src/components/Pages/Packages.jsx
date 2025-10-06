import Link from 'next/link';
import styles from './packages.module.css';
import stylesh from "../Home/pricinglistathome.module.css"

export default function Packages() {
  const packages = [
  {
    title: "Yapay Zeka Destekli Mobil Uygulama",
    price: "₺3000+",
    url: "https://bionluk.com/coderingewer",
    features: [
      "Modern ve sezgisel kullanıcı deneyimi",
      "GPT, LLaMA veya özel AI modelleri ile entegre",
      "Kullanıcı davranışına göre kişiselleştirme",
      "Offline mod ve veri senkronizasyonu",
      "iOS & Android uyumlu çapraz platform yapı",
      "Veri güvenliği ve gizlilik önceliği",
      "Firebase, Supabase veya özel backend ile tam uyum",
    ],
  },
  {
    title: "AI Tabanlı Web Platformları",
    price: "₺5000+",
    url: "https://bionluk.com/coderingewer",
    features: [
      "Next.js mimarisi ile yüksek performans",
      "OpenAI, Replicate veya kendi modelinizle entegrasyon",
      "AI destekli öneri motorları ve chatbot sistemleri",
      "Kurumsal UI/UX odaklı arayüzler",
      "Tam responsive yapı ve erişilebilirlik",
      "SEO, hız ve Lighthouse skorlarında maksimum optimizasyon",
      "Panel, kullanıcı yönetimi ve API altyapısı",
    ],
  },
  {
    title: "İşletmelere Özel Veri Analizi Panelleri",
    price: "Yakında",
    url: "https://bionluk.com/coderingewer",
    features: [
      "Gerçek zamanlı veri işleme ve görselleştirme",
      "Makine öğrenimi tabanlı öngörüler (forecast, anomaly detection)",
      "Şirketinize özel metrikler & KPI izleme",
      "Kapsamlı kullanıcı rolleri ve erişim kontrolü",
      "Grafana/Plotly.js destekli interaktif grafikler",
      "Raporlama, PDF çıktılar, dışa aktarma seçenekleri",
      "Gelişmiş filtreleme ve segmentasyon",
    ],
  },
  {
    title: "CLI & Terminal Tabanlı Geliştirici Araçları",
    price: "Proje Bazlı",
    url: "https://bionluk.com/coderingewer",
    features: [
      "Yüksek performanslı CLI araçları (Rust, Go, Node.js)",
      "API entegrasyonları ve veri işleme yetenekleri",
      "İleri düzey hata yönetimi ve logging altyapısı",
      "Kolay kurulum (npm, brew, curl scriptleri)",
      "İnteraktif terminal arayüzleri (Inquirer, Blessed)",
      "Detaylı dokümantasyon ve TypeScript destekli SDK'lar",
      "Sürekli entegrasyon ve test otomasyonu",
    ],
  }
];



    // Kart componentini aynı fonksiyon içinde tanımlıyoruz
    const PackageCard = ({ title, price, features, url }) => (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.price}>{price}</p>
            <ul className={styles.featureList}>
                {features.map((feat, idx) => (
                    <li className={styles.featureItem} key={idx}>{feat}</li>
                ))}
            </ul>
            <Link target="_blank" href={url} className={stylesh.button}>Satın Al</Link>
        </div>
    );

    return (
        <div className={styles.packagescontainer} >

            <main className={styles.packageslist}>
                {packages.map((pkg, i) => (
                    <PackageCard key={i} {...pkg} />
                ))}
            </main>
        </div>
    );
}
