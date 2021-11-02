import { Header } from '../../components/Header';
import { SectionMain } from '../../components/SectionMain';
import { SectionServices } from '../../components/SectionServices';

// import styles from './styles.module.scss';

export const Home: React.FC = () => {
  return (
    <main>
      <Header />
      <SectionMain />
      <SectionServices />
    </main>
  );
};
