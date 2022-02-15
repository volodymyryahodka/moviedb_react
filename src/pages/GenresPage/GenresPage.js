import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Genres from '../../Components/Genres/Genres';
import getGenres from '../../store/slice/genres.slice';

const GenresPage = () => {
	const {genres, status, error} = useSelector(state => state['genresReducer'])
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getGenres())
	}, [])
	return (
		<div>
			{status === 'pending' && <h1>Loading...</h1>}
			{error && <h1>{error}</h1>}
			<div className={'genresColor'}>
				<h1>Всі жанри</h1>
				<div className={'genres'}>
					{genres.map(genre => <Genres key={genre.id} genre={genre}/>)}
				</div>
			</div>
		</div>
	);
};

export default GenresPage;