import { HttpAdapter } from "../../../adapters/http/http.adapter";
import { UpcomingResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";

export const moviesUpcomingUseCase = async ( fetcher: HttpAdapter ): Promise<Movie[]> => {
    try {
        const upcomming = await fetcher.get<UpcomingResponse>('/upcoming');
        // transform data - mapper
        return upcomming.results.map( MovieMapper.fromMovieDBResultToEntity );        
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching movies - upcoming");
    }
}