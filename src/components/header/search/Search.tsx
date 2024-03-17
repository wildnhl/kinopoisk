import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/store';
import {
  fetchSearchMoviesThunk,
  setSearchValueAction
} from '../../../redux/search-movies-slice';
import cl from './search.module.scss';

export function Search() {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleClickSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSumbitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchValue) {
      dispatch(fetchSearchMoviesThunk({ s: searchValue, page: 1 }));
      dispatch(setSearchValueAction(searchValue));
      navigate('/search-page/1');
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
