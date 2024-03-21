import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import { singleMovieReducer } from './single-movie-slice';
import { searchMoviesReducer } from './search-movies-slice';
import {
  FETCH_SEASON,
  seasonsEpisodeSliceReducer,
  fetchSeasonsOrEpisodesSaga
} from './seasons-episodes-slice';

function* sagas() {
  yield takeEvery(FETCH_SEASON, fetchSeasonsOrEpisodesSaga);
}
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    singleMovie: singleMovieReducer,
    searchMovies: searchMoviesReducer,
    seasons: seasonsEpisodeSliceReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
sagaMiddleware.run(sagas);
