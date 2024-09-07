import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Weather } from './weather';

export type RootStackParamList = {
  'Main Screen': undefined;
  'Weather Details Screen': {weatherDetails: Weather};
};

export type MainScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Main Screen'>;
export type WeatherDetailsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Weather Details Screen'>;
