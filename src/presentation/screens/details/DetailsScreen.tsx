import { StackScreenProps } from '@react-navigation/stack';
import { View, Text } from 'react-native'
import { RootStackParams } from '../../navigation/NavigationStack';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { FullMovie } from '../../../core/entities/movie.entity';
import { MovieDetails } from '../../components/movie/MovieDetails';
import { ScrollView } from 'react-native-gesture-handler';

// Para extender las propiedades del archivo de rutas
interface Props extends StackScreenProps<RootStackParams, 'Details'>{}

export const DetailsScreen = ({ route }: Props) => {

    // Obtener de forma sencilla el id de los parametros del navigation
    // const { movieId } = useRoute().params;

    // Obtener de forma correcta con tipado
    const { movieId } = route.params;
    // console.log({movieId});

    const { isLoading, movie } = useMovie( movieId );

    if ( isLoading ) {
        return <Text>Loading...</Text>
    }

    return (
        <ScrollView>
            {/* <MovieHeader movie={ movie } /> */}
            {/* Header */}
            {movie && <MovieHeader movie={movie as FullMovie} />}
            {/* Details */}
            {movie && <MovieDetails movie={movie as FullMovie} />}
        </ScrollView>
    )
}
