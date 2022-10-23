const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoUl = document.querySelector("#todo-ul");

let localArray = [];

function deleteTodo(event) {
  const li = event.target.parentElement;
  const newArray = localArray.filter(function filtering(element) {
    return element.id !== parseInt(li.id);
  });
  localArray = newArray;
  setLocal();
  li.remove();
}

function forId(userTodo) {
  const todoObject = {
    txt: userTodo,
    id: Date.now(),
  };
  localArray.push(todoObject);
  painting(todoObject);
  setLocal();
}

function painting(todoObject) {
  const todoLI = document.createElement("li");
  const todoSpan = document.createElement("span");
  const todoButton = document.createElement("button");
  todoButton.addEventListener("click", deleteTodo);

  todoLI.id = todoObject.id;
  todoSpan.innerText = todoObject.txt;

  todoButton.innerText = "❌";
  todoUl.appendChild(todoLI);
  todoLI.appendChild(todoSpan);
  todoLI.appendChild(todoButton);
}

function todoList() {
  const userTodo = todoInput.value;
  todoInput.value = "";

  forId(userTodo);
}

function prevent(event) {
  event.preventDefault();
  todoList();
}

function setLocal() {
  const setLocalItem = window.localStorage.setItem(
    "todolist",
    JSON.stringify(localArray)
  );
}

todoForm.addEventListener("submit", prevent);

function getLocal() {
  localArray = JSON.parse(window.localStorage.getItem("todolist"));

  localArray.forEach(painting);
}

const localForIf = window.localStorage.getItem("todolist");

if (localForIf !== null) {
  getLocal();
}
