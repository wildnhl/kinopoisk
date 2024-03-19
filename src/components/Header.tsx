import { Link } from 'react-router-dom';
import { Search } from './Search';
import cl from '../styles/header.module.scss';

export function Header() {
  return (
    <header className="d-flex align-items-center mb-5">
      <Link to="/" className={cl.logo}>
        <span className={cl.moviesStart}>Mov</span>
        <span className={cl.moviesEnd}>ies</span>
      </Link>
      <Search />
    </header>
  );
}
