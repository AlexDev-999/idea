// газблоки ytong
import { i18n } from "@/dictionaries/i18n.config";
import { ytongTableData } from "@/data/products/ytongTableData";
import styles from "./GasBlocksYtongTable.module.scss";

const GasBlocksYtongTable = ({ lang }) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr className={styles.tableRow}>
            <th scope="col" colSpan="2">
              {lang === i18n.locales[0]
                ? ytongTableData.headItems[0].nameUk
                : ytongTableData.headItems[0].nameEn}
            </th>
            <th scope="col" colSpan="2">
              {lang === i18n.locales[0]
                ? ytongTableData.headItems[1].nameUk
                : ytongTableData.headItems[1].nameEn}
            </th>
            <th scope="col" colSpan="3">
              {lang === i18n.locales[0]
                ? ytongTableData.headItems[2].nameUk
                : ytongTableData.headItems[2].nameEn}
            </th>
          </tr>
        </thead>

        <tbody className={styles.tableBody}>
          {ytongTableData.infoItems?.map((item, index) => {
            if (index === 0) {
              return (
                <tr
                  key={index}
                  className={`${styles.tableRow} ${styles.secondRow}`}
                >
                  <td>
                    {lang === i18n.locales[0]
                      ? item.destinationUk
                      : item.destinationEn}
                  </td>
                  <td>
                    {lang === i18n.locales[0] ? item.sizeUk : item.sizeEn}
                  </td>
                  <td>
                    {lang === i18n.locales[0]
                      ? item.blockCubicMeterUk
                      : item.blockCubicMeterEn}
                  </td>
                  <td>
                    {lang === i18n.locales[0]
                      ? item.blockSquareMeterUk
                      : item.blockSquareMeterEn}
                  </td>
                  <td>
                    {lang === i18n.locales[0]
                      ? item.palletCubicMeterUk
                      : item.palletCubicMeterEn}
                  </td>
                  <td>
                    {lang === i18n.locales[0]
                      ? item.palletSquareMeterUk
                      : item.palletSquareMeterEn}
                  </td>
                  <td>
                    {lang === i18n.locales[0] ? item.piecesUk : item.piecesEn}
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
                    {lang === i18n.locales[0]
                      ? item.destinationUk
                      : item.destinationEn}
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
