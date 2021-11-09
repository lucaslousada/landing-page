import { Button } from '../Button';

import styles from './styles.module.scss';

export const MainSection: React.FC = () => {
  return (
    <section className={styles.mainSection}>
      <div className={styles.contentWrapper}>
        <h1>23 anos de experiência em tecnologia</h1>
        <p>
          Oferecemos serviços de Gerenciamento de Projetos, Testes e Análise de Negócios com nossa
          equipe especializada, que oferece altos niveis de qualidade para nossos clientes.
        </p>
        <form className={styles.newsLetter}>
          <input
            type="email"
            name="email"
            placeholder="Inscreva-se para receber notícias"
            required
          />
          <Button type="submit" ButtonStyle="small">
            Inscrever-se
          </Button>
        </form>
      </div>
    </section>
  );
};
