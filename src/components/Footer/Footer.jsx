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

  // для скрітия при notFoundPage
  const isRealPage = matchesRoute(pathname, lang);

  return (
    <>
      {isRealPage ? (
        <footer className={styles.footer} id="contacts">
          <div className="container">
            <div className={styles.logoAndContactsBlockWrapper}>
              <Logo lang={lang} id={styles.customLogoFooter} />
              {isDesktop && <Navigation lang={lang} />}
              <ContactsBlock lang={lang} />
            </div>
            <p className={styles.devText}>
              By{" "}
              <a
                className={styles.devLink}
                href="https://www.webevery.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Webevery.dev{" "}
              </a>
            </p>
          </div>
        </footer>
      ) : null}
    </>
  );
};

export default Footer;
