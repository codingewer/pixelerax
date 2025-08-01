import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

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
    "mithrabyte"
  ],
  metadataBase: new URL("https://mithrabyte.com"),
  openGraph: {
    title: "Mithrabyte",
    description: "Yapay zeka destekli mobil ve web uygulamalarıyla işinizi büyütün.",
    url: "https://mithrabyte.com",
    siteName: "Mithrabyte",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "Mithrabyte - Yapay Zeka Destekli Çözümler",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mithrabyte",
    description: "Yapay zeka destekli mobil ve web uygulamalarıyla işinizi büyütün.",
    images: ["/og_image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://mithrabyte.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
