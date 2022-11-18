function simpleClock() {
  const days = new Date();
  const hours = String(days.getHours()).padStart(2, "0");
  const minutes = String(days.getMinutes()).padStart(2, "0");
  const seconds = String(days.getSeconds()).padStart(2, "0");

  const clock = document.querySelector("#clock");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

simpleClock();
setInterval(simpleClock, 1000);
