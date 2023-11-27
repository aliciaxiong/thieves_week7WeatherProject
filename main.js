console.log('test')

// Using the Open Weather API create a weather application that displays the High, Low, Forecast and Humidity using JavaScript.
// You will need to get your API from openweathermap.org. Sign up for a new account, and you will be given an API key which will authenticate and allow you access to the data.
// (Creative freedom is encouraged here)
// You will possibly need to change the weather data from Kelvin to Fahrenheit using this formula (Depending on the API endpoint you are accessing)
// (32K − 273.15) × 9/5 + 32 = -402.1°F
// You can add a zip code to your project if you wish (not a strict requirement).
// Once the project is complete, commit the project to github and submit the github repository link to the assignment.

//api key: {298e40fafc6d5166ae10f3bd6460d415}
//json link: https://openweathermap.org/current#name

const form = document.querySelector('form');
const table = document.querySelector('.weather');

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const data_input = (form).querySelector('input').value 
    w_data(data_input)
})

const w_data = async (city) => {
    const apiKey = '20f89659bf13870895a78b450742df46';
    const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const data = await response.json();
    displayWeather(data);
}

const tempConversion = (kelvin) => {
    return (kelvin - 273.15) * 9/5 + 32
}

const displayWeather = (weather) => {
    table.innerHTML = "";
    
    const cityName = document.createElement('tr')
    cityName.innerHTML = `<td> City: </td> <td>${weather.name}</td>`
    table.appendChild(cityName)

    const rowPressure = document.createElement('tr')
    rowPressure.innerHTML = `<td> Pressure: </td> <td>${weather.main.pressure} </td>`
    table.appendChild(rowPressure)

    const rowTemp = document.createElement('tr')
    rowTemp.innerHTML = `<td> Temperature: </td> <td>${tempConversion(weather.main.temp)}°F </td>`
    table.appendChild(rowTemp)

    const rowWindSpeed = document.createElement('tr')
    rowWindSpeed.innerHTML = `<td> Wind Speed: </td> <td>${weather.wind.speed}</td>`
    table.appendChild(rowWindSpeed)

    const rowHumidity = document.createElement('tr')
    rowHumidity.innerHTML = `<td> Humidity: </td> <td> ${weather.main.humidity}%</td>`
    table.appendChild(rowHumidity)

    const rowVisibility = document.createElement('tr')
    rowVisibility.innerHTML = `<td> Visibility: </td> <td> ${weather.visibility}</td>`
    table.appendChild(rowVisibility)
}


