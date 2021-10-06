import axios, { AxiosInstance } from 'axios';

export const tmdb: AxiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

const TMDBKEY: string = "72bdc402ffe75159d90f2fdcc2eeca97";

export const requests = {
    fetchTrending: `/trending/all/week?api_key=${TMDBKEY}&language=en-us`,
    fetchNetflixOriginals: `/discover/tv?api_key=${TMDBKEY}&language=en-us&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${TMDBKEY}&language=en-us`,
    fetchActionMovies: `/discover/movie?api_key=${TMDBKEY}&language=en-us&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${TMDBKEY}&language=en-us&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${TMDBKEY}&language=en-us&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${TMDBKEY}&language=en-us&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${TMDBKEY}&language=en-us&with_genres=99`,
}

