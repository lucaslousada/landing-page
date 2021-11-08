import styles from './styles.module.scss';

import { ServiceCard } from '../ServiceCard';

export const ServicesSection: React.FC = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.sectionHeader}>
          <h3>Qualidade e Gestão de Processos</h3>
          <p>
            Oferecemos serviços de Gerenciamento de Projetos, Análise de Negócios e Gerenciamento de
            Testes com nossa equipe especializada, que ganhou experiência em diferentes setores para
            que nossos clientes possam manter seus altos níveis de qualidade.
          </p>
        </div>
        <div className={styles.cardWrapper}>
          <ServiceCard
            img="file"
            title="Döküman Analizi"
            description="Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum."
          />
          <ServiceCard
            img="star"
            title="Aceitação e Avaliação"
            description="Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum."
          />
          <ServiceCard
            img="crown"
            title="Análise de regras de negócios"
            description="Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum."
          />
          <ServiceCard
            img="chartBar"
            title="Diagramas de Fluxo"
            description="Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum."
          />
          <ServiceCard
            img="chartPieSlice"
            title="Análise das partes interessadas"
            description="Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum."
          />
          <ServiceCard
            img="figmaLogo"
            title="Prototipagem"
            description="Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum."
          />
        </div>
      </div>
    </section>
  );
};
