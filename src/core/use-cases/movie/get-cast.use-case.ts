import { HttpAdapter } from "../../../adapters/http/http.adapter";
import { MovieCastResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { CastMapper } from "../../../infrastructure/mappers/cast.mapper";
import { Cast } from "../../entities/cast.entity";

export const getMovieCastUseCase = async( fetcher: HttpAdapter, movieId: number ):Promise<Cast[]> => {
    try {
        const { cast } = await fetcher.get<MovieCastResponse>(`/${ movieId }/credits`);
        // const actors = cast.map( (actor) => CastMapper.fromMovieDBCastEntity(actor) ); 
        const actors = cast.map( CastMapper.fromMovieDBCastEntity );
        return actors;

    } catch (error) {
        throw new Error(`Cannot get movie cast: ${ movieId }`);
    }
 }