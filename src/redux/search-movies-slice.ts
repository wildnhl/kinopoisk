import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { fetchSearchMovies, ParamsSearch } from '../services/search-movies';

export const fetchSearchMoviesThunk = createAsyncThunk<
  FetchResult,
  ParamsSearch,
  { state: RootState }
>(
  'searchMovies/fetchSearchMoviesThunk',
  async (opts, { rejectWithValue, getState }) => {
    const { searchValue } = getState().searchMovies;
    const { s = searchValue, page = 1 } = opts;
    try {
      const data = await fetchSearchMovies({ s, page });
      if (data.Response === 'False') {
        throw new Error(data.Error);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState: InitType = {
  moviesData: [],
  isLoading: false,
  error: null,
  searchValue: '',
  pages: 1
};

export const searchMoviesSlice = createSlice({
  name: 'searchMovies',
  initialState,
  reducers: {
    setSearchValueAction: (state, action) => {
      state.searchValue = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchMoviesThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.moviesData = action.payload.Search;
      state.pages = Math.floor(+action.payload.totalResults / 10);
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
export const { setSearchValueAction } = searchMoviesSlice.actions;

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
  searchValue: string;
  pages: number;
};

type FetchResult = {
  totalResults: string;
  Response: string;
  Search: Movie[];
};
