export type Weather = {
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