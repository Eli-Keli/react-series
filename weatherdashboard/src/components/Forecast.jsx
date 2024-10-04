import { useState } from 'react';
import { useWeather } from '../context/Weather';
import { getWeatherIcon, isNightTime } from '../helper';

const Forcast = () => {
    const [activeView, setActiveView] = useState('today');
    const { forecast, loading, error } = useWeather();

    if (loading) {
        return <p className="text-xl text-gray-600 mb-6">Loading weather data...</p>;
    }
    const getForecastData = () => {
        switch (activeView) {
            case 'today':
                return forecast.list.slice(0, 8); // Assuming 3-hour intervals, 8 entries for 24 hours
            case 'tomorrow':
                return forecast.list.slice(8, 16); // Next 24 hours
            case '10days':
                return forecast.list.filter((_, index) => index % 8 === 0).slice(0, 10); // One entry per day for 10 days
            default:
                return [];
        }
    };

    const forecastData = getForecastData();

    return (
        forecast && (
            <div className="bg-white rounded-lg p-4 shadow">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Weather Focust</h2>
                </div>
                {
                    error ? <p className="text-xl text-gray-600 mb-6">Error loading forcast data</p>
                        : (
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex space-x-4">
                                    <button
                                        className={`font-semibold ${activeView === 'today' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
                                        onClick={() => setActiveView('today')}
                                    >
                                        Today
                                    </button>
                                    <button
                                        className={`font-semibold ${activeView === 'tomorrow' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
                                        onClick={() => setActiveView('tomorrow')}
                                    >
                                        Tomorrow
                                    </button>
                                    <button
                                        className={`font-semibold ${activeView === '10days' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
                                        onClick={() => setActiveView('10days')}
                                    >
                                        10 Days
                                    </button>
                                </div>
                                <button className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">See Monthly Cast</button>

                            </div>
                        )
                }

                {/* Forecast items */}
                {
                    !error && (
                        forecastData.map((item, index) => (
                            <div key={index} className="flex justify-between items-center py-2 border-t">
                              <div className="flex items-center space-x-2">
                                <span>{loading ? "..." : new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                {loading ? "..." : getWeatherIcon(item.weather[0].id, isNightTime(item.dt))}
                                <span>{loading ? "..." : item.weather[0].description}</span>
                              </div>
                              <div className="flex items-center space-x-4">
                                <span className="text-lg font-semibold">{loading ? "..." : Math.round(item.main.temp)}°C</span>
                                <div className="text-sm text-gray-600">
                                  <div>Wind: {loading ? "..." : Math.round(item.wind.speed * 3.6)} km/h</div>
                                  <div>Humidity: {loading ? "..." : item.main.humidity}%</div>
                                </div>
                              </div>
                            </div>
                    ))
                )
                }
            </div>
        )
    );
};



export default Forcast;