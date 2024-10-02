
import { WeatherProvider } from './context/Weather';
import WeatherDashboard from './pages/WeatherDashboard';

function App() {
  return (
    <WeatherProvider>
      <WeatherDashboard />
    </WeatherProvider>
  );
}

export default App;