import { useState } from 'react';
import { WeatherData } from '../types/weather.types';
import { fetchWeather } from '../services/weather.service';

export const useWeather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const searchWeather = async (city: string) => {
    setLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const data = await fetchWeather(city);
      setWeatherData(data);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return {
    weatherData,
    loading,
    error,
    searchWeather,
  };
};