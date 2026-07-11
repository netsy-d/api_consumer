import React from 'react';
import { WeatherData } from '../types/weather.types';

interface WeatherCardProps {
  data: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  const icon = data.weather[0]?.icon || '01d';
  const description = data.weather[0]?.description || '';

  return (
    <div className="weather-card">
      <h2>
        {data.name}, {data.sys.country}
      </h2>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <div className="temp">{Math.round(data.main.temp)}°C</div>
      <div className="description">{description}</div>
      <div className="details">
        <p>Feels like: {Math.round(data.main.feels_like)}°C</p>
        <p>Humidity: {data.main.humidity}%</p>
        <p>Wind: {Math.round(data.wind.speed)} m/s</p>
      </div>
    </div>
  );
};

export default WeatherCard;