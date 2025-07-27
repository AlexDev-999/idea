import styles from "./OpenPdfBtn.module.scss";

export default function OpenPdfBtn({
  href,
  text
}) {
  return (
    <a className={styles.link} href={href}  target="_blank"
        rel="noopener noreferrer">
      {text.toUpperCase()}
      <svg className={styles.arrowIcon}>
        <use href="/sprite.svg#icon-arrow-right" />
      </svg>
    </a>
  );
}

