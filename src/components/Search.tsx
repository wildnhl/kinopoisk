import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';
import {
  fetchSearchMoviesThunk,
  setSearchValueAction,
  setSearchTypeAction
} from '../redux/search-movies-slice';
import cl from '../styles/search.module.scss';

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
      dispatch(setSearchTypeAction('series'));
      dispatch(
        fetchSearchMoviesThunk({ s: searchValue, page: 1, type: 'series' })
      );
      dispatch(setSearchValueAction(searchValue));
      navigate('/search-page/1');
    }
  };

  return (
    <form className={cl.form} onSubmit={handleSumbitForm}>
      <input
        className={cl.searchInput}
        onChange={handleClickSearch}
        value={searchValue}
        type="search"
      />
      <select
        style={{ width: 'fit-content' }}
        className="form-select"
        aria-label="Default select example"
      >
        <option defaultValue="true">Choose type for search</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
      </select>
    </form>
  );
}
