# tiny_app_weather_CLI
​
:gem:​ Display current day forecast in command line.

## Example

```shell
$ node weather.js
WEATHER Краснодарский край
☁ небольшой дождь
Temperature: 6ºC , (feels like 1ºC)
Humidity: 59%
Wind speed: 10 m/ps

```
You can also specify which unit to use (`-f` for Fahrenheit, `-c` for Celsius):

```shell
$  node weather.js
Now:      ☁ (9ºC/61%)
Today:    ☔ (5-9ºC)
Tomorrow: ⛅ (1-11ºC)
```

## Notes
First, specify a city and a token
Check [OpenWeatherMap's doc](https://openweathermap.org)

## References
- OpenWeatherMap API
