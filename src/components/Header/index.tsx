import { useState } from 'react';

import { Button } from '../Button';

import styles from './styles.module.scss';

export const Header: React.FC = () => {
  const [activeMobile, setActiveMobile] = useState(false);

  function toggleMobileMenuMode() {
    setActiveMobile(!activeMobile);
    document.getElementsByTagName('body')[0].style.overflow = `${
      activeMobile ? 'visible' : 'hidden'
    }`;
  }

  return (
    <header className={activeMobile ? `${styles.header} ${styles.active}` : styles.header}>
      <div className={styles.contentWrapper}>
        <button className={styles.hamburgerIcon} type="button" onClick={toggleMobileMenuMode}>
          <span />
        </button>
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
