import {FlatList, View, ViewStyle} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../models/navigation';
import {CustomButton} from '../components/CustomButton';
import {Text, useTheme, Input, Button} from '@rneui/themed';
import {locales} from '../locales';
import {getWeatherByCity} from '../api';
import {OutlinedButton} from '../components/OutlinedButton';
import {useTemperatureUnits} from '../hooks/useTemperatureUnits';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useErrors} from '../hooks/useErrors';
import {CustomInput} from '../components/CustomInput';

type Props = NativeStackScreenProps<RootStackParamList, 'Main Screen'>;

export const MainScreen: React.FC<Props> = ({navigation}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [favouriteCities, setFavouriteCities] = useState<string[]>([]);

  const {theme} = useTheme();

  const {setTemperatureUnit, temperatureUnit} = useTemperatureUnits();
  const {setErrorMessage, toggleErrorsBox} = useErrors();

  useEffect(() => {
    const getDataFromStorage = async () => {
      try {
        const value = await AsyncStorage.getItem('favCities');
        if (value !== null) {
          const convertedData = JSON.parse(value);
          setFavouriteCities(convertedData);
        }
      } catch (e) {
        console.error('There were no favourite cities found in the storage');
      }
    };
    getDataFromStorage();
  }, []);

  const saveCitiesInStorage = async (updatedCities: string[]) => {
    try {
      const parsedValue = JSON.stringify(updatedCities);
      await AsyncStorage.setItem('favCities', parsedValue);
    } catch (e) {
      console.error(
        'There were an error while setting item in async storage' + e,
      );
    }
  };

  const handleNextBtn = (city?: string) => {
    const cityToSend = city ? city : inputValue;
    getWeatherByCity(cityToSend, temperatureUnit).then(weatherData => {
      if (weatherData) {
        navigation.navigate('Weather Details Screen', {
          weatherData,
        });
      }
    });
  };

  const handleAddFavouritesBtn = () => {
    if (!favouriteCities.includes(inputValue)) {
      getWeatherByCity(inputValue, temperatureUnit).then(weatherData => {
        if (weatherData) {
          const updatedCities = [...favouriteCities, inputValue];
          setFavouriteCities(updatedCities);
          saveCitiesInStorage(updatedCities);
        } else {
          setErrorMessage(
            'There is no such a city as: ' +
              inputValue +
              '. Please type a valid city name',
          );
          toggleErrorsBox();
        }
      });
    } else {
      setErrorMessage(locales.CITY_ALREADY_EXISTS);
      toggleErrorsBox();
    }
  };

  const removeFavCity = (cityToRemove: string) => {
    const updatedCities = favouriteCities.filter(city => city !== cityToRemove);
    setFavouriteCities(updatedCities);
    saveCitiesInStorage(updatedCities);
  };

  const renderFavCities = ({item}) => (
    <View style={styles.listItem}>
      <Button
        containerStyle={{
          width: 100,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        title={item}
        type="clear"
        titleStyle={{color: theme.colors.secondary}}
        onPress={() => handleNextBtn(item)}
      />
      <OutlinedButton title="X" onPress={() => removeFavCity(item)} />
    </View>
  );

  return (
    <View style={styles.container(theme)}>
      <Text h2>{locales.APP_TITLE}</Text>
      <Text>{locales.PLEASE_ENTER_A_CITY}</Text>
      <CustomInput inputValue={inputValue} setInputValue={setInputValue} />
      <CustomButton title={locales.NEXT} onPress={() => handleNextBtn()} />
      <CustomButton
        title={locales.ADD_AS_FAVOURITE}
        onPress={handleAddFavouritesBtn}
      />
      <Text h3>{locales.FAVOURITE_CITIES}</Text>
      <FlatList
        data={favouriteCities}
        keyExtractor={index => index.toString()}
        renderItem={renderFavCities}
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
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
