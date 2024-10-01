
import useWeather, { WeatherProvider } from './context/Weather'
import WeatherDashboard from './pages/WeatherDashboard'

function App() {


  const city = useWeather()



  return (
    <WeatherProvider value={city}>
      <WeatherDashboard weather={city} />
    </WeatherProvider>
  )
}

export default App