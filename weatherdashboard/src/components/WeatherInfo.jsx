import { Droplets, Eye, Gauge, Wind } from "lucide-react"



const WeatherInfo = () => {
    return (
        <div className="grid grid-cols-6 gap-4 mt-4">
            <div className="bg-white rounded-lg p-4 shadow flex flex-col items-center">
                <div className="flex items-center space-x-2 text-gray-600 mb-2">
                    <Wind />
                    <span>Temperature</span>
                    <h4>{}</h4>
                </div>
                <div className="text-xl font-semibold"></div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow flex flex-col items-center">
                <div className="flex items-center space-x-2 text-gray-600 mb-2">
                    <Wind />
                    <span>Wind</span>
                    <h4></h4>
                </div>
                <div className="text-xl font-semibold"></div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow flex flex-col items-center">
                <div className="flex items-center space-x-2 text-gray-600 mb-2">
                    <Droplets />
                    <span>Humidity</span>
                </div>
                <div className="text-xl font-semibold"></div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow flex flex-col items-center">
                <div className="flex items-center space-x-2 text-gray-600 mb-2">
                    <Eye />
                    <span>Visibility</span>
                </div>
                <div className="text-xl font-semibold"></div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow flex flex-col items-center">
                <div className="flex items-center space-x-2 text-gray-600 mb-2">
                    <Gauge />
                    <span>Pressure</span>
                </div>
                <div className="text-xl font-semibold"></div>
            </div>

        </div>
    )
}

export default WeatherInfo