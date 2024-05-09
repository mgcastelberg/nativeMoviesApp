import { HttpAdapter } from "../../../adapters/http/http.adapter";
import { PopularResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";

interface Options {
  page?: number;
  limit?: number;  
}

export const moviesPopularUseCase = async ( fetcher: HttpAdapter, options?: Options ): Promise<Movie[]> => {
    // casos de uso sean agnosticos - que no dependan dependencias de paquetes de terceros
    try {
        const popular = await fetcher.get<PopularResponse>('/popular', {
            params:{
                page: options?.page ?? 1
            }
        });
        // transform data - mapper
        return popular.results.map( MovieMapper.fromMovieDBResultToEntity );        
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching movies - popular");
    }
}