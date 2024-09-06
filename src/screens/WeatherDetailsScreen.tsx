import {Button, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../models/navigation';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'Weather Details Screen'
>;

export const WeatherDetailsScreen: React.FC<Props> = ({navigation}) => {
  return (
    <>
      <Text>{'Weather Details Screen'}</Text>
      <Button
        title="Details"
        onPress={() => navigation.navigate('Main Screen')}
      />
    </>
  );
};
