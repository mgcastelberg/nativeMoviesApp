import React from 'react'
import { Text, View } from 'react-native'
import { Movie } from '../../../core/entities/movie.entity';
import { ScrollView } from 'react-native-gesture-handler';
import { MoviePoster } from './MoviePoster';

interface Props {
    movies: Movie[];
    height?: number;
}

export const PosterCarousel = ({ height = 440, movies }: Props) => {
  return (
    <View style={{ height, backgroundColor:'gainsboro' }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
                movies.map( (movie,index) => <MoviePoster key={ movie.id } 
                    movie={ movie } 
                    isFirst={index === 0} 
                    isLast={index === movies.length - 1}
                />)
            }
        </ScrollView>
    </View>
  )
}