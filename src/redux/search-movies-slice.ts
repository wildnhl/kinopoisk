import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { fetchSearchMovies } from '../services/search-movies';

type ParamsSearchThunk = {
  search: string;
  page?: number;
  type?: string;
  year?: string;
};

export const fetchSearchMoviesThunk = createAsyncThunk<
  FetchResult,
  ParamsSearchThunk,
  {
    state: RootState;
    rejectValue: string;
  }
>(
  'searchMovies/fetchSearchMoviesThunk',
  async (opts, { rejectWithValue, getState }) => {
    const { searchValue, typeSearch, yearSearch } = getState().searchMovies;
    const {
      search = searchValue,
      page = 1,
      type = typeSearch,
      year = yearSearch
    } = opts;

    try {
      const data = await fetchSearchMovies({ s: search, page, type, y: year });
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
  yearSearch: ''
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
      state.yearSearch = action.payload;
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
  yearSearch: string;
};

type FetchResult = {
  totalResults: string;
  Response: string;
  Search: Movie[];
};
