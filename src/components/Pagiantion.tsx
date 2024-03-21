import { useParams } from 'react-router-dom';
import { useAppSelector } from '../redux/store';
import { renderPagination } from '../helpers/renderPagination';

interface UserParams {
  pageNumber: string;
}

export function Pagination() {
  const pages = useAppSelector((state) => state.searchMovies.pages);
  const { pageNumber } = useParams<keyof UserParams>() as UserParams;

  return (
    <div className="d-flex gap-4">
      <nav aria-label="Page navigation example">
        <ul className="pagination mt-3">
          {renderPagination(pageNumber, pages)}
        </ul>
      </nav>
    </div>
  );
}
