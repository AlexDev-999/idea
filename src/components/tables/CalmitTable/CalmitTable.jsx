// Вапняк дуже тонкого помолу Calmit
import styles from "./CalmitTable.module.scss";

const CalmitTable = ({ lang, tableData }) => {
  
  return (
    <table className={styles.table}>
      <tbody className={styles.tableBody}>
        {tableData?.map((item, index) => {
          if (index === 1) {
            return (
              <tr key={item.property} scope="row" className={styles.tableRow}>
                <td>
                  {item.property}
                </td>
                <td>
                  {item.value}
                  <sup>{item.sup}</sup>
                </td>
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

export default CalmitTable;
