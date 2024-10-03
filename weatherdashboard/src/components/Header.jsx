import { Bell, ChevronDown, MapPin, Search, Settings } from "lucide-react"
import { useState } from "react";
import { useWeather } from "../context/Weather";


const Header = () => {
    const [searchCity, setSearchCity] = useState('');
    const { setCity, currentWeather, loading, error } = useWeather();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchCity.trim()) {
            setCity(searchCity);
            setSearchCity('');
        }
    };

    return (
        currentWeather && (
            <header className="flex items-center justify-between mb-4 p-4 bg-white rounded-lg">
                <div className="flex items-center space-x-6">
                    <h1 className="text-blue-500 text-2xl font-bold">SkyCast</h1>
                    {
                        error ? <p className="text-md text-gray-600">Not Found</p>
                        : (
                            <div className="flex items-center space-x-2 text-gray-600">
                                <MapPin />
                                {
                                    loading ? <span>serching..</span> : <span>{currentWeather.name}, {currentWeather.sys.country}</span>
                                }
                            </div>
                        )
                    }
                    <form onSubmit={handleSubmit} className="relative">
                        <input
                            type="text"
                            placeholder="Search Location"
                            className="pl-8 pr-2 py-1 rounded-full border border-gray-300"
                            value={searchCity}
                            onChange={(e) => setSearchCity(e.target.value)}
                        />
                        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    </form>
                </div>
                <div className="flex items-center space-x-4">
                    <Bell className="text-gray-600 w-5 h-5 cursor-pointer" />
                    <Settings className="text-gray-600 w-5 h-5 cursor-pointer" />
                    <div className="flex items-center space-x-1 cursor-pointer">
                        <img src="https://via.placeholder.com/150" alt="User" className="w-8 h-8 rounded-full" />
                        <span>User</span>
                        <ChevronDown className="w-4 h-4" />
                    </div>
                </div>
            </header>
        )
    )
}

export default Header