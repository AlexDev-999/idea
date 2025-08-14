import Image from "next/image";
import styles from "./CertificatesSection.module.scss";

const CertificatesSection = ({ lang, dictionary }) => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>{dictionary.title}</h2>
        <ul className={styles.certificatesList}>
          {dictionary.certificatesData.map((item) => (
            <li key={item.altImg} className={styles.certificatesItem}>
              <Image
                className={styles.img}
                src={item.img}
                alt={item.altImg}
                priority
                fill={true}
                sizes="(max-width: 767px) 100vw, (max-width: 1439px) 50vw, 588px"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CertificatesSection;
