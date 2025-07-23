// Вапняк дуже тонкого помолу Calmit
import { i18n } from "@/dictionaries/i18n.config";
import { florakalkTableData } from "@/data/products/florakalkTableData";
import styles from "./FlorakalkTable.module.scss";

const FlorakalkTable = ({ lang }) => {
  return (
    // <div className={styles.tableWrapper}>
    <table className={styles.table}>
      <tbody className={styles.tableBody}>
        {florakalkTableData.infoItems?.map((item, index) => {
          if (index === 0) {
            return (
              <tr key={item.property_1} scope="row" className={styles.tableRow}>
                <td>
                  {item.property_1}
                  <sub>{item.sub}</sub>
                  {item.property_2}
                  <sub>{item.sub}</sub>
                </td>
                <td>{item.value}</td>
              </tr>
            );
          } else if (index === 1) {
            return (
              <tr key={item.propertyEn} scope="row" className={styles.tableRow}>
                <td>
                  {lang === i18n.locales[0] ? item.propertyUk : item.propertyEn}
                  <sub>{item.sub}</sub>
                </td>
                <td>{item.value}</td>
              </tr>
            );
          } else
            return (
              <tr key={item.propertyEn} scope="row" className={styles.tableRow}>
                <td>
                  {lang === i18n.locales[0] ? item.propertyUk : item.propertyEn}
                </td>
                <td>{item.value}</td>
              </tr>
            );
        })}
      </tbody>
    </table>
    // </div>
  );
};

export default FlorakalkTable;
