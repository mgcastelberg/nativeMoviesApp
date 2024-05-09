import React, { useEffect, useState } from 'react'
import { Movie } from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from '../../adapters/movieDb.adapter';

let popularPageNumber = 1;

export const useMovies = () => {
  
    const [isLoading, setIsLoading] = useState(true);
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
    const [popular, setPopular] = useState<Movie[]>([]);
    const [topRated, setTopRated] = useState<Movie[]>([]);
    const [upcoming, setUpcoming] = useState<Movie[]>([]);

    useEffect(() => {
        initialLoad();
    }, []);

    const initialLoad = async() => {
        // Solicita indicar un adaptador fetcher
        // const nowPlayingMovies = await UseCases.moviesNowPlayingUseCase(movieDBFetcher);
        // console.log(nowPlayingMovies[0]);
        // const popularMovies = await UseCases.moviesPopularUseCase(movieDBFetcher);
        // console.log(popularMovies[0]);
        // const topRatedMovies = await UseCases.moviesTopRatedUseCase(movieDBFetcher);
        // console.log(topRatedMovies[0]);
        // const upcomingMovies = await UseCases.moviesUpcomingUseCase(movieDBFetcher);
        // console.log(upcomingMovies[0]);

        // mejora con promesas
        const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher);
        const popularPromise = UseCases.moviesPopularUseCase(movieDBFetcher);
        const topRatedPromise = UseCases.moviesTopRatedUseCase(movieDBFetcher);
        const upcomingPromise = UseCases.moviesUpcomingUseCase(movieDBFetcher);
        
        const [
            nowPlayingMovies,
            popularMovies,
            topRatedMovies,
            upcomingMovies
        ] = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise
        ]);

        setNowPlaying(nowPlayingMovies);
        setPopular(popularMovies);
        setTopRated(topRatedMovies);
        setUpcoming(upcomingMovies);

        setIsLoading(false);

        // console.log({
        //     nowPlayingMovies,
        //     popularMovies,
        //     topRatedMovies,
        //     upcomingMovies
        // });

    }

    return {
        isLoading,
        nowPlaying,
        popular,
        topRated,
        upcoming,
        // Metodos
        popularNextPage: async() => {
            popularPageNumber++;
            const popularMovies = await UseCases.moviesPopularUseCase( movieDBFetcher, {
                page: popularPageNumber,
            });

            setPopular( prev => [...prev, ...popularMovies ]);
        }
    }
}
