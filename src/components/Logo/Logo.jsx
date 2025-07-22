import Image from "next/image";
import Link from "next/link";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./Logo.module.scss";

const Logo = ({ lang, id }) => {
  // если язык по умолчанию (т.е. i18n.defaultLocale), то убираем его из url (в нашем случае uk))
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? "" : `/${lang}`;

  return (
    <Link className={styles.logo} id={id} href={`${path}/`}>
      <Image src="/svg/logo.svg" alt="Idea" fill sizes="33vw" priority={true} />
    </Link>
  );
};

export default Logo;
