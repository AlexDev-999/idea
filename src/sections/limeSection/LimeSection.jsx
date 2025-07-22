import QuickLimeTable from "@/components/tables/QuickLimeTable/QuickLimeTable";
import SlakedLimeTable from "@/components/tables/SlakedLimeTable/SlakedLimeTable";
import styles from "./LimeSection.module.scss";

const LimeSection = ({ lang, dictionary }) => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <QuickLimeTable lang={lang} />
        <SlakedLimeTable lang={lang} />
      </div>
    </section>
  );
};

export default LimeSection;
