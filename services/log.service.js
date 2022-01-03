import chalk from 'chalk';
import dedent from 'dedent-js'

const getIcon = (icon) => {
	switch (icon.slice(0, -1)) {
		case '01':
			return '☀️';
		case '02':
			return '🌤️';
		case '03':
			return '☁';
		case '04':
			return '☁';
		case '09':
			return '🌧️';
		case '10':
			return '🌦️';
		case '11':
			return '🌩️';
		case '13':
			return '❄️';
		case '50':
			return '🌫️';
	}
};

const printError = err => {
    console.log(`${chalk.bgRed('ERROR')} ${err}`)
}

const printSuccess = message => {
    console.log(`${chalk.bgGreen('SUCCESS')} ${message}`)
}

const printHelp = () => {
    console.log(
        dedent`
            ${chalk.bgCyan(`HELP`)}
            Без параметров - вывод погоды
            -s [CITY] - установка города
            -h - помощь
            -t [API_KEY] - сохранение токена
        `
    )
}

const printWeatherForecast = (forecast) => {
    const {
        name,
        weather,
        main: {temp, feels_like, humidity},
        wind: {speed}
    } = forecast;
    const {icon, description } = weather[0];

    console.log(
            dedent`
            ${chalk.bgYellowBright('WEATHER')} ${name}
            ${getIcon(icon)} ${description}
            Temperature: ${Math.round(temp)}ºC , (feels like ${Math.round(feels_like)}ºC)
            Humidity: ${humidity}%
            Wind speed: ${Math.round(speed)} m/ps
        `
    )
}

export { printSuccess, printHelp, printError, printWeatherForecast }