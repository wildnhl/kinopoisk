import { Provider } from 'react-redux';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { MovieList } from './components/main/MovieList/MovieList';
import { store } from './redux/store';

export function App() {
  return (
    <Provider store={store}>
      <Header />
      <Main>
        <MovieList />
      </Main>
    </Provider>
  );
}
