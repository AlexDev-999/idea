// негашене вапно
import styles from "./QuickLimeTable.module.scss";

const QuickLimeTable = ({ lang, tableData }) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr className={styles.tableRow}>
            <th scope="col">
              { tableData.headItems[0].name }
            </th>
            <th scope="col" colSpan="2">
              { tableData.headItems[1].name}
            </th>
            <th scope="col">
              { tableData.headItems[2].name}
            </th>
          </tr>
        </thead>

        <tbody className={styles.tableBody}>
          {tableData.infoItems?.map((item) => {
            if (item.sub) {
              return (
                <tr
                  key={item.property}
                  scope="row"
                  className={styles.tableRow}
                >
                  <td>
                    {item.property}
                    <sub>{item.sub}</sub>
                  </td>
                  <td>{item.threshold}</td>
                  <td>{item.value}</td>
                  <td>
                    {item.result}
                  </td>
                </tr>
              );
            } else if (item.sup) {
              return (
                <tr
                  key={item.property_1}
                  scope="row"
                  className={styles.tableRow}
                >
                  <td>                    
                      <span>
                        {item.property_1}
                        <sup>{item.sup}</sup>
                        {item.property_2}
                      </span>                    
                  </td>
                  <td>{item.threshold}</td>
                  <td>{item.value}</td>
                  <td>
                    {item.result}
                  </td>
                </tr>
              );
            } else
              return (
                <tr
                  key={item.property}
                  scope="row"
                  className={styles.tableRow}
                >
                  <td>
                    { item.property }
                  </td>
                  <td>{item.threshold}</td>
                  <td>{item.value}</td>
                  <td>
                    {item.result}
                  </td>
                </tr>
              );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default QuickLimeTable;
