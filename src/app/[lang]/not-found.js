import Link from "next/link";
import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <div className={styles.background}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subTitle}>Page not found</h2>
        <Link
          className={styles.homeLink}
          href="/"
          // className={styles.aboutAsBtn + " " + styles.buttons}
        >
          Home page
        </Link>
      </div>
    </div>
  );
}
