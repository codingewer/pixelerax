import Link from 'next/link';
import styles from './packages.module.css';
import stylesh from "../Home/pricinglistathome.module.css"

export default function Packages() {
    const packages = [
        {
            title: "Temel Paket",
            price: "₺499",
            features: [
                "1 sayfa modern web tasarımı",
                "Mobil uyumlu yapı",
                "Temel SEO ayarları",
                "Temel SEO ayarları",
                "Temel SEO ayarları",
                "Temel SEO ayarları",
                "Temel SEO ayarları",
                "Temel SEO ayarları",
            ],
        },
        {
            title: "Profesyonel Paket",
            price: "₺999",
            features: [
                "Çok sayfalı dinamik site",
                "CMS entegrasyonu",
                "İleri düzey SEO & analiz",
            ],
        },
        {
            title: "Kurumsal Paket",
            price: "₺1999",
            features: [
                "Özel UI/UX tasarım",
                "E-ticaret entegrasyonu",
                "Tam destek & bakım hizmeti",
            ],
        },
        {
            title: "Kurumsal Paket",
            price: "₺1999",
            features: [
                "Özel UI/UX tasarım",
                "E-ticaret entegrasyonu",
                "Tam destek & bakım hizmeti",
            ],
        },
        {
            title: "Kurumsal Paket",
            price: "₺1999",
            features: [
                "Özel UI/UX tasarım",
                "E-ticaret entegrasyonu",
                "Tam destek & bakım hizmeti",
                "Tam destek & bakım hizmeti",

                "Tam destek & bakım hizmeti",

                "Tam destek & bakım hizmeti",

            ],
        },
    ];

    // Kart componentini aynı fonksiyon içinde tanımlıyoruz
    const PackageCard = ({ title, price, features }) => (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.price}>{price}</p>
            <ul className={styles.featureList}>
                {features.map((feat, idx) => (
                    <li className={styles.featureItem} key={idx}>{feat}</li>
                ))}
            </ul>
            <Link href="" className={stylesh.button}>Satın Al</Link>
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
