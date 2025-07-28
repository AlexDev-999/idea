// Вапняк дуже тонкого помолу Calmit
import styles from "./FlorakalkTable.module.scss";

const FlorakalkTable = ({ lang, tableData }) => {
  return (
    <table className={styles.table}>
      <tbody className={styles.tableBody}>
        {tableData?.map((item, index) => {
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
              <tr key={item.property} scope="row" className={styles.tableRow}>
                <td>
                  {item.property}
                  <sub>{item.sub}</sub>
                </td>
                <td>{item.value}</td>
              </tr>
            );
          } else
            return (
              <tr key={item.property} scope="row" className={styles.tableRow}>
                <td>
                  {item.property}
                </td>
                <td>{item.value}</td>
              </tr>
            );
        })}
      </tbody>
    </table>
  );
};

export default FlorakalkTable;
