import Link from 'next/link';
import styles from './BreadCrumbs.module.scss';

const BreadCrumbs = ({ backTitle, nowtitle, href }) => {
  return (
    <div className={styles.container}>
      <Link href={href} className={styles.backTitle + ' ' + styles.value}>
        {backTitle} /
      </Link>
      <p className={styles.nowtitle + ' ' + styles.value}>{nowtitle} /</p>
    </div>
  );
};

export default BreadCrumbs;
