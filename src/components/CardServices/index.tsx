import styles from './styles.module.scss';

import chartBar from '../../assets/chart-bar.svg';
import chartPieSlice from '../../assets/chart-pie-slice.svg';
import crown from '../../assets/crown.svg';
import figmaLogo from '../../assets/figma-logo.svg';
import file from '../../assets/file.svg';
import star from '../../assets/star.svg';

type CardServicesProps = {
  img: 'chartBar' | 'chartPieSlice' | 'crown' | 'figmaLogo' | 'file' | 'star';
  title: string;
  description: string;
};

const images: { [index: string]: string } = {
  chartBar,
  chartPieSlice,
  crown,
  figmaLogo,
  file,
  star,
};

export const CardServices: React.FC<CardServicesProps> = ({ img, title, description }) => {
  return (
    <div className={styles.card}>
      <img src={images[img]} alt={img} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};
