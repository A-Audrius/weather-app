

const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "5e5d0d1ef34172317a498ab696fe5bd3"
}
let optionValue = document.querySelector('.pack');

function getWeather() {
    const city = document.getElementById('city').value;
    fetch(`${param.url}weather?id=${city}&units=metric&APPID=${param.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
}


function showWeather(data) {

            console.log(data);
        document.querySelector('.degree').innerHTML = `${Math.round(data.main.temp)}&deg;C`;
        document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
        document.querySelector('.features div').innerHTML = `<img src= "https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        document.querySelector('.pressure div').textContent = ` Pressure ${data.main['pressure']} hPa`;
        document.querySelector('.wind-direction div').innerHTML = ` Wind direction ${data.wind['deg']}&deg;`;
        document.querySelector('.features1 div').textContent = ` Wind ${data.wind['speed']} m/s`;
}


document.querySelector('.btn-primary').onclick = () => {
getWeather();

}





