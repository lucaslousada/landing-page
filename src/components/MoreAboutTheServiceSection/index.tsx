import { Button } from '../Button';

import styles from './styles.module.scss';

import processesManagement from '../../assets/processes-management.jpg';
import testAnalysis from '../../assets/test-analysis.jpg';

type MoreAboutTheServiceSectionProps = {
  title: string;
  description: string;
  img: 'processesManagement' | 'testAnalysis';
  order: 'reverse' | 'normal';
};

const images: { [index: string]: { img: string; alt: string } } = {
  processesManagement: {
    img: processesManagement,
    alt: 'Uma equipe realizando o planejamento de um projeto',
  },
  testAnalysis: {
    img: testAnalysis,
    alt: 'Um profissional realizando testes',
  },
};

export const MoreAboutTheServiceSection: React.FC<MoreAboutTheServiceSectionProps> = ({
  title,
  description,
  img,
  order,
}) => {
  return (
    <section className={styles.moreSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <h2>{title}</h2>
          <p>{description}</p>
          <Button type="button" ButtonStyle="medium">
            Ver mais
          </Button>
        </div>
        <img className={styles[order]} src={images[img].img} alt={images[img].alt} />
      </div>
    </section>
  );
};
