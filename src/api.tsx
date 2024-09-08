import {WEATHER_API_KEY} from '@env';
import {TempUnits, Weather} from './models/weather';

const apiKey = WEATHER_API_KEY;

type Metric = 'metric' | 'imperial';

export async function getWeatherByCity(city: string, tempUnit: TempUnits) {
  const convertUnits = (): Metric => {
    return tempUnit === 'C' ? 'metric' : 'imperial';
  };
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${convertUnits()}&appid=${apiKey}`,
    );

    const data = await response.json();

    if (!data?.main || !data?.weather || !Array.isArray(data.weather)) {
      throw new Error('Invalid data format');
    }

    const weather: Weather = {
      city: city,
      temperature: data.main.temp,
      temperatureMin: data.main.temp_min,
      temperatureMax: data.main.temp_max,
      weatherDetails: {
        description: data.weather[0]?.description,
        icon: data.weather[0]?.icon,
        id: data.weather[0]?.id,
        main: data.weather[0]?.main,
      },
    };

    return weather;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error fetching weather data:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    return null;
  }
}
