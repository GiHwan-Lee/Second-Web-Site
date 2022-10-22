const divId = document.querySelector("#inputBox");
const inputBox = document.querySelector("#inputBox input");
const button = document.querySelector("#inputBox button");
const form = document.querySelector("#form");
const h2 = document.querySelector("#h2");

function LogInButton(event) {
  event.preventDefault();
  inputBox.classList.add("hidden");
  button.classList.add("hidden");
  const userName = inputBox.value;
  h2.innerText = `Hello ${userName}`;
  window.localStorage.setItem("username", userName);
}

function localSet() {
  const userName2 = window.localStorage.getItem("username");
  h2.innerText = `Hello ${userName2}`;
  inputBox.classList.add("hidden");
  button.classList.add("hidden");
}

const userName3 = window.localStorage.getItem("username");

if (userName3 === null) {
  form.addEventListener("submit", LogInButton);
} else {
  localSet();
}
