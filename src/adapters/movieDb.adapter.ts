import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key: '48d900b66f640eef58542a7410c59237',
        language: 'es'
    }
});