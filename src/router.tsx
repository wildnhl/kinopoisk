import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './pages/Home';
import { MoviePage } from './pages/MoviePage';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/search-page/:pageNumber',
        element: <Home />
      },
      {
        path: '/movie/:id',
        element: <MoviePage />
      }
    ]
  }
]);
