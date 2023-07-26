// simpleClock 함수는 현재 시간을 가져와서 HTML 요소에 표시하는 역할을 합니다.
function simpleClock() {
  // 현재 날짜와 시간을 가져오는 객체를 생성합니다.
  const days = new Date();

  // 현재 시간, 분, 초를 가져옵니다. 만약 한 자리 숫자라면 앞에 '0'을 붙여서 두 자리로 만듭니다.
  const hours = String(days.getHours()).padStart(2, "0");
  const minutes = String(days.getMinutes()).padStart(2, "0");
  const seconds = String(days.getSeconds()).padStart(2, "0");

  // clock 요소를 선택합니다.
  const clock = document.querySelector("#clock");

  // clock 요소에 현재 시간을 표시합니다.
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 페이지가 로드될 때 simpleClock 함수를 한 번 호출하여 초기 시간을 설정합니다.
simpleClock();

// 1초(1000밀리초)마다 simpleClock 함수를 호출하여 시계를 갱신합니다.
setInterval(simpleClock, 1000);
