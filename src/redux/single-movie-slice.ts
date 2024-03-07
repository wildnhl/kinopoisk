import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchSingleMovie } from '../services/single-movie';

export const fetchSingleMovieThunk = createAsyncThunk(
  'singleMovie/fetchSingleMovieThunk',
  async (id: number) => {
    const data = await fetchSingleMovie(id);
    console.log(data);
    return data;
  }
);

type InitialData = {
  movieData: ISingleMovie | null;
};

const initialState: InitialData = {
  movieData: null
};

interface ISingleMovie {
  kinopoiskId: number;
  kinopoiskHDId: string;
  imdbId: string;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl: string;
  logoUrl: string;
  reviewsCount: number;
  ratingGoodReview: number;
  ratingGoodReviewVoteCount: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics: number;
  ratingFilmCriticsVoteCount: number;
  ratingAwait: number;
  ratingAwaitCount: number;
  ratingRfCritics: number;
  ratingRfCriticsVoteCount: number;
  webUrl: string;
  year: number;
  filmLength: number;
  slogan: string;
  description: string;
  shortDescription: string;
  editorAnnotation: string;
  isTicketsAvailable: false;
  productionStatus: string;
  type: string;
  ratingMpaa: string;
  ratingAgeLimits: string;
  hasImax: boolean;
  has3D: boolean;
  lastSync: string;
  countries: [
    {
      country: string;
    }
  ];
  genres: [
    {
      genre: string;
    }
  ];
  startYear: number;
  endYear: number;
  serial: boolean;
  shortFilm: boolean;
  completed: boolean;
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
