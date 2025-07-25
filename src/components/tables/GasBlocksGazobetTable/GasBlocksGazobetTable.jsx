// газоблоки Gazobet
import { i18n } from "@/dictionaries/i18n.config";
import { gasBlocksGazobetTableData } from "@/data/products/gasBlocksGazobetTableData";
import styles from "./GasBlocksGazobetTable.module.scss";

const GasBlocksGazobetTable = ({ lang }) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr className={styles.tableRow}>
            {gasBlocksGazobetTableData.headItems.map((item, index)=> <th key={index} scope="col">
              {lang === i18n.locales[0]
                ? item.nameUk
                : item.nameEn}
            </th>)}            
          </tr>
          <tr className={styles.tableRow}>
            {gasBlocksGazobetTableData.headSubItems.map((item, index)=> <th key={index} scope="col">
              {lang === i18n.locales[0]
                ? item.nameUk
                : item.nameEn}
            </th>)}            
          </tr>
        </thead>

        <tbody className={styles.tableBody}>
          {gasBlocksGazobetTableData.infoItems?.map((item, index) => {
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
