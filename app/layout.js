import "./globals.css";
import Head from "next/head";

import LayoutWrapper from "./components/layoutWrapper";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export const metadata = {
  title: "A Gente | Studio",
  keywords: [
    "marketing digital",
    "design para redes sociais",
    "branding",
    "criação de sites",
    "tráfego pago",
    "marketing para brasileiros no exterior",
    "marketing para brasileiros",
    "identidade visual",
    "social media",
    "freelancer de marketing",
    "A Gente Studio"
  ],
  authors: [{ name: "A Gente Studio", url: "https://agente.studio" }],
  creator: "A Gente Studio",
  publisher: "A Gente Studio",
  metadataBase: new URL("https://agente.studio"),
  openGraph: {
    title: "A Gente | Studio",
    description: "Transformamos marcas ao redor do mundo com design, conteúdo e presença digital.",
    url: "https://agente.studio",
    siteName: "A Gente Studio",
    images: [
      {
        url: "https://agente.studio/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "A Gente Studio - Agência Criativa",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Gente | Marketing para Brasileiros",
    description: "Design, sites e conteúdo para brasileiros no exterior. Eleve sua marca com A Gente!",
    images: ["https://agente.studio/og-image.jpg"],
    creator: "@agente.studio",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico", rel: "shortcut icon" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};


export default async function RootLayout({ children }) {
  const locale = await getLocale();

  const messages = await getMessages();

  return (
    <html lang={locale} className='scroll-smooth' style={{ scrollBehavior: 'smooth' }}>
      <Head>
        {/* Fonts */}
        <link rel="stylesheet" href="https://use.typekit.net/xhb2etv.css"></link>

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      {/* <LinkedInInsightTag /> */}
      {/* <GoogleTagManager gtmId="GTM-N3FNH7MC" /> */}
      <body>
        <NextIntlClientProvider messages={messages}>
          <LayoutWrapper>{children}</LayoutWrapper>
        </NextIntlClientProvider>
      </body>
      {/* <GoogleAnalytics gaId="" /> */}
    </html >
  );
}
