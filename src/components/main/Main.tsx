import React from 'react';

interface IMainProps {
  children: React.ReactNode;
}

export function Main({ children }: IMainProps) {
  return <main>{children}</main>;
}
