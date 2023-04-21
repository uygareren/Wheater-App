const input = document.getElementById("search-input");
const searchbtn = document.getElementById("searchBtn");
const image = document.getElementById("image");
const celcius = document.getElementById("celcius");
const locationText = document.getElementById("location");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const result = document.querySelector(".result");

const fetchApi = async(city) => {
    const api_key = "0f803f37a03fbe15722407f3c92b53ed";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const response = await fetch(url);
    const res = await response.json();
    return res;

}

searchbtn.addEventListener("click", function(){
    var inputValue = input.value
    locationText.textContent = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);

    const response = fetchApi(inputValue);
    var weatherCondition;

    response.then(data => {
        result.style.display = "block"

        wind.textContent = data.wind.speed + " km/h";
        humidity.textContent = data.main.humidity + "%";
        celcius.innerHTML = Math.round(data.main.temp - 273) + "°C";
        weatherCondition = data.weather[0].main
        console.log(weatherCondition)
      
        switch(weatherCondition){
          case 'Clouds':
            image.src = "./Images/cloud.png";
            break;
          case 'Clear':
            image.src = "./Images/clear.png";
            break;
          case 'Rain':
            image.src = "./Images/rain.png";
            break;
          case 'Mist':
            image.src = "./Images/mist.png";
            break;
          case 'Snow':
            image.src = "./Images/snow.png";
            break;
        }
      });

      input.value = "";
      
})
