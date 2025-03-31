import { useState, useEffect } from 'react';
import { FilterForm } from './components/FilterForm';
import { WeatherDisplay } from './components/WeatherDisplay';
import { HistoryList } from './components/HistoryList';
import { WeatherResponse } from './types';

export const App = () => {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [history, setHistory] = useState<Array<{ city: string; country?: string }>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async (city: string, country?: string) => {
    setLoading(true);
    setError('');

    try {
      const query = country ? `?city=${city}&country=${country}` : `?city=${city}`;
      const response = await fetch(`${import.meta.env.VITE_API_URL}/weather${query}`);

      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  const fetchHistory = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/history`);
      const data = await response.json();
      setHistory(data);
    } catch (err) {
      console.error('Failed to fetch history', err);
    }
  };

  const handleSubmit = (city: string, country?: string) => {
    fetchWeather(city, country);
  };

  const handleHistorySelect = (city: string, country?: string) => {
    fetchWeather(city, country);
  };

  useEffect(() => {
    fetchHistory();
  }, [weather]); // Refresh history when weather data changes

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Weather Information</h1>

      <FilterForm onSubmit={handleSubmit} />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <WeatherDisplay weather={weather} />

      <HistoryList history={history} onSelect={handleHistorySelect} />
    </div>
  );
};
