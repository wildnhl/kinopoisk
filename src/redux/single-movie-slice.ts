import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { ISingleMovie } from '../types/singleMovieTypes';
import { fetchSingleMovie } from '../services/single-movie';

export const fetchSingleMovieThunk = createAsyncThunk<ISingleMovie, string>(
  'singleMovie/fetchSingleMovieThunk',
  async (i, { rejectWithValue }) => {
    try {
      const data = await fetchSingleMovie({ i, plot: 'full' });
      if (data.Response === 'False') {
        throw new Error(data.Error);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState: InitialData = {
  movieData: null,
  isLoading: false,
  error: null
};

export const singleMovieSlice = createSlice({
  name: 'singleMovie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleMovieThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movieData = action.payload;
    });
    builder.addCase(fetchSingleMovieThunk.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchSingleMovieThunk.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  }
});

export const singleMovieReducer = singleMovieSlice.reducer;

type InitialData = {
  movieData: ISingleMovie | null;
  isLoading: boolean;
  error: string | null;
};
