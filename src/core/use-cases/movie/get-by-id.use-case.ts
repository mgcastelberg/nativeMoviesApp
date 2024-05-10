import { HttpAdapter } from "../../../adapters/http/http.adapter";
import { MovieDBMovieDetail } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { FullMovie } from '../../entities/movie.entity';

export const getMovieByIdUseCase = async(fetcher: HttpAdapter, movieId: number):Promise<FullMovie> => {
    try {
        // Fecher
        const movie = await fetcher.get<MovieDBMovieDetail>(`/${movieId}`);
        // Mappeo
        const fullMovie = MovieMapper.fromMovieDBByIdToEntity( movie );
        return fullMovie;
    } catch (error) {
        throw new Error(`Cannot get movie by id: ${ movieId }`);
    }
}