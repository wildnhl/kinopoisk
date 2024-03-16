import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';
import { MovieList } from './components/main/MovieList/MovieList';
import { MoviePage } from './pages/MoviePage';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MovieList />
      },
      {
        path: '/movie/:id',
        element: <MoviePage />
      }
    ]
  }
]);
