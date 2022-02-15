import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {actorsService} from '../../services/axios.actors';

export const getActors = createAsyncThunk(
	'actorsSplice/getActors',
	async (id, {rejectWithValue}) => {
		try {
			const actors = await actorsService.getAll(id)
			return actors.catch
		} catch (e) {
			rejectWithValue(e.message)
		}
	}
)

const actorsSplice = createSlice({
	name: 'actorsSplice',
	initialState: {
		actors: []
	},
	extraReducers: {
		[getActors.pending]: (state, action) => {
			state.status = 'pending'
			state.error = null
		},
		[getActors.fulfilled]: (state, action) => {
			state.status = 'fulfilled'
			state.actors = action.payload
		},
		[getActors.rejected]: (state, action) => {
			state.status = 'rejected'
			state.error = action.payload
		}
	}
})

const actorsReducer = actorsSplice.reducer
export default actorsReducer