import { getAllGoldAndSilverMembers, getCurrentWeatherData, getForecastDaysWeaterData } from "./api.js";
import { kelvinToFahrenheit, getDateTime, getWeekDateName, capitalizeWords } from "./utility.js";

//Get DOM element
const iconBaseUrl = 'https://openweathermap.org/img/wn';
const currentWeather = document.querySelector('#currentWeather');
const weatherForecast = document.querySelector('#weatherForecast');
const goldOrSilverMembers = document.querySelector('#gold-or-silvermembers-block');

//======== Fetch current weather data from api ======
async function apiFetchWeather() {
    try {
        let currentWeatherData = await getCurrentWeatherData();
        displayWeatherData(currentWeatherData);
    } catch (error) {
        console.error(error);
    }
}

function displayWeatherData(weatherData) {
    const temp = kelvinToFahrenheit(weatherData.main.temp);
    const temp_max = kelvinToFahrenheit(weatherData.main.temp_max);
    const temp_min = kelvinToFahrenheit(weatherData.main.temp_min);
    const humidity = weatherData.main.humidity;
    const desc = capitalizeWords(weatherData.weather[0].description);
    const sunrise = getDateTime(weatherData.sys.sunrise);
    const sunset = getDateTime(weatherData.sys.sunset);
    const iconSrc = `${iconBaseUrl}/${weatherData.weather[0].icon}.png`;

    currentWeather.innerHTML = `
        <div class="current-weather card-body">
            <img src="${iconSrc}" srcset="${iconSrc} 1x" srcset="${iconSrc.replace('.png', '@2x.png')} 2x" alt="weather icon">
            <ul>
                <li><strong>${Math.round(temp)}</strong>&deg;F</li>
                <li>${desc}</li>
                <li>High: ${Math.round(temp_max)}&deg;</li>
                <li>Low: ${Math.round(temp_min)}&deg;</li>
                <li>Humidity: ${humidity}%</li>
                <li>Sunrise: ${sunrise}</li>
                <li>Sunset: ${sunset}</li>
            </ul>
        </div>
    `;
}

//====== Fetch gold or silver members from api ========
async function apiFetchGoldAndSilverMembers() {
    try {
        const goldAndSilverMembers = await getAllGoldAndSilverMembers();
        displayGoldOrSilverMembers(goldAndSilverMembers);
    } catch (error) {
        console.error(error);
    }
}

function displayGoldOrSilverMembers(members) {
    let goldOrSilvermembersList = [];

    while (goldOrSilvermembersList.length < 3) {
        let index = Math.floor(Math.random() * (members.length - 1));
        let randomMember = members[index];
        if (!goldOrSilvermembersList.includes(randomMember)) {
            goldOrSilvermembersList.push(randomMember);
        }
    }

    goldOrSilverMembers.innerHTML = goldOrSilvermembersList.map(member => builGoldOrSilverMember(member)).join('');
}

function builGoldOrSilverMember(member) {
    return `
    <section class="card">
        <div class="card-header">
            <h4>${member.name}</h4>
            <p>Level: <strong>${member.level}</strong></p>
        </div>
        <div class="card-body">
            <img src="${member.image}" alt="${member.name}" loading="lazy">
                <ul>
                    <li><strong>Address: </strong>${member.address}</li>
                    <li><strong>Phone: </strong>${member.phone}</li>
                    <li><strong>URL: </strong><a href="${member.website}"
                        target="_blank">${member.website}</a></li>
                </ul>
        </div>
    </section >
    `;
}

//========= Fetch forecast days weather data =========
async function apiFecthForecast() {
    try {
        const forecastDaysWeaterData = await getForecastDaysWeaterData();
        displayForecastDaysTemperature(forecastDaysWeaterData);
    } catch (error) {
        console.error(error);
    }
}

function displayForecastDaysTemperature(forecastData) {
    /*  For each day we have forecast each 3 hours 
     so will take only the first occurence to avoid repeatation */
    let forecastList = [];
    let weekDays = new Set();

    for (let i = 0; i < forecastData.length; i++) {

        const weekday = getWeekDateName(forecastData[i].dt_txt);

        if (!weekDays.has(weekday)) {
            forecastList.push(buildForecast(forecastData[i]));
            weekDays.add(weekday);
        }

        if (forecastList.length === 3) {
            break;
        }
    }

    weatherForecast.innerHTML = forecastList.join('');
}

function buildForecast(forecast) {
    const weekday = getWeekDateName(forecast.dt_txt);
    const temp = kelvinToFahrenheit(forecast.main.temp);
    return `<li>${weekday}: <strong>${Math.round(temp)}&deg;F</strong></li>`;
}

apiFetchWeather();
apiFecthForecast();
apiFetchGoldAndSilverMembers();