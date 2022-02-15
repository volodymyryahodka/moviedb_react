import {axiosService} from './axios.service';
import {api} from '../urls/urls';

export const axiosPopularMovies = {
	getAll: (pageID) => axiosService.get(api.popularMovies + pageID).then(item => item.data),
	getDetails: (id) => axiosService.get(`/movie/` + id + api.moviesDetails).then(item => item.data)
}