import styles from './services.module.css';
import { Cpu, Code, Globe } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Cpu className={styles.icon} />,
      title: "Performans Optimizasyonu",
      description: "Web sitenizin hızını ve verimliliğini maksimuma çıkarıyoruz.",
    },
    {
      icon: <Code className={styles.icon} />,
      title: "Özel Yazılım Geliştirme",
      description: "İhtiyacınıza göre tamamen size özel çözümler sunuyoruz.",
    },
    {
      icon: <Globe className={styles.icon} />,
      title: "Uluslararası SEO ve Pazarlama",
      description: "Dijital görünürlüğünüzü global ölçekte artırıyoruz.",
    },
  ];

  return (
    <main className={styles.servicesContainer}>
      <h1 className={styles.title}>Hizmetlerimiz</h1>
      <section className={styles.servicesList}>
        {services.map(({ icon, title, description }, i) => (
          <article key={i} className={styles.serviceCard}>
            {icon}
            <h2 className={styles.serviceTitle}>{title}</h2>
            <p className={styles.serviceDesc}>{description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
