"use client";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import ContactsBlock from "../ContactsBlock/ContactsBlock";
import { useWindowResize } from "@/hooks/windowResize";
import styles from "./Footer.module.scss";

const Footer = ({ lang }) => {
  const { isDesktop } = useWindowResize();

  return (
    <footer className={styles.footer} id="contacts">
      <div className={`container ${styles.container}`}>
        <Logo lang={lang} id={styles.customLogoFooter} />
        {isDesktop && <Navigation lang={lang} />}
        <ContactsBlock lang={lang} />
      </div>
    </footer>
  );
};

export default Footer;
