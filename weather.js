#!/usr/bin/env node
import { getArgs } from './helpers/args.js'
import {printHelp, printSuccess, printError} from "./services/log.service.js";
import {saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";
import {getWeather} from "./services/api.service.js";

const saveToken = async (token) => {
    if (!token.length) {
        printError('Токен не передан')
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token ) ;
        printSuccess('Токен сохранен');
    } catch (e) {
        printError(e.message)
    }
}

const initCLI = () => {
    const args = getArgs(process.argv)
    console.log(args, 'args')
    if (args.h) {
        printHelp()
    }
    if (args.s) {
        // city
    }
    if (args.t) {
        return saveToken(args.t)
    }

    // weather
    getWeather('moscow')
}

initCLI();