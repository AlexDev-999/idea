import styles from "./DownloadBtn.module.scss";

export default function DownloadBtn({
  href,
  text
}) {
  return (
    <a className={styles.link} href={href} download>
      {text.toUpperCase()}
      <svg className={styles.arrowIcon}>
        <use href="/sprite.svg#icon-arrow-right" />
      </svg>
    </a>
  );
}

