import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';
import { MovieList } from './components/main/MovieList/MovieList';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MovieList />
      }
    ]
  }
]);
