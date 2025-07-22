"use client";
import { usePathname } from "next/navigation";
import BurgerBtn from "../buttons/BurgerBtn/BurgerBtn";
import Logo from "../Logo/Logo";
import CallLinks from "./CallLink/CallLinks";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./Header.module.scss";

const Header = ({ lang }) => {
  const pathname = usePathname();
  // если язык по умолчанию, то убираем его из url (в нашем случае uk). Сделано для корректных адресов для ссылок в зависимости от текущего языка
  const isDefaultLang = lang === i18n.defaultLocale;
  const homePath = isDefaultLang ? "/" : `/${lang}`;
  const isHomePage = pathname === homePath;

  return (
    <header
      className={
        !isHomePage ? `${styles.header} ${styles.blueBg}` : styles.header
      }
    >
      <div className={`container ${styles.container}`}>
        <Logo lang={lang} customClass="" />

        <div className={styles.rightSide}>
          <CallLinks />
          <button className={styles.langSwitcherBtn}>
            <svg>
              <use href="/sprite.svg#icon-language"></use>
            </svg>
          </button>

          <BurgerBtn />
        </div>
      </div>

      <BurgerMenu lang={lang} />
    </header>
  );
};

export default Header;
