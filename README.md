# This is a React application that provides weather information based on city and country

## Frontend (React, Typescript)

- Filter form with inputs for city (required) and country (optional)
- Weather information including temperature, humidity, and condition icon
- Filter history retrieved from the backend

## Backend (Node, Express, Typescript) \*\*

- /weather endpoint that accepts city and country query parameters
- Call a public weather API (WeatherAPI) with the received filters
- Return relevant weather data to the frontend
- Submitted filters in an in-memory array (no database)
- /history endpoint that returns the in-memory filter history
