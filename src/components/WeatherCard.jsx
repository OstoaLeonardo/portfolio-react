import React, { useEffect, useState } from 'react'
import { getWeather } from '../scripts/openWeather.js'
import { WeatherWidget } from './WeatherWidget.jsx'

export function WeatherCard() {
    const lat = '20.117'
    const lon = '-98.7333'
    const urlIcon = 'https://openweathermap.org/img/wn/'
    const [temperature, setTemperature] = useState('')
    const [weather, setWeather] = useState('')
    const [place, setPlace] = useState('')
    const [icon, setIcon] = useState(urlIcon + '10d@2x.png')
    const [isNight, setIsNight] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await getWeather(lat, lon)

            const celsius = Math.round(response.main.temp)
            const formattedTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })

            setTemperature(celsius + '°C')
            setWeather(response.weather[0].description)
            setPlace(response.name + ', ' + response.sys.country)
            setIcon(urlIcon + response.weather[0].icon + '@2x.png')

            setWidget(formattedTime)
        } catch (error) {
            console.error('Error al obtener datos climáticos:', error)
        }
    }

    const setWidget = (time) => {
        const hours = time.split(':')[0]

        if (hours >= 19 || hours <= 5) {
            setIsNight(true)
        } else {
            setIsNight(false)
        }
    }

    const textColorClass = isNight ? 'text-slate-100' : 'text-slate-700'

    return (
        <div className='relative flex items-center col-span-2 md:aspect-auto rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-700 dark:bg-slate-900'>
            <WeatherWidget isNight={isNight} />
            <div className='absolute flex flex-col p-4 sm:p-6 md:p-10 md:gap-1 z-50'>
                <div className='flex flex-row items-center gap-1'>
                    <p className={`text-3xl xl:text-7xl md:text-5xl sm:text-4xl font-bold ${textColorClass}`}>
                        {temperature}
                    </p>
                    <img className='w-10 h-10 xl:w-24 xl:h-24' src={icon} alt='weather icon' />
                </div>
                <p className={`text-sm xl:text-3xl md:text-xl sm:text-xl font-bold ${textColorClass} capitalize`}>
                    {weather}
                </p>
                <p className={`hidden sm:flex text-xs xl:text-2xl md:text-lg sm:text-lg font-semibold ${textColorClass}`}>
                    {place}
                </p>
            </div>
        </div>
    )
}
