
const WeatherSummary = () => {
    return (
        <div className="bg-white rounded-lg p-6 shadow-md mt-6">
            <h2 className="text-lg font-semibold mb-4">Sun & Moon Summary</h2>
            <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">☀️</span>
                    <div>
                        <div className="text-sm font-semibold">Air Quality</div>
                        <div className="text-lg">156</div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-sm text-gray-600">Sunrise</div>
                    <div className="font-semibold">5:43AM</div>
                </div>
            </div>
        </div>
    )
}

export default WeatherSummary