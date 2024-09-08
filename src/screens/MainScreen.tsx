import {View, ViewStyle} from 'react-native';
import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../models/navigation';
import {CustomButton} from '../components/CustomButton';
import {Text, useTheme, Input, Button} from '@rneui/themed';
import {locales} from '../locales';
import {CustomTheme} from '../models/theme';
import {getWeatherByCity} from '../api';
import {OutlinedButton} from '../components/OutlinedButton';
import {useTemperatureUnits} from '../hooks/useTemperatureUnits';

type Props = NativeStackScreenProps<RootStackParamList, 'Main Screen'>;

export const MainScreen: React.FC<Props> = ({navigation}) => {
  const {theme} = useTheme();

  const {setTemperatureUnit, temperatureUnit} = useTemperatureUnits();

  const handleNextBtn = () => {
    getWeatherByCity('Warsaw', temperatureUnit).then(weatherData => {
      if (weatherData) {
        navigation.navigate('Weather Details Screen', {
          weatherData,
        });
      }
    });
  };
  useEffect(() => {
    console.log(temperatureUnit);
  }, [temperatureUnit]);
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
      <CustomButton title={locales.NEXT} onPress={handleNextBtn} />
      <CustomButton
        title={locales.ADD_AS_FAVOURITE}
        onPress={async () => navigation.navigate('Weather Details Screen')}
      />
      <View style={styles.row}>
        <Text>{locales.SET_TEMP_UNITS}</Text>
        <OutlinedButton
          title={locales.TEMP_UNIT_C}
          onPress={() => setTemperatureUnit('C')}
        />
        <OutlinedButton
          title={locales.TEMP_UNIT_F}
          onPress={() => setTemperatureUnit('F')}
        />
      </View>
    </View>
  );
};

const styles = {
  container: (theme: {colors: {background: string}}): ViewStyle => ({
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 20,
  }),
  input: (theme: CustomTheme) => ({
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  }),
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
};
