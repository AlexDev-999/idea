// газоблоки Gazobet
import styles from "./GasBlocksGazobetTable.module.scss";

const GasBlocksGazobetTable = ({ lang, tableData }) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr className={styles.tableRow}>
            {tableData.headItems.map((item, index)=> <th key={index} scope="col">
              {item.name}
            </th>)}            
          </tr>
          <tr className={styles.tableRow}>
            {tableData.headSubItems.map((item, index)=> <th key={index} scope="col">
              {item.name}
            </th>)}            
          </tr>
        </thead>

        <tbody className={styles.tableBody}>
          {tableData.infoItems?.map((item, index) => {
            if (index === 0) {
              return (
                <tr
                  key={index}
                  className={styles.tableRow}
                >
                  <td rowSpan="2">
                    {item.name}
                  </td>
                  <td>
                    {item.brand}
                  </td>
                  <td>
                      {item.size}
                  </td>
                  <td>
                     {item.pieceVolume}
                  </td>
                  <td>
                   {item.palletVolume}
                  </td>
                  <td>
                    {item.weight}
                  </td>
                  <td>
                      {item.quantity}
                  </td>
                   <td>
                      {item.wallArea}
                  </td>
                </tr>
              );
            } else if (index === 1) {
              return (
                <tr
                  key={index}
                  className={styles.tableRow}
                >                 
                  <td>
                    {item.brand}
                  </td>
                  <td>
                      {item.size}
                  </td>
                  <td>
                     {item.pieceVolume}
                  </td>
                  <td>
                   {item.palletVolume}
                  </td>
                  <td>
                    {item.weight}
                  </td>
                  <td>
                      {item.quantity}
                  </td>
                   <td>
                      {item.wallArea}
                  </td>
                </tr>
              );
            } else {
              return (
                   <tr
                  key={index}
                  className={`${styles.tableRow} ${styles.secondRow}`}
                >
                  <td>
                    {item.name}
                  </td>
                  <td>
                    {item.brand}
                  </td>
                  <td>
                      {item.size}
                  </td>
                  <td>
                     {item.pieceVolume}
                  </td>
                  <td>
                   {item.palletVolume}
                  </td>
                  <td>
                    {item.weight}
                  </td>
                  <td>
                      {item.quantity}
                  </td>
                   <td>
                      {item.wallArea}
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GasBlocksGazobetTable;
