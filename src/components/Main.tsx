import React from 'react';
import style from '../styles/main.module.scss';

interface IMainProps {
  children: React.ReactNode;
}

export function Main({ children }: IMainProps) {
  return <main className={style.container}>{children}</main>;
}
