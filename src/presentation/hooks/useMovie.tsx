import React, { useEffect, useState } from 'react'
import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from '../../adapters/movieDb.adapter';
import { FullMovie } from '../../core/entities/movie.entity';
import { Cast } from '../../core/entities/cast.entity';

export const useMovie = ( movieId: number ) => {
  
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState<FullMovie>();
    const [cast, setCast] = useState<Cast[]>([]);

    useEffect(() => {
        loadMovie();
    }, [movieId]);

    const loadMovie = async() => {
        setIsLoading(true);
        // const fullMovie = await UseCases.getMovieByIdUseCase(movieDBFetcher, movieId);
        const fullMoviePromise = UseCases.getMovieByIdUseCase(movieDBFetcher, movieId);
        const castPromise = UseCases.getMovieCastUseCase(movieDBFetcher, movieId);
        const [ fullMovie, fullCast ] = await Promise.all([ fullMoviePromise, castPromise ]);

        setMovie(fullMovie);
        setCast(fullCast);
        setIsLoading(false);

        console.log(JSON.stringify(fullMovie, null, 2));
        console.log(JSON.stringify(fullCast, null, 2));
    }

    return {
        isLoading,
        movie,
        cast
    }
}
