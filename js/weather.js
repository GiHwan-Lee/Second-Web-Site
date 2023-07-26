// OpenWeatherMap API의 키입니다.
const API_KEY = "appid=d1595b0c10a7b2944311a6c54d221929";

// 사용자의 위치 정보를 이용해 해당 위치의 날씨 정보를 가져옵니다.
function positions(position) {
  // 위도 정보를 가져옵니다.
  const lat = position.coords.latitude;
  // 경도 정보를 가져옵니다.
  const lon = position.coords.longitude;
  // API 요청 URL을 만듭니다.
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&${API_KEY}&units=metric`;
  //맨 뒤에 metric으로 섭씨 온도로 변경

  // API 요청을 보냅니다.
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // 날씨 정보와 도시 정보를 페이지에 표시합니다.
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      city.innerText = `${data.name}`;
    });
}

// 위치 정보를 가져오는데 실패했을 때 실행되는 함수입니다.
function onError() {
  alert("Can't find your location.");
}

// 사용자의 위치 정보를 가져옵니다.
navigator.geolocation.getCurrentPosition(positions, onError);
