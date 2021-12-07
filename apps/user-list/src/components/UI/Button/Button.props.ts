import { MouseEventHandler } from 'react';

export interface ButtonProps {
  type: 'button' | 'submit' | undefined | 'reset';
  children: any;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}
