import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  'Main Screen': undefined;
  'Weather Details Screen': undefined;
};

export type MainScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Main Screen'>;
export type WeatherDetailsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Weather Details Screen'>;
