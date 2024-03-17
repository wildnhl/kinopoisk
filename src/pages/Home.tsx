import { MovieList } from '../components/main/MovieList/MovieList';
import { Pagination } from '../components/Pagiantion';

export function Home() {
  return (
    <>
      <MovieList />
      <Pagination />
    </>
  );
}
