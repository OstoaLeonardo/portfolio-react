import axios from 'axios'

const API_KEY = 'e6cdea87ed1f1c37c0d93b6cd695bc61'
const URL = 'https://api.openweathermap.org/data/2.5/weather'

export const getWeather = async (lat, lon) => {
    try {
        const response = await axios.get(URL, {
            params: {
                lat,
                lon,
                appid: API_KEY,
                units: 'metric',
            },
        })

        return response.data
    } catch (error) {
        console.error(error)
        throw error
    }
}
