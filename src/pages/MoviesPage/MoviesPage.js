import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import getMovies from '../../store/slice/popularMovies.slice';
import MoviePage from '../../Components/MoviePage/MoviePage';

const MoviesPage = () => {
	const {movies, status, error} = useSelector(state => state['popularMoviesReducer'])
	const dispatch = useDispatch()
	const [pageNumber, setPageNumber] = useState(1)
	useEffect(() => {
		dispatch(getMovies(pageNumber))
	}, [pageNumber])
	const next = () => {
		if (pageNumber >= 32233) {
		} else {
			setPageNumber(pageNumber + 1)
		}
	}
	const prev = () => {
		if (pageNumber <= 1) {
		} else {
			setPageNumber(pageNumber - 1)
		}
	}
	return (
		<div>
			<div className={'genresMoviesPage'}>
				<div className={'button'}>
					<div>
						<button onClick={prev}>Prev</button>
					</div>
					<div>
						<button onClick={next}>Next</button>
					</div>
				</div>
				<div className={'content'}>
					{status === 'pending' && <h1>Loading...</h1>}
					{error && <h1>{error}</h1>}
					{movies.map(movie => <MoviePage key={movie.id} movie={movie}/>)}
				</div>
			</div>

		</div>
	);
};

export default MoviesPage;