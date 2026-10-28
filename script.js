const apikey = "1db9dbf353ecad475125a331b5e4e3e9";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=1db9dbf353ecad475125a331b5e4e3e9&units=metric

async function checkweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}&units=metric`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./clouds.png"
    }

    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./clear.png"
    }

    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "./Snow.png"
    }

    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./rain.png"
    }

    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./mist.png"
    }

    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./drizzle.png"
    }

    else{
        weatherIcon.src = "./clouds.png"
    }

}


searchbtn.addEventListener("click", () => {
  checkweather(searchbox.value);
});
