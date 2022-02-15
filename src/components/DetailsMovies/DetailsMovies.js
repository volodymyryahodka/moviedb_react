import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Actors from '../Actors/Actors';
import DetailsMoviesGenres from '../DetailsMoviesGenres/DetailsMoviesGenres';
import DetailsMoviesProductionCompanies from '../DetailsMoviesProductionCompanies/DetailsMoviesProductionCompanies';
import DetailsMoviesProductionCountries from '../DetailsMoviesProductionCountries/DetailsMoviesProductionCountries';
import {apiImg} from '../../urls/urls';
import {getActors} from '../../store/slice/actors.slice';
import DetailsMoviesPage from "../../pages/DetailsMoviesPage/DetailsMoviesPage";

const DetailsMovies = (props) => {
	const {id} = useParams()
	const {
		movie: {
			original_title,
			release_date,
			poster_path,
			backdrop_path,
			overview,
			runtime,
			vote_average,
			genres,
			production_countries,
			production_companies
		}
	} = props
	const {actors} = useSelector(state => state['actorsReducer'])
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getActors(id))
	}, [])
	const genresAdd = () => {
		if (genres !== undefined) {
			const genre = genres.map(name => <DetailsMoviesGenres key={name.id} name={name}/>)
			return genre
		}
	}
	const productionCountries = () => {
		if (production_countries !== undefined) {
			const countries = production_countries.map(name => <DetailsMoviesProductionCountries key={name.id}
																								 name={name}/>)
			return countries
		}
	}
	const productionCompanies = () => {
		if (production_companies !== undefined) {
			const companies = production_companies.map(name => <DetailsMoviesProductionCompanies key={name.id}
																								 name={name}/>)
			return companies
		}
	}
	const actorsMovies = () => {
		if (actors !== undefined) {
			const actor = actors.map(actor => <Actors key={actor.id} actor={actor}/>)
			return actor
		}
	}
	return (
		<div>
			<div className={'photoDetails'}>
				<div className={'img'}>
					<p className={'vote_average'}>{vote_average}</p>
					<img src={apiImg + poster_path} alt={original_title} className={'main'}/>
					<img src={apiImg + backdrop_path} alt={original_title} className={'child'}/>
				</div>
				<div className={'detailsMovies'}>
					<h1>{original_title}</h1>
					<p className={'overview'}>{overview}</p>
					<div className={'genresName'}>{genresAdd()}</div>
					<p><b>Title: </b>{original_title}</p>
					<p><b>Release_date: </b>{release_date}</p>
					<div className={'genresTwo'}><p><b>Genres:</b></p>{genresAdd()}</div>
					<div className={'genresTwo'}><p><b>Production_countries:</b></p>
						<div className={'countries'}>{productionCountries()}</div>
					</div>
					<p><b>Runtime: </b>{runtime} min.</p>
					<div>
						<p><b>Production_companies: </b></p>
						<div className={'companiesName'}>{productionCompanies()}</div>
					</div>
					<div><p><b>Actors:</b></p>
						<div className={'actors'}>{actorsMovies()}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailsMovies;