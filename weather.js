#!/usr/bin/env node
import { getArgs } from './helpers/args.js'
import {printHelp, printSuccess, printError, printWeatherForecast} from "./services/log.service.js";
import {saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";
import {getWeather} from "./services/api.service.js";

const saveConfigFields = async (key, field) => {
      if (!field.length) {
        printError('Ключ не передан')
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY[key], field ) ;
        printSuccess('Ключ сохранен');
    } catch (e) {
        printError(e.message)
    }
}

const getForecast = async () => {
    try {
      const weather = await getWeather()
        console.log(weather)
        printWeatherForecast(weather)
    } catch (e) {
        if (e?.response?.status === 404) {
            printError('Неверный город')
        }else if (e?.response?.status === 401) {
            printError('Неверный или не указан токен')
        } else {
             printError(e.message)
        }
    }
}

const initCLI = () => {
    const args = getArgs(process.argv)

    if (args.h) {
        return printHelp()
    }
    if (args.s) {
        return saveConfigFields('city', args.s)
    }
    if (args.t) {
        return saveConfigFields('token', args.t)
    }

    getForecast();
}

initCLI();