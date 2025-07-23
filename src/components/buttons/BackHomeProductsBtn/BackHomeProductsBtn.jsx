import Link from "next/link";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./BackHomeProductsBtn.module.scss";

const BackHomeProductsBtn = ({ lang }) => {
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? "/#products" : `/${lang}/#products`;

  return (
    <Link href={path} className={styles.button}>
      <svg className={styles.arrowIcon}>
        <use href="/sprite.svg#icon-arrow-right" />
      </svg>
      {lang === i18n.locales[0] ? "НАЗАД" : "BACK"}
    </Link>
  );
};

export default BackHomeProductsBtn;