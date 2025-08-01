// src/app/head.js
export default function Head() {
  return (
    <>
      <title>Mithrabyte | Yapay Zeka Destekli Çözümler</title>
      <meta
        name="description"
        content="Yapay zeka destekli mobil ve web uygulamalarıyla işinizi büyütün."
      />
      <meta
        name="keywords"
        content="yapay zeka, mobil uygulama, web geliştirme, yönetim panelleri"
      />

      {/* Open Graph */}
      <meta property="og:title" content="Mithrabyte" />
      <meta
        property="og:description"
        content="Yapay zeka destekli mobil ve web uygulamalarıyla işinizi büyütün."
      />
      <meta property="og:url" content="https://mithrabyte.com" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://mithrabyte.com/og-image.png" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Mithrabyte" />
      <meta
        name="twitter:description"
        content="Yapay zeka destekli mobil ve web uygulamalarıyla işinizi büyütün."
      />
      <meta name="twitter:image" content="https://mithrabyte.com/og-image.png" />

      {/* Robots */}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://mithrabyte.com" />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Mithrabyte",
            url: "https://mithrabyte.com",
            logo: "https://mithrabyte.com/logo.png",
            sameAs: [
              "https://twitter.com/mithrabyte",
              "https://linkedin.com/company/mithrabyte",
            ],
          }),
        }}
      />
    </>
  );
}
