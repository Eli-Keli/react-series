import { Droplets, Eye, Gauge, Wind } from "lucide-react"
import { useWeather } from "../context/Weather"


const WeatherInfo = () => {
    const { currentWeather, loading, error } = useWeather();

    return (
        currentWeather && (
            <div className="grid grid-cols-6 gap-4 mt-4">
                <div className="bg-white rounded-lg p-4 shadow flex flex-col items-center hover:bg-gray-100">
                    <div className="flex items-center space-x-2 text-gray-600 font-semibold mb-2">
                        <Wind />
                        <span>Temperature</span>
                    </div>
                    {
                        error ? <p className="text-md text-gray-600">Not Found</p>
                            : (
                                <div className="text-3xl font-semibold">{loading ? "..." : currentWeather.main.temp} °C</div>
                            )
                    }
                </div>
                <div className="bg-white rounded-lg p-4 shadow flex flex-col items-center hover:bg-gray-100">
                    <div className="flex items-center space-x-2 text-gray-600 font-semibold mb-2">
                        <Wind />
                        <span>Wind Speed</span>
                    </div>
                    {
                        error ? <p className="text-md text-gray-600">Not Found</p>
                            : (
                                <div className="text-3xl font-semibold">{loading ? "..." : currentWeather.wind.speed} m/s</div>
                            )
                    }
                </div>
                <div className="bg-white rounded-lg p-4 shadow flex flex-col items-center hover:bg-gray-100">
                    <div className="flex items-center space-x-2 text-gray-600 font-semibold mb-2">
                        <Droplets />
                        <span>Humidity</span>
                    </div>
                    {
                        error ? <p className="text-md text-gray-600">Not Found</p>
                            : (
                                <div className="text-3xl font-semibold">{loading ? "..." : currentWeather.main.humidity}%</div>
                            )
                    }
                </div>
                <div className="bg-white rounded-lg p-4 shadow flex flex-col items-center hover:bg-gray-50">
                    <div className="flex items-center space-x-2 text-gray-600 font-semibold mb-2">
                        <Eye />
                        <span>Visibility</span>
                    </div>
                    {
                        error? <p className="text-md text-gray-600">Not Found</p>
                            : (
                                <div className="text-3xl font-semibold">{loading ? "..." : (currentWeather.visibility) / 1000} km</div>
                            )
                    }
                </div>
                <div className="bg-white rounded-lg p-4 shadow flex flex-col items-center hover:bg-gray-100">
                    <div className="flex items-center space-x-2 text-gray-600 mb-2">
                        <Gauge />
                        <span>Pressure</span>
                    </div>
                    {
                        error? <p className="text-md text-gray-600">Not Found</p>
                            : (
                                <div className="text-3xl font-semibold">{loading? "..." : currentWeather.main.pressure} hPa</div>
                            )
                    }
                </div>

            </div>
        )
    )
}

export default WeatherInfo