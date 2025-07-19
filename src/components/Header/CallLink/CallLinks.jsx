import { callLinksData } from "@/data/contactsData";
import styles from "./CallLinks.module.scss";

const CallLinks = ({ className }) => {
  return (
    <ul className={`${styles.callList} ${className}`}>
      {callLinksData.map((item) => (
        <li key={item.name} className={styles.callItem}>
          <a
            href={item.href}
            className={styles.callLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className={styles.callIcon}>
              <use href={item.icon}></use>
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CallLinks;
