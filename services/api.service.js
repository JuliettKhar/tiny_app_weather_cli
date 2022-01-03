import { getWeatherConfig } from "./storage.service.js";
import axios from "axios";

const getWeather = async () => {
    const {token, city} = await getWeatherConfig()

    if (!token) {
        throw new Error('Не задан ключ API, задайте через команду -t [API_KEY]')
    }
    if (!city) {
        throw new Error('Не задан город, задайте через команду -s [CITY]')
    }

    const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'ru',
            units: 'metric'
        }
    });

    return data
}

export {getWeather};