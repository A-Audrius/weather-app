

key = "5e5d0d1ef34172317a498ab696fe5bd3";


let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");

//Function to fetch weather details from api and display them
let getWeather = () => {
  let cityValue = cityRef.value;
  //If input field is empty
  if (cityValue.length == 0) {
    result.innerHTML = `<h6 class="msg error ">Please enter a city name</h6>`;
  }
  //If input field is NOT empty
  else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
    //Clear the input field
    cityRef.value = "";
    fetch(url)
      .then((resp) => resp.json())
      //If city name is valid
      .then((data) => {
        console.log(data);
        console.log(data.weather[0].icon);
        console.log(data.weather[0].main);
        console.log(data.weather[0].description);
        console.log(data.name);
        console.log(data.main.temp_min);
        console.log(data.main.temp_max);


        
        const arrowIcon = document.querySelector(".material-symbols-outlined");
        const degree = `${data.wind['deg']}`;

        document.querySelector('.city').textContent = (data.name);
        document.querySelector('.degree').innerHTML = `${Math.round(data.main.temp)}&deg;C`;
        document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
        document.querySelector('.features div').innerHTML = `<img class="icon" src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">`;
        document.querySelector('.pressure div').textContent = ` Pressure ${data.main['pressure']} hPa`;
        document.querySelector('.wind-direction').innerHTML = 'Wind direction';
        document.querySelector('.features1 div').textContent = ` Wind ${data.wind['speed']} m/s`;

        arrowIcon.style.transform = `rotate(${degree}deg)`;

      })
      
      //If city name is NOT valid
      .catch(() => {
        result.innerHTML = `<h3 class="msg">City not found</h3>`;
        
      });
  }
};
searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);





