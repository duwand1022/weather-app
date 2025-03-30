export interface WeatherRequest {
  city: string;
  country?: string;
}

export interface WeatherResponse {
  city: string;
  country: string;
  temperature: number;
  humidity: number;
  condition: string;
  icon: string;
}
