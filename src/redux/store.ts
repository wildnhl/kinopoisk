import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { singleMovieReducer } from './single-movie-slice';
import { searchMoviesReducer } from './search-movies-slice';

export const store = configureStore({
  reducer: {
    singleMovie: singleMovieReducer,
    searchMovies: searchMoviesReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
