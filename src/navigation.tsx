import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen} from './screens/MainScreen';
import {WeatherDetailsScreen} from './screens/WeatherDetailsScreen';
import {RootStackParamList} from './models/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main Screen">
        <Stack.Screen name="Main Screen" component={MainScreen} />
        <Stack.Screen
          name="Weather Details Screen"
          component={WeatherDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
