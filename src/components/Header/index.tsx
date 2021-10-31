import { Button } from '../Button';

import styles from './styles.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contentWrapper}>
        <nav>
          <ul>
            <li>
              <a href="/">Solução e Serviços</a>
            </li>
            <li>
              <a href="/">Produtos</a>
            </li>
            <li>
              <a href="/">Tecnologias</a>
            </li>
            <li>
              <a href="/">Recursos Humanos</a>
            </li>
            <li>
              <a href="/">Corporativo</a>
            </li>
          </ul>
        </nav>
        <Button type="button" ButtonStyle="extraSmall">
          Contate-nos
        </Button>
      </div>
    </header>
  );
};
