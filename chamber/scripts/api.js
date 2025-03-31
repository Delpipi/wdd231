//For production
const url = '/wdd231/chamber/data/member.json';

//For local test
//const url = '/chamber/data/member.json';

//Current weather data
//coordinates of Abidjan 5.3291365136297655, -4.0242969593726
const lat = 5.329;
const long = -4.024;

const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b2b6b51c97fa9c1b7812fbdac6afa7ea`;
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}4&lon=${long}&appid=b2b6b51c97fa9c1b7812fbdac6afa7ea`;

//MEMBER OF LOCAL BUSINESS API
export async function getMembersList() {
    //console.log("Get list of members");
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.table(data.members);
            return data.members;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error();
    }
}

export async function getAllGoldAndSilverMembers() {
    console.log("Get All Gold And Silver Members");
    const members = await getMembersList();
    const goldAndSilverMembers = members.filter(member => member.level === "gold" || member.level === "silver");
    return goldAndSilverMembers;
}

//WEATHER AND FORECAST API
export async function getCurrentWeatherData() {
    //console.log("Get current weather data");
    try {
        const response = await fetch(urlWeather);
        if (response.ok) {
            const data = await response.json();
            //console.table(data);
            return data;
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.error(error);
    }

}

export async function getForecastDaysWeaterData() {
    //console.log("Get forecast days weather data");
    try {
        const response = await fetch(urlForecast);
        if (response.ok) {
            const data = await response.json();
            //console.table(data.list);
            return data.list;
        } else {
            throw Error(awaitresponse.text())
        }
    } catch (error) {
        console.error(error);
    }
}