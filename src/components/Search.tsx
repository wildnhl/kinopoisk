import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../redux/store';
import {
  setSearchValueAction,
  setSearchTypeAction,
  setSearchYearAction
} from '../redux/search-movies-slice';
import style from '../styles/search.module.scss';

type TypeInputs = {
  searchValue: string;
  typeValue: string;
  yearValue: string;
};

export function Search() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm<TypeInputs>();

  const onSubmitSearchForm: SubmitHandler<TypeInputs> = (data) => {
    const { searchValue, typeValue, yearValue } = data;
    if (searchValue.trim()) {
      dispatch(setSearchTypeAction(typeValue));
      dispatch(setSearchValueAction(searchValue));
      dispatch(setSearchYearAction(yearValue));
      navigate('/search-page/1');
    } else {
      setValue('searchValue', '');
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmitSearchForm)}>
      <input
        className="form-control"
        type="search"
        placeholder="Search"
        {...register('searchValue', { required: true })}
      />
      <div className={style.filter}>
        <input
          placeholder="Year"
          className="form-control"
          style={{ width: 'fit-content' }}
          type="text"
          {...register('yearValue')}
        />
        <p>Type:</p>
        <select
          style={{ width: 'fit-content' }}
          className="form-select"
          {...register('typeValue')}
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
