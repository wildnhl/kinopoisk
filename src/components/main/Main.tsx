import React from 'react';
import cl from './Main.module.scss';

interface IMainProps {
  children: React.ReactNode;
}

export function Main({ children }: IMainProps) {
  return <main className={cl.container}>{children}</main>;
}
