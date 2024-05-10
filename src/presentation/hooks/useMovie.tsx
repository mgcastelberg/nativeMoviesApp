import React, { useEffect, useState } from 'react'
import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from '../../adapters/movieDb.adapter';
import { FullMovie } from '../../core/entities/movie.entity';

export const useMovie = ( movieId: number ) => {
  
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState<FullMovie>();

    useEffect(() => {
        loadMovie();
    }, [movieId]);

    const loadMovie = async() => {
        setIsLoading(true);
        const fullMovie = await UseCases.getMovieByIdUseCase(movieDBFetcher, movieId);
        setMovie(fullMovie);
        setIsLoading(false);
        console.log(JSON.stringify(fullMovie, null, 2));
    }

    return {
        isLoading,
        movie
    }
}
