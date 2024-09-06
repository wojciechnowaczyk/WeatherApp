import {Button, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../models/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Main Screen'>;

export const MainScreen: React.FC<Props> = ({navigation}) => {
  return (
    <>
      <Text>{'Weather Main Screen'}</Text>
      <Button
        title="Details"
        onPress={() => navigation.navigate('Weather Details Screen')}
      />
    </>
  );
};
