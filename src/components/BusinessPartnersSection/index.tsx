import styles from './styles.module.scss';

import borusanLogo from '../../assets/borusan-logo.png';
import istanbulBilgiUniversityLogo from '../../assets/istanbul-bilgi-university-logo.png';
import bookMyShowLogo from '../../assets/book-my-show-logo.png';
import akbankLogo from '../../assets/akbank-logo.png';
import akcansaLogo from '../../assets/akcansa-logo.png';
import tumunuGorLogo from '../../assets/tumunu-gor-logo.png';
import aktasLogo from '../../assets/aktas-logo.png';
import olaLogo from '../../assets/ola-logo.png';
import amazonLogo from '../../assets/amazon-logo.png';

export const BusinessPartnersSection: React.FC = () => {
  return (
    <section className={styles.businessPartnersSection}>
      <h2>Nossas referências</h2>
      <p>Nossos parceiros de negócios que confiam em nós e trabalham conosco</p>
      <div className={styles.logosWrapper}>
        <div className={styles.logo}>
          <img src={borusanLogo} alt="Logotipo da borusan" />
        </div>
        <div className={styles.logo}>
          <img src={istanbulBilgiUniversityLogo} alt="Logotipo da istanbul Bilgi University" />
        </div>
        <div className={styles.logo}>
          <img src={bookMyShowLogo} alt="Logotipo da book my show" />
        </div>
        <div className={styles.logo}>
          <img src={akbankLogo} alt="Logotipo da akbank" />
        </div>
        <div className={styles.logo}>
          <img src={akcansaLogo} alt="Logotipo da Akcansa" />
        </div>
        <div className={styles.logo}>
          <img src={tumunuGorLogo} alt="Logotipo da tumunu gor" />
        </div>
        <div className={styles.logo}>
          <img src={aktasLogo} alt="Logotipo da aktas" />
        </div>
        <div className={styles.logo}>
          <img src={olaLogo} alt="Logotipo da ola" />
        </div>
        <div className={styles.logo}>
          <img src={amazonLogo} alt="Logotipo da amazon" />
        </div>
      </div>
    </section>
  );
};
