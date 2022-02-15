import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {axiosGenres} from '../../services/axios.genres';

export const getGenres = createAsyncThunk(
	'genresSplice/getGenres',
	async (_, {rejectWithValue}) => {
		try {
			const genres = await axiosGenres.getAll()
			return genres.genres
		} catch (e) {
			rejectWithValue(e.message)
		}
	}
)

const genresSplice = createSlice({
	name: 'genresSplice',
	initialState: {
		genres: [],
		status: null,
		error: null
	},
	extraReducers: {
		[getGenres.pending]: (state, action) => {
			state.status = 'pending'
			state.error = null
		},
		[getGenres.fulfilled]: (state, action) => {
			state.status = 'fulfilled'
			state.genres = action.payload
		},
		[getGenres.rejected]: (state, action) => {
			state.status = 'rejected'
			state.error = action.payload
		}
	}
})

const genresReducer = genresSplice.reducer
export default genresReducer