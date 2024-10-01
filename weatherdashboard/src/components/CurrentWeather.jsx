import { ChevronDown } from "lucide-react"


const CurrentWeather = () => {
    return (
        <div className="col-span-2 bg-white rounded-lg p-4 shadow">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Current Weather</h2>
                <button className="flex items-center text-sm text-gray-600">
                    Forenheight <ChevronDown className="w-4 h-4 ml-1" />
                </button>
            </div>
            {/* <div className="flex items-center space-x-4">
                <div className="text-6xl font-bold">12<sup className="text-gray-500 text-md">°F</sup></div>
                <div>
                    <div className="text-xl">Rainy</div>
                    <div className="text-sm text-gray-600">Feels Like 35°</div>
                </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">There will be mostly sunny skies. The high will be 35°</p> */}
        </div>
    )
}

export default CurrentWeather