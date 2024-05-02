import React, { useEffect, useState } from 'react'
import { Movie } from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from '../../adapters/movieDb.adapter';

export const useMovies = () => {
  
    const [isLoading, setIsLoading] = useState(true);
    const [nowPlaying, setnowPlaying] = useState<Movie[]>([]);

    useEffect(() => {
        initialLoad();
    }, []);

    const initialLoad = async() => {
        // Solicita indicar un adaptador fetcher
        const nowPlayingMovies = await UseCases.moviesNowPlayingUseCase(movieDBFetcher);
        console.log(nowPlayingMovies[0]);
    }

    return {
        isLoading,
        nowPlaying
    }
}
