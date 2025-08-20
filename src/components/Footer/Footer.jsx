"use client";
import { usePathname } from "next/navigation";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import ContactsBlock from "../ContactsBlock/ContactsBlock";
import { useWindowResize } from "@/hooks/windowResize";
import matchesRoute from "@/helpers/matchesRoute";
import styles from "./Footer.module.scss";

const Footer = ({ lang }) => {
  const pathname = usePathname();
  const { isDesktop } = useWindowResize();

  const isRealPage = matchesRoute(pathname, lang);

  return (
    <>
      {isRealPage ? (
        <footer className={styles.footer} id="contacts">
          <div className={`container ${styles.container}`}>
            <Logo lang={lang} id={styles.customLogoFooter} />
            {isDesktop && <Navigation lang={lang} />}
            <ContactsBlock lang={lang} />
          </div>
        </footer>
      ) : null}
    </>
  );
};

export default Footer;
