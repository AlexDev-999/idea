import { ourPartnersData } from "@/data/ourPartnersData";
import styles from "./HomePartnersSection.module.scss";

const HomePartnersSection = ({ lang, dictionary }) => {
  return (
    <section className="section">
      <div className="container">
        <h2 className={styles.title}>{dictionary.title.toUpperCase()}</h2>
        <ul className={styles.partnersList}>
          {ourPartnersData.map((item) => (
            <li key={item.name}>
              <img
                src={item.href}
                alt={item.name}
                width={item.width}
                height={item.height}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HomePartnersSection;
