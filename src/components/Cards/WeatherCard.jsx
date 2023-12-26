import React, { useEffect, useState } from 'react'
import { WeatherWidget } from './WeatherWidget.jsx'
import { BorderCard } from '../Card'
import { useLanguage } from '../../hooks'
import { strings } from '../../constants'
import { getWeather } from '../../scripts'

export function WeatherCard() {
    const lat = '20.117'
    const lon = '-98.7333'
    const urlIcon = 'https://openweathermap.org/img/wn/'
    const { language } = useLanguage()
    const [temperature, setTemperature] = useState('')
    const [weather, setWeather] = useState('')
    const [icon, setIcon] = useState(urlIcon + '10d@2x.png')
    const [isNight, setIsNight] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const data = await getWeather(lat, lon, language)

            const celsius = Math.round(data.main.temp)
            const formattedTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })

            setTemperature(celsius + '°C')
            setWeather(data.weather[0].description)
            setIcon(urlIcon + data.weather[0].icon + '@2x.png')
            setWidget(formattedTime)
        }

        fetchData()
    }, [language])

    const setWidget = (time) => {
        const hours = time.split(':')[0]

        if (hours >= 19 || hours <= 5) {
            setIsNight(true)
        } else {
            setIsNight(false)
        }
    }

    const textColorClass = isNight ? 'text-neutral-100' : 'text-neutral-900'

    return (
        <BorderCard
        size='medium'
        title={strings[language].weatherCard.title}
        subtitle={temperature}
        >
            <div className='relative w-full h-full flex items-center'>
                <WeatherWidget isNight={isNight} />
                <div className='absolute flex flex-col p-4 sm:p-6 md:p-10 md:gap-1 z-50'>
                    <div className='flex flex-row items-center gap-1'>
                        <span className={`text-3xl sm:text-4xl md:text-5xl xl:text-8xl font-archivo-black  ${textColorClass}`}>
                            {temperature}
                        </span>
                        <img className='w-10 h-10 xl:w-24 xl:h-24' src={icon} alt='weather icon' />
                    </div>
                    <span className={`text-sm sm:text-xl md:text-xl xl:text-3xl font-oswald uppercase ${textColorClass}`}>
                        {weather}
                    </span>
                </div>
            </div>
        </BorderCard>
    )
}
