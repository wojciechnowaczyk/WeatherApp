export type Weather = {
    city: string;
    temperature: Number;
    temperatureMin: Number;
    temperatureMax: Number;
    weatherDetails: WeatherDetails;
}

type WeatherDetails = {
    description: string;
    icon: string;
    id: string;
    main: string;
}

export type TempUnits = 'C' | 'F';
