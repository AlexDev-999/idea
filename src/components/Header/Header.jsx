"use client";
import { usePathname } from "next/navigation";
import BurgerBtn from "../buttons/BurgerBtn/BurgerBtn";
import Logo from "../Logo/Logo";
import CallLinks from "./CallLink/CallLinks";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
// import { i18n } from "@/dictionaries/i18n.config";
import styles from "./Header.module.scss";

const Header = ({ lang }) => {
  const pathname = usePathname();
  const isHomePage =
    pathname === "" ||
    pathname === "/" ||
    pathname === "/uk" ||
    pathname === "/en";

  return (
    <header
      className={
        isHomePage ? styles.header : `${styles.header} ${styles.blueBg}`
      }
    >
      <div className={`container ${styles.container}`}>
        <Logo lang={lang} customClass="" />

        <div className={styles.rightSide}>
          <CallLinks />
          {/* <button className={styles.langSwitcherBtn}>
            <svg>
              <use href="/sprite.svg#icon-language"></use>
            </svg>
          </button> */}
          <LangSwitcher lang={lang} />

          <BurgerBtn />
        </div>
      </div>

      <BurgerMenu lang={lang} />
    </header>
  );
};

export default Header;
