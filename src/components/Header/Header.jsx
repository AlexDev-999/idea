"use client";
import { usePathname } from "next/navigation";
import BurgerBtn from "../buttons/BurgerBtn/BurgerBtn";
import Logo from "../Logo/Logo";
import CallLinks from "./CallLink/CallLinks";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import styles from "./Header.module.scss";

const Header = ({ lang }) => {
  const pathname = usePathname();
  const pagesWithBlueBgHeader = pathname.includes("/faq");

  return (
    <header
      className={
        pagesWithBlueBgHeader
          ? `${styles.header} ${styles.blueBg}`
          : styles.header
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
