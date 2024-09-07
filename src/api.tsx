import {WEATHER_API_KEY} from '@env';
import {Weather} from './models/weather';

const apiKey = WEATHER_API_KEY;
console.log(apiKey);

export async function getWeatherByCity(city: string) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
  );
  const data = await response.json();

  const weather: Weather = {
    temperatureMin: data.temp_min,
    temperatureMax: data.temp_max,
    weatherDetails: {
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      id: data.weather[0].id,
      main: data.weather[0].main,
    },
  };
  return weather;
}
