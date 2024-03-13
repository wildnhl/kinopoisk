import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchSingleMovie } from '../services/single-movie';

export const fetchSingleMovieThunk = createAsyncThunk<ISingleMovie, string>(
  'singleMovie/fetchSingleMovieThunk',
  async (i) => {
    const data = await fetchSingleMovie({
      apikey: 'e27e767',
      i
    });
    return data;
  }
);

type InitialData = {
  movieData: ISingleMovie | null;
};

type Ratings = {
  Source: string;
  Value: string;
};

const initialState: InitialData = {
  movieData: null
};

interface ISingleMovie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Ratings[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  totalSeasons: string;
  Response: string;
}

export const singleMovieSlice = createSlice({
  name: 'singleMovie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleMovieThunk.fulfilled, (state, action) => {
      state.movieData = action.payload;
    });
  }
});

export const singleMovieReducer = singleMovieSlice.reducer;
