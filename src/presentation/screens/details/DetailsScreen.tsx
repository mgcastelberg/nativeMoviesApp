import { useRoute } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text } from 'react-native'
import { RootStackParams } from '../../navigation/NavigationStack';
import { useMovie } from '../../hooks/useMovie';

// Para extender las propiedades del archivo de rutas
interface Props extends StackScreenProps<RootStackParams, 'Details'>{}

export const DetailsScreen = ({ route }: Props) => {

    // Obtener de forma sencilla el id de los parametros del navigation
    // const { movieId } = useRoute().params;

    // Obtener de forma correcta con tipado
    const { movieId } = route.params;
    // console.log({movieId});

    const {} = useMovie( movieId );

    return (
        <View>
            <Text>DetailsScreen</Text>
        </View>
    )
}
