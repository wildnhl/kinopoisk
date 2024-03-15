import { Outlet } from 'react-router-dom';

import { Header } from './components/header/Header';
import { Main } from './components/main/Main';

export function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}
