import './WeatherEffects.css'

import React, { useEffect, useState } from 'react'

const WeatherEffects: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [weather, setWeather] = useState<string>('')
  const [timeOfDay, setTimeOfDay] = useState<string>('day')

  // Example weather API fetch
  useEffect(() => {
    // Fetch weather data here
    fetchWeatherData() // Assume this function fetches and sets weather data
    updateTimeOfDay() // Function to set the time of day based on the current time
  }, [])

  const getIcon = (iconId: string) => `https://openweathermap.org/img/wn/${iconId}@2x.png`

  const API_KEY = 'e638703698ca5299e53d6f420a0be2e5'
  const CITY = 'Medford,OR'
  const fetchWeatherData = async () => {
    // Example of using a weather API
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`,
    )
    const data = await response.json()
    console.log(data)
    setWeather(data.weather[0].main) // Set the weather condition (e.g., "Rain", "Clouds", etc.)
  }

  const updateTimeOfDay = () => {
    const currentHour = new Date().getHours()
    if (currentHour >= 6 && currentHour < 12) {
      setTimeOfDay('morning')
    } else if (currentHour >= 12 && currentHour < 18) {
      setTimeOfDay('afternoon')
    } else if (currentHour >= 18 && currentHour < 21) {
      setTimeOfDay('sunset')
    } else {
      setTimeOfDay('night')
    }
  }

  return (
    <div className={`weather-container ${weather.toLowerCase()} ${timeOfDay}`}>
      <div className="content">{children}</div>
    </div>
  )
}

export default WeatherEffects
