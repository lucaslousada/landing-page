import { Header } from '../../components/Header';
import { MainSection } from '../../components/MainSection';
import { ServicesSection } from '../../components/ServicesSection';
import { TestSection } from '../../components/TestSection';
import { MoreAboutTheServiceSection } from '../../components/MoreAboutTheServiceSection';
import { BusinessPartnersSection } from '../../components/BusinessPartnersSection';

// import styles from './styles.module.scss';

export const Home: React.FC = () => {
  return (
    <main>
      <Header />
      <MainSection />
      <ServicesSection />
      <TestSection />
      <MoreAboutTheServiceSection
        title="Qualidade e Gestão de Processos"
        description="Nossa equipe experiente; consiste em gerentes de projeto experientes de diversos setores,
        que possuem a certificação PMP®. Estamos com você para apoiar a gestão de seus projetos, para fortalecer
        as áreas fracas, para aplicar e desenvolver a metodologia PMI® válida internacionalmente em sua empresa."
        img="processesManagement"
        order="normal"
      />
      <MoreAboutTheServiceSection
        title="Gerenciamento e análise de teste"
        description="Aplicamos cuidadosamente os testes que realizamos para evitar erros de software nos projetos
        que consultamos, manualmente ou com automatização de testes em cada etapa do projeto. Nossa experiente equipe
        de teste fornece às instituições um serviço de teste de software de alta qualidade e uma experiência do cliente
        totalmente segura, de alta qualidade e satisfatória."
        img="testAnalysis"
        order="reverse"
      />
      <BusinessPartnersSection />
    </main>
  );
};
