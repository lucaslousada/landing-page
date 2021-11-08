import styles from './styles.module.scss';

import mediumLogo from '../../assets/medium-logo.svg';
import linkedinLogo from '../../assets/linkedin-logo.svg';
import twitterLogo from '../../assets/twitter-logo.svg';
import instagramLogo from '../../assets/instagram-logo.svg';
import facebookLogo from '../../assets/facebook-logo.svg';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contentWrapper}>
        <nav>
          <ul>
            <h5>Solução e Serviços</h5>
            <li>
              <a href="/">Desenvolvimento de software</a>
            </li>
            <li>
              <a href="/">Terceirização</a>
            </li>
            <li>
              <a href="/">Qualidade e Gestão de Processos</a>
            </li>
            <li>
              <a href="/">Consultoria</a>
            </li>
            <li>
              <a href="/">Soluções com suporte para IoT</a>
            </li>
          </ul>

          <ul>
            <h5>Produtos</h5>
            <li>
              <a href="/">Sistema de Gestão Educacional</a>
            </li>
            <li>
              <a href="/">Sistema de Gestão de Capital Humano</a>
            </li>
            <li>
              <a href="/">Sistema de Gestão de Relacionamento com o Cliente</a>
            </li>
            <li>
              <a href="/">Sistema de gerenciamento de conteúdo</a>
            </li>
          </ul>

          <ul>
            <h5>Corporativo</h5>
            <li>
              <a href="/">Sobre nós</a>
            </li>
            <li>
              <a href="/">Documentos e Competências</a>
            </li>
            <li>
              <a href="/">Parceiros de trabalho</a>
            </li>
          </ul>

          <ul>
            <h5>Comunicação</h5>
            <li>
              <a href="/">Formulário de Solicitação de Informação</a>
            </li>
            <li>
              <a href="/">Formulário de solicitação de especialista</a>
            </li>
          </ul>
        </nav>

        <div className={styles.copyrightAndSocialMedia}>
          <p>&copy; Copyright 2010-2021</p>
          <div>
            <a href="/">
              <img src={mediumLogo} alt="Logotipo do Medium" />
            </a>
            <a href="/">
              <img src={linkedinLogo} alt="Logotipo do Linkedin" />
            </a>
            <a href="/">
              <img src={twitterLogo} alt="Logotipo do Twitter" />
            </a>
            <a href="/">
              <img src={instagramLogo} alt="Logotipo do Instagram" />
            </a>
            <a href="/">
              <img src={facebookLogo} alt="Logotipo do Facebook" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
