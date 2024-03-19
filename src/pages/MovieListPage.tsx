import { MovieList } from '../components/MovieList';
import { Pagination } from '../components/Pagiantion';

export function MovieListPage() {
  return (
    <>
      <Pagination />
      <MovieList />
    </>
  );
}
