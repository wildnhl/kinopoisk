import { MovieList } from '../components/MovieList';
import { Pagination } from '../components/Pagiantion';
import { useAppSelector } from '../redux/store';

export function MovieListPage() {
  const pages = useAppSelector((state) => state.searchMovies.pages);
  return (
    <>
      {pages > 1 && <Pagination />}
      <MovieList />
    </>
  );
}
