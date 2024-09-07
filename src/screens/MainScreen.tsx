import {View, ViewStyle} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../models/navigation';
import {CustomButton} from '../components/CustomButton';
import {Text, useTheme, Input} from '@rneui/themed';
import {locales} from '../locales';
import {CustomTheme} from '../models/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Main Screen'>;

export const MainScreen: React.FC<Props> = ({navigation}) => {
  const {theme} = useTheme();

  return (
    <View style={styles.container(theme)}>
      <Text h2>{locales.APP_TITLE}</Text>
      <Text>{locales.PLEASE_ENTER_A_CITY}</Text>
      <Input
        // errorStyle={{color: 'red'}}
        // errorMessage={locales.ENTER_VALID_CITY_NAME}
        inputContainerStyle={styles.input(theme)}
        // renderErrorMessage={true}
      />
      <CustomButton
        title={locales.NEXT}
        onPress={async () => navigation.navigate('Weather Details Screen')}
      />
      <CustomButton
        title={locales.ADD_AS_FAVOURITE}
        onPress={async () => navigation.navigate('Weather Details Screen')}
      />
    </View>
  );
};

const styles = {
  container: (theme: {colors: {background: string}}): ViewStyle => ({
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: theme.colors.background,
  }),
  input: (theme: CustomTheme) => ({
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  }),
};
