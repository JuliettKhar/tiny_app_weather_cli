
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";
import axios from "axios";

const getWeather = async (city) => {
    const token = await getKeyValue(TOKEN_DICTIONARY.token)

    if (!token) {
       throw new Error('Не задан ключ API, задайте через команду -t [API_KEY]')
    }
    try {
        const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: city,
                appid: token,
                lang: 'ru',
                units: 'metric'
            }
        });
         console.log(data)
    } catch (e) {
        console.log(e)
    }
}

export { getWeather };