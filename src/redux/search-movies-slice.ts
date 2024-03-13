import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchSearchMovies } from '../services/search-movies';

export const fetchSearchMoviesThunk = createAsyncThunk<ISearchMovies, string>(
  'searchMovies/fetchSearchMoviesThunk',
  async (s) => {
    const data = await fetchSearchMovies({
      apikey: 'e27e767',
      s
    });
    return data;
  }
);

type InitialData = {
  moviesData: ISearchMovies | null;
};

const initialState: InitialData = {
  moviesData: null
};

interface ISearchMovies {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export const searchMoviesSlice = createSlice({
  name: 'searchMovies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchMoviesThunk.fulfilled, (state, action) => {
      state.moviesData = action.payload;
    });
  }
});

export const searchMoviesReducer = searchMoviesSlice.reducer;
