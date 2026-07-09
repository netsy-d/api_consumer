import React from "react";
import { useWeather } from "./hooks/useWeather";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import LoadingSpinner from "./components/LoadingSpinner";
require("./App.css");

const App: React.FC = () => {
  const { weatherData, loading, error, searchWeather } = useWeather();

  return (
    <div className="app">
      <h1>🌤️ Weather App</h1>

      <SearchBar onSearch={searchWeather} isLoading={loading} />

      {loading && <LoadingSpinner />}

      {error && (
        <div className="error">
          <p>⚠️ {error}</p>
        </div>
      )}

      {weatherData && !loading && !error && <WeatherCard data={weatherData} />}
    </div>
  );
};

export default App;
