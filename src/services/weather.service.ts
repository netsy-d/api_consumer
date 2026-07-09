import { WeatherData } from '../types/weather.types';

const API_KEY = '1234a3a02d3d98211ad313fe78169f9a';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  const url = `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
  
  const response = await fetch(url);
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'City not found');
  }
  
  const data: WeatherData = await response.json();
  return data;
};