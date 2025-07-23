// Вапняк дуже тонкого помолу Calmit
import { i18n } from "@/dictionaries/i18n.config";
import { calmitTableData } from "@/data/products/calmitTableData";
import styles from "./CalmitTable.module.scss";

const CalmitTable = ({ lang }) => {
  return (
    // <div className={styles.tableWrapper}>
    <table className={styles.table}>
      <tbody className={styles.tableBody}>
        {calmitTableData.infoItems?.map((item, index) => {
          if (index === 1) {
            return (
              <tr key={item.propertyEn} scope="row" className={styles.tableRow}>
                <td>
                  {lang === i18n.locales[0] ? item.propertyUk : item.propertyEn}
                </td>
                <td>
                  {lang === i18n.locales[0] ? item.valueUk : item.valueEn}
                  <sup>{item.sup}</sup>
                </td>
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

export default CalmitTable;
