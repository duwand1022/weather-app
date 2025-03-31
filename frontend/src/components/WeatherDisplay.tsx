import { WeatherResponse } from "../types";

export const WeatherDisplay = ({ weather }: { weather: WeatherResponse | null }) => {
  if (!weather) return null;

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
      <h2 style={{ marginTop: 0 }}>
        Weather in {weather.city}, {weather.country}
      </h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div>
          <img
            src={`https://${weather.icon}`}
            alt={weather.condition}
            style={{ width: '100px', height: '100px' }}
          />
        </div>
        <div>
          <p style={{ fontSize: '24px', margin: '0 0 10px 0' }}>
            {weather.temperature}°C
          </p>
          <p style={{ margin: '0 0 10px 0' }}>Humidity: {weather.humidity}%</p>
          <p style={{ margin: '0 0 10px 0' }}>Condition: {weather.condition}</p>
        </div>
      </div>
    </div>
  );
};
