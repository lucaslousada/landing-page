import styles from './styles.module.scss';

import chartBar from '../../assets/chart-bar.svg';
import chartPieSlice from '../../assets/chart-pie-slice.svg';
import crown from '../../assets/crown.svg';
import figmaLogo from '../../assets/figma-logo.svg';
import file from '../../assets/file.svg';
import star from '../../assets/star.svg';

type ServiceCardProps = {
  img: 'chartBar' | 'chartPieSlice' | 'crown' | 'figmaLogo' | 'file' | 'star';
  title: string;
  description: string;
};

const images: { [index: string]: { img: string; alt: string } } = {
  chartBar: {
    img: chartBar,
    alt: 'Gráfico em barra',
  },
  chartPieSlice: {
    img: chartPieSlice,
    alt: 'Gráfico em pizza',
  },
  crown: {
    img: crown,
    alt: 'Coroa',
  },
  figmaLogo: {
    img: figmaLogo,
    alt: 'Logo Figma',
  },
  file: {
    img: file,
    alt: 'Arquivo',
  },
  star: {
    img: star,
    alt: 'Estrela',
  },
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ img, title, description }) => {
  return (
    <div className={styles.serviceCard}>
      <img src={images[img].img} alt={images[img].alt} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};
