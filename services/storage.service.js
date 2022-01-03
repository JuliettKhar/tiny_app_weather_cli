import {homedir} from 'os';
import {join} from 'path';
import {promises} from 'fs'

const filePath = join(homedir(), 'weather-data.json');
const TOKEN_DICTIONARY = {
    token: 'token',
    city: 'city'
}

const saveKeyValue = async (key, val) => {
    let data = {};
    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath);
        data = JSON.parse(file)
    }
    data[key] = val;

   await  promises.writeFile(filePath, JSON.stringify(data))
}

const getWeatherConfig = async () => {
    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath);
        return JSON.parse(file)
    }

    return undefined
}

const isExist = async (path) => {
    try {
        await promises.stat(path)
        return true
    } catch (e) {
        return false
    }
}

export { saveKeyValue, getWeatherConfig, TOKEN_DICTIONARY }