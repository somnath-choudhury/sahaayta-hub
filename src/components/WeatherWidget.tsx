import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface WeatherProps {
  city: string;
}

interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
}

const Weather: React.FC<WeatherProps> = ({ city }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>('');

  const API_KEY = '3d2cfe3321fd3114acdb62953fb92cde';

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get<WeatherData>(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        setWeather(response.data);
      } catch (error) {
        setError('City not found. Please enter a valid city.');
      }
    };

    fetchWeather();
  }, [city]);

  if (error) {
    return <p className="text-red-500 text-center mt-4">{error}</p>;
  }

  return (
    <div className="bg-gray-900 rounded-lg mx-auto fixed bottom-0 z-10 ">
      {weather ? (
        <div className='flex gap-6 w-auto justify-evenly items-center '>
            <img
              className="w-16 h-16"
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
              <h2 className="text-3xl font-semibold text-white text-center">{weather.name}, {weather.sys.country}</h2>
              <p className="text-xl text-white">{weather.weather[0].description}</p>
            <div className="p-4 bg-slate-900 rounded-lg shadow-sm">
              <p className="text-lg font-medium">Temperature</p>
              <p className="text-xl">{weather.main.temp} °C</p>
            </div> 
            <div className="p-4 bg-slate-900 rounded-lg shadow-sm">
              <p className="text-lg font-medium">Humidity</p>
              <p className="text-xl">{weather.main.humidity} %</p>
            </div>
            <div className="p-4 bg-slate-900 rounded-lg shadow-sm">
              <p className="text-lg font-medium">Pressure</p>
              <p className="text-xl">{weather.main.pressure} hPa</p>
            </div>
          
        </div>
      ) : (
        <p className="text-lg text-center">Loading...</p>
      )}
    </div>
  );
};

export default Weather;
