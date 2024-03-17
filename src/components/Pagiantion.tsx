import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../redux/store';

export function Pagination() {
  const pages = useAppSelector((state) => state.searchMovies.pages);
  const array = Array(pages).fill(1);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination flex-wrap">
        {array.map((_, index) => {
          return (
            <li key={index} className="page-item">
              <NavLink className="page-link" to={`/search-page/${index + 1}`}>
                {index + 1}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
