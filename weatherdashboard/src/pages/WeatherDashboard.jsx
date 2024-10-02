/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import CurrentWeather from '../components/CurrentWeather'
import Forecast from '../components/Forecast'
import WeatherInfo from '../components/WeatherInfo'
import WeatherSummary from '../components/WeatherSummary'



function WeatherDashboard() {

    return (
        <div className="bg-gray-100 p-4 font-sans h-screen">
            <Header />
            {/* Main content */}
            <div className="grid grid-cols-3 gap-4">
                <CurrentWeather />
                <Forecast />
            </div>
            <WeatherInfo />
            <WeatherSummary />
        </div>
    )
}

export default WeatherDashboard