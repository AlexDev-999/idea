// негашене вапно
import { i18n } from "@/dictionaries/i18n.config";
import { quickLimeTableData } from "@/data/products/quickLimeTableData";
import styles from "./CalmitTable.module.scss";

const CalmitTable = ({ lang }) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr className={styles.tableRow}>
            <th scope="col">
              {lang === i18n.locales[0]
                ? quickLimeTableData.headItems[0].nameUk
                : quickLimeTableData.headItems[0].nameEn}
            </th>
            <th scope="col" colSpan="2">
              {lang === i18n.locales[0]
                ? quickLimeTableData.headItems[1].nameUk
                : quickLimeTableData.headItems[1].nameEn}
            </th>
            <th scope="col">
              {lang === i18n.locales[0]
                ? quickLimeTableData.headItems[2].nameUk
                : quickLimeTableData.headItems[2].nameEn}
            </th>
          </tr>
        </thead>

        <tbody className={styles.tableBody}>
          {quickLimeTableData.infoItems?.map((item) => {
            if (item.sub) {
              return (
                <tr
                  key={item.propertyEn}
                  scope="row"
                  className={styles.tableRow}
                >
                  <td>
                    {lang === i18n.locales[0]
                      ? item.propertyUk
                      : item.propertyEn}
                    <sub>{item.sub}</sub>
                  </td>
                  <td>{item.threshold}</td>
                  <td>{item.value}</td>
                  <td>
                    {lang === i18n.locales[0] ? item.resultUk : item.resultEn}
                  </td>
                </tr>
              );
            } else if (item.sup) {
              return (
                <tr
                  key={item.propertyEn_1}
                  scope="row"
                  className={styles.tableRow}
                >
                  <td>
                    {lang === i18n.locales[0] ? (
                      <span>
                        {item.propertyUk_1}
                        <sup>{item.sup}</sup>
                        {item.propertyUk_2}
                      </span>
                    ) : (
                      <span>
                        {item.propertyEn_1}
                        <sup>{item.sup}</sup>
                        {item.propertyEn_2}
                      </span>
                    )}
                  </td>
                  <td>{item.threshold}</td>
                  <td>{item.value}</td>
                  <td>
                    {lang === i18n.locales[0] ? item.resultUk : item.resultEn}
                  </td>
                </tr>
              );
            } else
              return (
                <tr
                  key={item.propertyEn}
                  scope="row"
                  className={styles.tableRow}
                >
                  <td>
                    {lang === i18n.locales[0]
                      ? item.propertyUk
                      : item.propertyEn}
                  </td>
                  <td>{item.threshold}</td>
                  <td>{item.value}</td>
                  <td>
                    {lang === i18n.locales[0] ? item.resultUk : item.resultEn}
                  </td>
                </tr>
              );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CalmitTable;
