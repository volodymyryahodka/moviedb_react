import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {axiosPopularMovies} from '../../services/axios.popularMovies';

export const getMovies = createAsyncThunk(
	'popularMoviesSplice/getMovies',
	async (data, {rejectWithValue}) => {
		try {
			const movies = await axiosPopularMovies.getAll(data)
			return movies.results
		} catch (e) {
			rejectWithValue(e.message)
		}
	}
)

const popularMoviesSplice = createSlice({
	name: 'popularMoviesSplice',
	initialState: {
		movies: [],
		idGenres: 0,
		status: null,
		error: null
	}, reducers: {
		moviesFilter: (state, action) => {
			state.idGenres = action.payload.id
		}
	},
	extraReducers: {
		[getMovies.pending]: (state, action) => {
			state.status = 'pending'
			state.error = null
		},
		[getMovies.fulfilled]: (state, action) => {
			state.status = 'fulfilled'
			state.movies = action.payload
		},
		[getMovies.rejected]: (state, action) => {
			state.status = 'rejected'
			state.error = action.payload
		}
	}
})

export const {moviesFilter} = popularMoviesSplice.actions

const popularMoviesReducer = popularMoviesSplice.reducer
export default popularMoviesReducer