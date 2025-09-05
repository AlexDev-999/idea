import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { SiteProvider } from "@/context/SiteContext";
import { i18n } from "@/dictionaries/i18n.config";
import { getDictionary } from "@/helpers/getDictionary";
import { GoogleTagManager } from "@next/third-parties/google";
import dynamic from "next/dynamic";

import "@/app/globals.scss";

const DynamicToTopBtn = dynamic(() =>
  import("@/components/buttons/ToTopBtn/ToTopBtn")
);

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SEO_URL),
  // title: "Idea",
  // description: "Import company",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  const { header, footer } = await getDictionary(lang);

    const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang={lang}>
      <GoogleTagManager gtmId={`${GTM_ID}`} />
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <SiteProvider>
          <Header lang={lang} dictionary={header} />
          <main>{children}</main>
          <Footer lang={lang} dictionary={footer} />
        </SiteProvider>
        <DynamicToTopBtn />
      </body>
    </html>
  );
}
