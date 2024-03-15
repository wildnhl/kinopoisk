import { useState, ChangeEvent, FormEvent } from 'react';
import { useAppDispatch } from '../../../redux/store';
import { fetchSearchMoviesThunk } from '../../../redux/search-movies-slice';
import cl from './search.module.scss';

export function Search() {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useAppDispatch();
  const handleClickSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSumbitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchValue) {
      dispatch(fetchSearchMoviesThunk(searchValue));
    }
  };

  return (
    <form className={cl.form} onSubmit={handleSumbitForm}>
      <input
        className={cl.search}
        onChange={handleClickSearch}
        value={searchValue}
        type="search"
      />
    </form>
  );
}
