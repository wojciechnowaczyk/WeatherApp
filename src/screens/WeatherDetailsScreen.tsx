import {View, ViewStyle} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../models/navigation';
import {locales} from '../locales';
import {Text, useTheme} from '@rneui/themed';
import {CustomButton} from '../components/CustomButton';
import {Weather} from '../models/weather';
import {Row} from '../components/Row';
import {useTemperatureUnits} from '../hooks/useTemperatureUnits';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'Weather Details Screen'
>;

export const WeatherDetailsScreen: React.FC<Props> = ({route, navigation}) => {
  const {theme} = useTheme();

  const {temperatureUnit} = useTemperatureUnits();

  const weather: Weather = route.params.weatherData;

  return (
    <View style={styles.container(theme)}>
      <CustomButton
        title={locales.BACK}
        onPress={async () => navigation.goBack()}
      />
      <Text h2>
        {weather?.city + ' ' + weather?.temperature + ' ' + temperatureUnit}
      </Text>
      <Row icon="cloud" description={weather?.weatherDetails?.description} />
      <Row
        icon="thermometer-full"
        description={
          weather?.temperatureMin +
          ' - ' +
          weather?.temperatureMax +
          ' ' +
          temperatureUnit
        }
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
    padding: 20,
  }),
};
