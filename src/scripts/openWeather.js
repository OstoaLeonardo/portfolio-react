const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY
const endPoint = 'https://api.openweathermap.org/data/2.5/weather'

export const getWeather = async (lat, lon) => {
    const params = new URLSearchParams({
        lat,
        lon,
        appid: API_KEY,
        units: 'metric',
    })

    const url = `${endPoint}?${params}`

    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}
