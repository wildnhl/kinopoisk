import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';
import {
  setSearchValueAction,
  setSearchTypeAction,
  setSearchYearAction
} from '../redux/search-movies-slice';
import cl from '../styles/search.module.scss';

export function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [typeValue, setTypeValue] = useState('');
  const [yearValue, setYearValue] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleClickSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  const handleChangeTypeValue = (event: ChangeEvent<HTMLSelectElement>) => {
    setTypeValue(event.target.value);
  };
  const handleInputTypeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setYearValue(event.target.value);
  };

  const handleSumbitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchValue) {
      dispatch(setSearchTypeAction(typeValue));
      dispatch(setSearchValueAction(searchValue));

      dispatch(setSearchYearAction(yearValue));

      navigate('/search-page/1');
    }
  };

  return (
    <form className={cl.form} onSubmit={handleSumbitForm}>
      <input
        className="form-control"
        onChange={handleClickSearch}
        value={searchValue}
        type="search"
        placeholder="Search"
      />
      <div className={cl.filter}>
        <input
          placeholder="Year"
          className="form-control"
          style={{ width: 'fit-content' }}
          onChange={handleInputTypeValue}
          value={yearValue}
          type="text"
        />
        <p>Type:</p>
        <select
          style={{ width: 'fit-content' }}
          className="form-select"
          aria-label="Default select example"
          onChange={handleChangeTypeValue}
        >
          <option defaultValue="true" value="">
            Any
          </option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="game">Game</option>
        </select>
        <button className="btn btn-primary" type="submit">
          Find
        </button>
      </div>
    </form>
  );
}
