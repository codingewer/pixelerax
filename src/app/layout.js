import "./globals.css";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import Script from "next/script";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
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
      <body className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
