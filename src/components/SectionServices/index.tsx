import styles from './styles.module.scss';

import { CardServices } from '../CardServices';

export const SectionServices: React.FC = () => {
  return (
    <section className={styles.sectionServices}>
      <div className={styles.sectionHeader}>
        <h3>Qualidade e Gestão de Processos</h3>
        <p>
          Oferecemos serviços de Gerenciamento de Projetos, Análise de Negócios e Gerenciamento de
          Testes com nossa equipe especializada, que ganhou experiência em diferentes setores para
          que nossos clientes possam manter seus altos níveis de qualidade.
        </p>
      </div>
      <div className={styles.content}>
        <CardServices
          img="file"
          title="Döküman Analizi"
          description="Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum."
        />
        <CardServices
          img="star"
          title="Aceitação e Avaliação"
          description="Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum."
        />
        <CardServices
          img="crown"
          title="Análise de regras de negócios"
          description="Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum."
        />
        <CardServices
          img="chartBar"
          title="Diagramas de Fluxo"
          description="Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum."
        />
        <CardServices
          img="chartPieSlice"
          title="Análise das partes interessadas"
          description="Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum."
        />
        <CardServices
          img="figmaLogo"
          title="Prototipagem"
          description="Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum."
        />
      </div>
    </section>
  );
};
