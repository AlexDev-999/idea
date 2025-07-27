// import { productsData } from "@/data/productsData";
// import styles from "./HomeProductsSection.module.scss";
// import Link from "next/link";
// import { i18n } from "@/dictionaries/i18n.config";
// import Image from "next/image";

// const HomeProductsSection = ({ lang, dictionary }) => {
//   return (
//     <section className="section" id="products">
//       <div className="container">
//         <h2 className={styles.title}>{dictionary.title.toUpperCase()}</h2>
//         <ul className={styles.productsList}>
//           {productsData.map((item) => (
//             <li key={item.homeCardTitleUk} className={styles.productItem}>
//               <Link href={item.pageLink} className={styles.pageLink}>
//                 <div className={styles.imgWrapper}>
//                   <Image
//                     className={styles.cardImg}
//                     src={item.homeCardImg}
//                     alt={
//                       lang === i18n.locales[0]
//                         ? item.homeCardTitleUk
//                         : item.homeCardTitleEn
//                     }
//                     // sizes="(max-width: 767px) 95vw, (max-width: 1439px) 42vw, 1200px"
//                     sizes="33vw"
//                     fill={true}
//                   />
//                   <div className={styles.popupOverlay}>
//                     <svg className={styles.arrowIcon}>
//                       <use href="/sprite.svg#icon-arrow-right"></use>
//                     </svg>
//                   </div>
//                 </div>
//                 <h3 className={styles.cardTitle}>
//                   {lang === i18n.locales[0]
//                     ? item.homeCardTitleUk
//                     : item.homeCardTitleEn}
//                 </h3>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default HomeProductsSection;





import Image from "next/image";
import Link from "next/link";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./HomeProductsSection.module.scss";

const HomeProductsSection = ({ lang, dictionary }) => {
  const productsData = dictionary.productsData;

  return (
    <section className="section" id="products">
      <div className="container">
        <h2 className={styles.title}>{dictionary.title.toUpperCase()}</h2>
        <ul className={styles.productsList}>
          {productsData.map((item) => (
            <li key={item.homeCardTitle} className={styles.productItem}>
              <Link href={item.pageLink} className={styles.pageLink}>
                <div className={styles.imgWrapper}>
                  <Image
                    className={styles.cardImg}
                    src={item.homeCardImg}
                    alt={item.homeCardTitle}
                    // sizes="(max-width: 767px) 95vw, (max-width: 1439px) 42vw, 1200px"
                    sizes="33vw"
                    fill={true}
                  />
                  <div className={styles.popupOverlay}>
                    <svg className={styles.arrowIcon}>
                      <use href="/sprite.svg#icon-arrow-right"></use>
                    </svg>
                  </div>
                </div>
                <h3 className={styles.cardTitle}>
                  {item.homeCardTitle}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HomeProductsSection;
