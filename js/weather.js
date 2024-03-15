const iconElement = document.querySelector('.c-weather__icon');
const tempElement = document.querySelector('.c-weather__temperature-value p');
const descElement = document.querySelector('.c-weather__temperature-description p');

// App data
const weather = {};
weather.temperature = {
    unit: 'celsius',
};

// Change to 'F' for Fahrenheit
let tempUnit = 'C';

const KELVIN = 273.15;
// Use your own key for the Weather, Get it here: https://openweathermap.org/
const key = 'cde9d4924d26b9fdb2ac317e9561d42b';

// Set Position function
setPosition();

function setPosition(position) {
    // Here you can change your position
    // You can use https://www.latlong.net/ to get it! (I use San Francisco as an example)
    let latitude = 43.359891;
    let longitude = -2.995812;

    getWeather(latitude, longitude);
}

// Get the Weather data
function getWeather(latitude, longitude) {
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    // console.log(api);

    fetch(api)
        .then(res => res.json())
        .then(data => {
            let celsius = Math.floor(data.main.temp - KELVIN);
            weather.temperature.value = (tempUnit == 'C') ? celsius : (celsius * 9/5) + 32;
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
        })
        .then(() => displayWeather());
}

// Display Weather info
function displayWeather() {
    iconElement.innerHTML = `<img src="icons/Nord/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span class="darkfg">${tempUnit}</span>`;
    descElement.innerHTML = weather.description;
}
