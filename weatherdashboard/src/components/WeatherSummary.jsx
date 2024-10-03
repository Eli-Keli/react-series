import { useWeather } from "../context/Weather";
import { convertUnixToNormalTime } from "../helper";

import { WiSunrise, WiSunset } from "weather-icons-react"

const WeatherSummary = () => {
    const { currentWeather, loading, error } = useWeather();

    return (
        currentWeather && (
            <div className="bg-white rounded-lg p-6 shadow-md mt-6">
                <h2 className="text-lg font-semibold mb-4">Sun & Moon Summary</h2>
                <div className="flex justify-between">
                    <div className="flex items-center space-x-2">
                        <WiSunrise size={40} className="text-yellow-500" />
                        {
                            error ? <p className="text-md text-gray-600">Not Found</p>
                                : (
                                    <div>
                                        <div className="text-sm font-semibold">Sunrise</div>
                                        <div className="text-lg">{loading ? "..." : currentWeather.name}</div>
                                        <div className="font-semibold">{loading ? "..." : convertUnixToNormalTime(currentWeather.sys.sunrise)} A.M</div>
                                    </div>
                                )
                        }

                    </div>
                    <div className="flex items-center space-x-2">
                        <WiSunset size={40} className="text-yellow-300" />
                        {
                            error? <p className="text-md text-gray-600">Not Found</p>
                                : (
                                    <div>
                                        <div className="text-sm font-semibold">Sunset</div>
                                        <div className="text-lg">{loading? "..." : currentWeather.name}</div>
                                        <div className="font-semibold">{loading? "..." : convertUnixToNormalTime(currentWeather.sys.sunset)} P.M</div>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>
        )
    )
}

export default WeatherSummary