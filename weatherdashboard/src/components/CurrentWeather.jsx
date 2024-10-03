
import { useWeather } from "../context/Weather"


const CurrentWeather = () => {
    const { currentWeather, loading, error } = useWeather();

    return (
        currentWeather && (
            <div className="col-span-2 bg-white rounded-lg p-4 shadow">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Current Weather</h2>
                </div>
                {
                    error ? <p className="text-xl text-gray-600 mb-6">{error}</p>
                        : (
                            <div className="flex items-center space-x-4">
                                <div className="text-6xl font-bold">
                                    {loading ? "..." : currentWeather.main.temp}
                                    <sup className="text-gray-500 text-md">°C</sup></div>
                                <div>
                                    <div className="text-xl">{loading ? "seaching..." : currentWeather.weather[0].main}</div>
                                    <div className="text-sm text-gray-600">
                                        Feels like {loading ? "..." : currentWeather.main.feels_like}°C
                                    </div>
                                </div>
                                <p className="mt-4 text-sm text-gray-600"></p>
                            </div>
                        )
                }
            </div>
        )

    )
}

export default CurrentWeather