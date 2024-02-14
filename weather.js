

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



// fetch('http://api.openweathermap.org/data/2.5/weather?q=Vilnius&appid=5e5d0d1ef34172317a498ab696fe5bd3')
//     .then(function (resp) {return resp.json() })
//     .then(function (data){
//         console.log(data);
//         document.querySelector('.package-name').textContent = data.name;
//         document.querySelector('.degree').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
//         document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
//         // document.querySelector('.features li').innerHTML = '<img src= "https://openweathermap.org/img/wn/' + data.weather[0]['icon'] + '@2x.png">';
//         document.querySelector('.features li').innerHTML = `<img src= "https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
//         document.querySelector('.features1 li').textContent = ' Wind ' + data.wind['speed'] +  ' m/s';
//     })
//     .catch(function () {

// });

function showWeather(data) {

            console.log(data);
        document.querySelector('.degree').innerHTML = `${Math.round(data.main.temp)}&deg;C`;
        document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
        document.querySelector('.features li').innerHTML = `<img src= "https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        document.querySelector('.pressure li').textContent = ` Pressure ${data.main['pressure']} hPa`;
        document.querySelector('.wind-direction li').innerHTML = ` Wind direction ${data.wind['deg']}&deg;`;
        document.querySelector('.features1 li').textContent = ` Wind ${data.wind['speed']} m/s`;
}


document.querySelector('.button-primary').onclick = () => {
getWeather();

// document.querySelector('.city').onchange = getWeather;
}

































// document.getElementById('B1').onclick =  function () {
//     console.log(this);
//     this.innerHTML += '0';
// }


// document.getElementById('B1').addEventListener('click', function(){
//     console.log(this);
//     this.innerHTML += '0';
// });

// document.getElementById('B1').onclick = f1;
// document.getElementById('B1').addEventListener('click', f1);
//  function f1(){
//     console.log(this);
//     this.innerHTML += '0';
// }
// f1();

// document.querySelector('.s-1').addEventListener('change', f2);

//     function f2() {
//         console.log(this);
//         document.querySelector('.out-2').textContent = this.value;
//     }

//     f2.apply(document.querySelector('.s-1'));

// function f4() {
//         console.log(this);
//         this.innerHTML += '0';
// }

// document.getElementById('B1').addEventListener('click', function() {
//     f4.apply(document.querySelector('.btn'));
// });
