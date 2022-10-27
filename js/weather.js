const API_KEY = "appid=d1595b0c10a7b2944311a6c54d221929";

function positions(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&${API_KEY}&units=metric`;
  //맨 뒤에 metric으로 섭씨 온도로 바꿔줬다.
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      city.innerText = `${data.name}`;
    });
}

function onError() {
  alert("Can't find your location.");
}

navigator.geolocation.getCurrentPosition(positions, onError);
