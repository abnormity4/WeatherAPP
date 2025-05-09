export interface WeatherDataType {
    air: {
        aqi: number;
        co: number;
        nh3: number;
        no: number;
        no2: number;
        o3: number;
        pm2_5: number;
        pm10: number;
        so2: number;
    },
    country: string;
    description: string;
    humidity: number;
    icon: string;
    id: number;
    name: string;
    sunrise: string;
    sunset: string;
    temp: number;
    temp_feelslike: number;
    wind_speed: number;
};