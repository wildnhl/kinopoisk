import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchSearchMovies } from '../services/search-movies';

export const fetchSearchMoviesThunk = createAsyncThunk(
  'searchMovies/fetchSearchMoviesThunk',
  async (s: string, { rejectWithValue }) => {
    try {
      const data = await fetchSearchMovies({ s });
      if (data.Response === 'False') {
        throw new Error(data.Error);
      }
      return data.Search;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState: InitType = {
  moviesData: [],
  isLoading: false,
  error: null
};

export const searchMoviesSlice = createSlice({
  name: 'searchMovies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchMoviesThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.moviesData = action.payload;
    });
    builder.addCase(fetchSearchMoviesThunk.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchSearchMoviesThunk.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  }
});

export const searchMoviesReducer = searchMoviesSlice.reducer;

type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

type InitType = {
  moviesData: Movie[] | [];
  isLoading: boolean;
  error: string | null;
};
