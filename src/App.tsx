import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { NavigationStack } from './presentation/navigation/NavigationStack';

export const App = () => {
  return (
    <NavigationContainer>
      <NavigationStack/>
    </NavigationContainer>
  )
}
