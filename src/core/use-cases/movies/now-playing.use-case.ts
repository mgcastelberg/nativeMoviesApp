import { HttpAdapter } from "../../../adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";

export const moviesNowPlayingUseCase = async ( fetcher: HttpAdapter ): Promise<Movie[]> => {
    // casos de uso sean agnosticos - que no dependan dependencias de paquetes de terceros
    try {
        const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');
        // console.log(nowPlaying);
        // transform data - mapper
        // return nowPlaying.results.map( result => MovieMapper.fromMovieDBResultToEntity(result) );
        return nowPlaying.results.map( MovieMapper.fromMovieDBResultToEntity );
        return [];
        
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching movies - nowPlaying");
    }
}
