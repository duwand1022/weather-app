import { useState } from 'react';

interface FilterFormProps {
  onSubmit: (city: string, country?: string) => void;
}

export const FilterForm = ({ onSubmit }: FilterFormProps) => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(city, country);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="city" style={{ display: 'block', marginBottom: '5px' }}>
          City (required):
        </label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
          style={{ padding: '8px', width: '200px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="country" style={{ display: 'block', marginBottom: '5px' }}>
          Country (optional):
        </label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          style={{ padding: '8px', width: '200px' }}
        />
      </div>
      <button type="submit">
        Get Weather
      </button>
    </form>
  );
};
