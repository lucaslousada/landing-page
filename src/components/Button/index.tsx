/* eslint-disable react/button-has-type */

import { ButtonHTMLAttributes } from 'react';

import styles from './styles.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  type: 'submit' | 'reset' | 'button';
  ButtonStyle: 'extraSmall' | 'small' | 'medium' | 'large';
};

export const Button: React.FC<ButtonProps> = ({ children, type, ButtonStyle }) => {
  return (
    <button type={type} className={`${styles.button} ${styles[ButtonStyle]}`}>
      {children}
    </button>
  );
};
