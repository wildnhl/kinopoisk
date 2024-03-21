import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { fetchSearchMovies, ParamsSearch } from '../services/search-movies';

export const fetchSearchMoviesThunk = createAsyncThunk<
  FetchResult,
  ParamsSearch,
  {
    state: RootState;
    rejectValue: string;
  }
>(
  'searchMovies/fetchSearchMoviesThunk',
  async (opts, { rejectWithValue, getState }) => {
    const { searchValue, typeSearch, year } = getState().searchMovies;
    const { s = searchValue, page = 1, type = typeSearch, y = year } = opts;
    try {
      const data = await fetchSearchMovies({ s, page, type, y });

      if (data.Error) {
        throw new Error(data.Error);
      }
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('something went wrong');
    }
  }
);

const initialState: InitType = {
  moviesData: [],
  isLoading: false,
  error: '',
  searchValue: '',
  pages: 1,
  typeSearch: '',
  year: ''
};

export const searchMoviesSlice = createSlice({
  name: 'searchMovies',
  initialState,
  reducers: {
    setSearchValueAction: (state, action) => {
      state.searchValue = action.payload;
    },
    setSearchTypeAction: (state, action) => {
      state.typeSearch = action.payload;
    },
    setSearchYearAction: (state, action) => {
      state.year = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchMoviesThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.moviesData = action.payload.Search;
      state.pages = Math.ceil(+action.payload.totalResults / 10);
    });
    builder.addCase(fetchSearchMoviesThunk.pending, (state) => {
      state.error = '';
      state.isLoading = true;
    });
    builder.addCase(fetchSearchMoviesThunk.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  }
});
export const {
  setSearchValueAction,
  setSearchTypeAction,
  setSearchYearAction
} = searchMoviesSlice.actions;

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
  error?: string;
  searchValue: string;
  pages: number;
  typeSearch: string;
  year: string;
};

type FetchResult = {
  totalResults: string;
  Response: string;
  Search: Movie[];
};
