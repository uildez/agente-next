import "./globals.css";
import Head from "next/head";

import LayoutWrapper from "./components/layoutWrapper";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ContactProvider } from "./context/contactContext";
import { LinkedInInsightTag } from 'nextjs-linkedin-insight-tag'
import { GoogleAnalytics } from '@next/third-parties/google'
import Clarity from "@microsoft/clarity";

export const metadata = {
  title: "A Gente | Studio",
  description: "A GENTE é a agência criativa global que transforma ideias em presença digital para empreendedores, agências e marcas",
  keywords: [
    "marketing digital",
    "design para redes sociais",
    "branding",
    "code",
    "web development",
    "javascript",
    "react",
    "next.js",
    "web dev",
    "html",
    "css",
    "criação de sites",
    "tráfego pago",
    "marketing para brasileiros no exterior",
    "marketing para brasileiros",
    "identidade visual",
    "social media",
    "freelancer de marketing",
    "A Gente Studio",
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
  alternates: {
    canonical: `/`,
  },
  twitter: {
    card: "summary_large_image",
    title: "A Gente | Marketing para Brasileiros",
    description: "Design, sites e conteúdo para brasileiros no exterior. Eleve sua marca com A Gente!",
    images: ["https://agente.studio/og-image.jpg"],
    creator: "@agente.studio",
  },
  applicationName: "A Gente Studio",
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
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
  const projectId = "u4n9tmji8r"

  Clarity.init(projectId)

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

        <script type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
          (function(c,l,a,r,i,t,y){
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "u4n9tmji8r");`,
          }}
        />
      </Head>
      {/* <GoogleTagManager gtmId="GTM-N3FNH7MC" /> */}
      <body>
        <LinkedInInsightTag />
        <ContactProvider>
          <NextIntlClientProvider messages={messages}>
            <LayoutWrapper>{children}</LayoutWrapper>
          </NextIntlClientProvider>
        </ContactProvider>
        <GoogleAnalytics gaId="G-CEYRW2JZY4" />
      </body>
    </html >
  );
}
