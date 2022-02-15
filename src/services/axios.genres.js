import {axiosService} from './axios.service';
import {api} from '../urls/urls';

export const axiosGenres = {
	getAll: () => axiosService.get(api.genresAPI).then(item => item.data)
}

export default axiosGenres;