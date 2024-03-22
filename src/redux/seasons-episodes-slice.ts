import { call, put } from 'redux-saga/effects';
import { createSlice, createAction } from '@reduxjs/toolkit';
import { fetchSeasonsOrEpisodes } from '../services/seasons-episodes';
import type { IEpisode } from '../types/types';
import type { Season } from '../types/interfaces';

type ReturnType = {
  id: string;
  Season: string;
  Episode?: string;
};

type Action = {
  payload: ReturnType;
  type: string;
};

function* fetchSeasonsOrEpisodesSaga(action: Action): Generator {
  const { id, Season = '1', Episode = '' } = action.payload;
  const episodeParams = { i: id, Season, Episode };
  const seasonParams = { i: id, Season };
  try {
    const episode = yield call(fetchSeasonsOrEpisodes, episodeParams);
    const season = yield call(fetchSeasonsOrEpisodes, seasonParams);
    yield put(setEpisode(episode));
    yield put(setSeason(season));
  } catch (error) {
    yield put(setError(error));
  }
}

interface IinitialState {
  error: string;
  season: Season | null;
  episode: IEpisode | null;
}
const initialState: IinitialState = {
  error: '',
  season: null,
  episode: null
};

const seasonsEpisodeSlice = createSlice({
  name: 'seasonsEpisode',
  initialState,
  reducers: {
    setSeason: (state, action) => {
      state.season = action.payload;
    },
    setEpisode: (state, action) => {
      state.episode = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const FETCH_SEASON = 'seasonsEpisode/fetchSeasonsOrEpisodes';
export const fetchSeason = createAction<ReturnType>(FETCH_SEASON);

export const { setSeason, setEpisode, setError } = seasonsEpisodeSlice.actions;
export { fetchSeasonsOrEpisodesSaga };
export const seasonsEpisodeSliceReducer = seasonsEpisodeSlice.reducer;
