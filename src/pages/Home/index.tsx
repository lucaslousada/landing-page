import { Header } from '../../components/Header';
import { MainSection } from '../../components/MainSection';
import { ServicesSection } from '../../components/ServicesSection';
import { TestSection } from '../../components/TestSection';

// import styles from './styles.module.scss';

export const Home: React.FC = () => {
  return (
    <main>
      <Header />
      <MainSection />
      <ServicesSection />
      <TestSection />
    </main>
  );
};
