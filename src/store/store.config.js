import {configureStore} from '@reduxjs/toolkit';

import genresReducer from './slice/genres.slice'
import popularMoviesReducer from "./slice/popularMovies.slice";
import moviesDetailsReducer from "./slice/moviesDetails.slice";
import actorsReducer from "./slice/actors.slice";

const store = configureStore({
	reducer: {
		genresReducer,
		popularMoviesReducer,
		moviesDetailsReducer,
		actorsReducer
	}
})

export default store