// газблоки ytong
import styles from "./GasBlocksYtongTable.module.scss";

const GasBlocksYtongTable = ({ lang, tableData }) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr className={styles.tableRow}>
            <th scope="col" colSpan="2">
              {tableData.headItems[0].name}
            </th>
            <th scope="col" colSpan="2">
              {tableData.headItems[1].name}
            </th>
            <th scope="col" colSpan="3">
              {tableData.headItems[2].name}
            </th>
          </tr>
        </thead>

        <tbody className={styles.tableBody}>
          {tableData.infoItems?.map((item, index) => {
            if (index === 0) {
              return (
                <tr
                  key={index}
                  className={`${styles.tableRow} ${styles.secondRow}`}
                >
                  <td>
                    {item.destination}
                  </td>
                  <td>
                    {item.size}
                  </td>
                  <td>
                    {item.blockCubicMeter}
                  </td>
                  <td>
                    {item.blockSquareMeter}
                  </td>
                  <td>
                    {item.palletCubicMeter}
                  </td>
                  <td>
                    {item.palletSquareMeter}
                  </td>
                  <td>
                    {item.pieces}
                  </td>
                </tr>
              );
            } else {
              return (
                <tr
                  key={index}
                  scope="row"
                  className={styles.tableRow}
                >
                  <td>
                    {item.destination}
                  </td>
                  <td>{item.size}</td>
                  <td>{item.blockCubicMeter}</td>
                  <td>{item.blockSquareMeter}</td>
                  <td>{item.palletCubicMeter}</td>
                  <td>{item.palletSquareMeter}</td>
                  <td>{item.pieces}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GasBlocksYtongTable;
