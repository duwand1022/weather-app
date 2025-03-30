import { Request, Response, Router } from "express";
import axios from "axios";
import { WeatherRequest } from "../types";

const router = Router();
const API_KEY = "06c9b522039d4f64a24192301252903";
export const weatherHistory: WeatherRequest[] = [];

router.get("/", async (req: Request, res: Response) => {
  const { city, country } = req.query;

  if (!city) {
    return res.status(400).json({ error: "City is required" });
  }

  try {
    const query = country ? `${city},${country}` : city;
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=06c9b522039d4f64a24192301252903&q=${city}&aqi=no`
    );
    console.log("respones->", response.data);
    const weatherData = {
      city: response.data.location.name,
      country: response.data.location.country,
      temperature: response.data.current.temp_c,
      humidity: response.data.current.humidity,
      condition: response.data.current.condition.text,
      icon: response.data.current.condition.icon,
    };

    weatherHistory.push({ city: city as string, country: country as string });

    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

export default router;
