import {useWeather} from "../context/Weather"


const CurrentWeather = () => {
    const { currentWeather, loading, error } = useWeather();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!currentWeather) return null;
    
    return (
        <div className="col-span-2 bg-white rounded-lg p-4 shadow">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Current Weather</h2>
            </div>
            <div className="flex items-center space-x-4">
                <div className="text-6xl font-bold">{currentWeather.main.temp}<sup className="text-gray-500 text-md">°C</sup></div>
                <div>
                    <div className="text-xl">{currentWeather.weather[0].main}</div>
                    <div className="text-sm text-gray-600">Feels like {currentWeather.main.feels_like}°C</div>
                </div>
            </div>
            <p className="mt-4 text-sm text-gray-600"></p>
        </div>
    )
}

export default CurrentWeather