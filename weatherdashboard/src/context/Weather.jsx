/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from 'react';
import { fetchCurrentWeather, fetchForecast } from '../api/api';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('Nairobi'); // Default city

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        const [currentData, forecastData] = await Promise.all([
          fetchCurrentWeather(city),
          fetchForecast(city)
        ]);
        setCurrentWeather(currentData);
        setForecast(forecastData);
        setError(null);
      } catch (error) {
        setError('Failed to fetch weather data');
        throw error
      } finally {
        setLoading(false);
      }
    }

    fetchWeatherData();
  }, [city]);

  return (
    <WeatherContext.Provider value={{ currentWeather, forecast, loading, error, city, setCity }}>
      {children}
    </WeatherContext.Provider>
  );
};

// useWeather hook
export const useWeather = () => useContext(WeatherContext)