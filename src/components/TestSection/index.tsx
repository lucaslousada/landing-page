import styles from './styles.module.scss';

import doubleRightArrow from '../../assets/double-right-arrow.svg';

export const TestSection: React.FC = () => {
  return (
    <section className={styles.testSection}>
      <h2>O que oferecemos com o gerenciamento de testes?</h2>
      <p>Soluções com suporte para IoT</p>
      <ul className={styles.content}>
        <li>
          <p>
            Nós aumentamos a <br />
            qualidade do software
          </p>
          <img src={doubleRightArrow} alt="Setas duplas" />
        </li>
        <li>
          <p>
            Nós identificamos <br />
            possíveis erros
          </p>
          <img src={doubleRightArrow} alt="Setas duplas" />
        </li>
        <li>
          <p>
            Nós evitamos <br />
            possíveis riscos
          </p>
          <img src={doubleRightArrow} alt="Setas duplas" />
        </li>
        <li>
          <p>
            Oferecemos economia <br />
            de tempo e custo
          </p>
        </li>
      </ul>
    </section>
  );
};
