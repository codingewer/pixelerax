import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mithrabyte | Yapay Zeka Destekli Çözümler",
  description: "Yapay zeka destekli mobil ve web uygulamalarıyla işinizi büyütün.",
  keywords: [
    "yapay zeka",
    "mobil uygulama",
    "web geliştirme",
    "yönetim panelleri",
    "AI",
    "Next.js",
    "veri analizi",
    "mithrabyte",
    "mithra byte",
    "mithra",
    "Mithra Byte",
  ],
  metadataBase: new URL("https://mithrabyte.com/"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://mithrabyte.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LP24PHV0M0"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LP24PHV0M0');
            `,
          }}
        />

        {/* Organization Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Mithrabyte",
              url: "https://mithrabyte.com/",
              logo: "https://mithrabyte.com/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/mithrabyte",
                "https://twitter.com/mithrabyte",
              ],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <nav
          style={{
            display: "flex",
            gap: "1.5rem",
            padding: "1rem",
            borderBottom: "1px solid #ddd",
          }}
        >
          <Link href="/">Ana Sayfa</Link>
          <Link href="/hakkimizda">Hakkımızda</Link>
          <Link href="/iletisim">İletişim</Link>
          <Link href="/hizmetler">Hizmetler</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
