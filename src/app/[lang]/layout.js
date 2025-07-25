import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { SiteProvider } from "@/context/SiteContext";
import { i18n } from "@/dictionaries/i18n.config";
import { getDictionary } from "@/helpers/getDictionary";

import "@/app/globals.scss";

export const metadata = {
  title: "Idea",
  description: "Import company",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  const { header, footer } = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body>
        <SiteProvider>
          <Header lang={lang} dictionary={header} />
          <main>{children}</main>
          <Footer lang={lang} dictionary={footer} />
        </SiteProvider>
      </body>
    </html>
  );
}
