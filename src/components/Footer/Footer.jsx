"use client";
import Logo from "../Logo/Logo";
import HeaderNav from "../Header/HeaderNav/HeaderNav";
import ContactsBlock from "../ContactsBlock/ContactsBlock";
import { useWindowResize } from "@/hooks/windowResize";
import styles from "./Footer.module.scss";

const Footer = ({ lang, dictionary }) => {
  const { isDesktop } = useWindowResize();

  return (
    <footer className={styles.footer} id="contacts">
      <div className={`container ${styles.container}`}>
        <Logo lang={lang} id={styles.customLogoFooter} />
        {isDesktop && <HeaderNav lang={lang} />}
        <ContactsBlock lang={lang} />
      </div>
    </footer>
  );
};

export default Footer;
