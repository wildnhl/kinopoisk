import React from 'react';
import cl from '../styles/main.module.scss';

interface IMainProps {
  children: React.ReactNode;
}

export function Main({ children }: IMainProps) {
  return <main className={cl.container}>{children}</main>;
}