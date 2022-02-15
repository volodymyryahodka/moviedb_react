import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {axiosPopularMovies} from '../../services/axios.popularMovies';

export const getMoviesDetails = createAsyncThunk(
	'moviesDetailsSplice/getMoviesDetails',
	async (id, {rejectWithValue}) => {
		try {
			const movie = await axiosPopularMovies.getDetails(id)
			return movie
		} catch (e) {
			rejectWithValue(e.message)
		}
	}
)

const moviesDetailsSplice = createSlice({
	name: 'moviesDetailsSplice',
	initialState: {
		movie: [],
		status: null,
		error: null
	},
	extraReducers: {
		[getMoviesDetails.pending]: (state, action) => {
			state.status = 'pending'
			state.error = null
		},
		[getMoviesDetails.fulfilled]: (state, action) => {
			state.status = 'fulfilled'
			state.movie = action.payload
		},
		[getMoviesDetails.rejected]: (state, action) => {
			state.status = 'rejected'
			state.error = action.payload
		}
	}
})

const moviesDetailsReducer = moviesDetailsSplice.reducer
export default moviesDetailsReducer