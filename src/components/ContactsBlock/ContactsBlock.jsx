import { i18n } from "@/dictionaries/i18n.config";
import { contactsData } from "@/data/contactsData";
import styles from "./ContactsBlock.module.scss";

const ContactsBlock = ({ lang }) => {
  return (
    <ul className={styles.contactsList}>
      {contactsData.map((item) => (
        <li key={item.name}>
          <a
            href={item.href}
            className={`${styles.contactLink} ${styles[item.name]}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon && (
              <svg className={`${styles.iconClass} ${styles[item.name]}`}>
                <use href={item.icon} />
              </svg>
            )}
            {item.contact}
            {item.addressUk &&
              (lang === i18n.locales[0] ? item.addressUk : item.addressEn)}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ContactsBlock;
