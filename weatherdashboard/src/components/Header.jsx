import { Bell, ChevronDown, MapPin, Search, Settings } from "lucide-react"
import { api } from "../api/api";
import { useState } from "react";
import useWeather from "../context/Weather";



const Header = () => {
    const [location, setLocation] = useState("");
    const [weather, setWeather] = useState({});

    const {city, setCity} = useWeather()

    const searchLocation = async (e) => {
        if (e.key === "Enter") {
            const response = await fetch(`${api.base}weather?q=${location}&units=metric&APPID=${api.key}`)
            const data = await response.json()
            if (response.ok) {
                console.log(data);
                setWeather(data);
            }
            setCity(weather.name)
            console.log(city);
            setLocation("");
        }
    };


    return (
        <header className="flex items-center justify-between mb-4 p-4 bg-white rounded-lg">
            <div className="flex items-center space-x-6">
                <h1 className="text-blue-500 text-2xl font-bold">SkyCast</h1>
                <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin />
                    <span>{weather.name}</span>
                </div>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search Location"
                        className="pl-8 pr-2 py-1 rounded-full border border-gray-300"
                        onKeyDown={searchLocation}
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>
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
}

export default Header