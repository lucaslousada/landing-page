import { Button } from '../Button';

import styles from './styles.module.scss';

import users from '../../assets/users.svg';

export const ContactSection: React.FC = () => {
  return (
    <section className={styles.contactSection}>
      <img src={users} alt="Usuários" />
      <h2>Contate-nos</h2>
      <p>Contate-nos para informações detalhadas sobre nossas soluções, serviços e produtos.</p>
      <Button type="button" ButtonStyle="large">
        Contate-nos
      </Button>
    </section>
  );
};
