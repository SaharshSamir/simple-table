import React, { HTMLAttributes, ReactNode } from 'react';
import './ButtonStyles.css';
import styles from './ButtonStyles';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
  children: ReactNode;
}

export const Button = ({ children, variant, ...props }: Props) => {
  return (
    <button
      style={variant === 'primary' ? styles.primary : styles.secondary}
      {...props}
    >
      {children}
    </button>
  );
};
