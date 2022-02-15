import axios from 'axios';

import gendersBaseURL from '../urls/urls';

export const axiosService = axios.create({baseURL: gendersBaseURL})

export default axiosService;