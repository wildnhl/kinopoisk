import { Link } from 'react-router-dom';
import { Search } from './Search';
import style from '../styles/header.module.scss';

export function Header() {
  return (
    <header className="d-flex align-items-center mb-5">
      <Link to="/" className={style.logo}>
        <span className={style.moviesStart}>Mov</span>
        <span className={style.moviesEnd}>ies</span>
      </Link>
      <Search />
    </header>
  );
}
