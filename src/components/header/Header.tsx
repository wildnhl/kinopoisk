import { Search } from './search/Search';
import cl from './header.module.scss';

export function Header() {
  return (
    <header className="d-flex align-items-center">
      <div className={cl.logo}>
        <span className={cl.moviesStart}>Mov</span>
        <span className={cl.moviesEnd}>ies</span>
      </div>
      <Search />
    </header>
  );
}
