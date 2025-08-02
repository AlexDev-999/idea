import BackHomeProductsBtn from '@/components/buttons/BackHomeProductsBtn/BackHomeProductsBtn';
import ProductsList from '@/components/ProductsList/ProductsList';
import styles from './GardenProductsSection.module.scss';

const GardenProductsSection = ({ lang, dictionary, buttons }) => {
  return (
    <section className={styles.section}>
      <div className="container">
        <BackHomeProductsBtn lang={lang} text={buttons.backHomeProductsBtn} />
        <h1 className={styles.title}>{dictionary.title}</h1>
        <ProductsList
          dictionary={dictionary}
          buttons={buttons}
          href="tovari-dlya-sadu"
          lang={lang}
        />
      </div>
    </section>
  );
};

export default GardenProductsSection;
