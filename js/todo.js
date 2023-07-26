// HTML 요소들을 DOM에서 선택합니다.
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoUl = document.querySelector("#todo-ul");

// todo 입력 필드의 크기를 placeholder의 길이에 맞게 조정합니다.
todoInput.setAttribute("size", todoInput.getAttribute("placeholder").length);

// 로컬 스토리지에서 가져온 할 일 목록을 저장하는 배열입니다.
let localArray = [];

// 할 일 항목을 삭제하는 함수입니다.
function deleteTodo(event) {
  const li = event.target.parentElement;
  const newArray = localArray.filter((element) => element.id !== li.id);
  localArray = newArray;
  setLocal();
  li.remove();
}

// 로컬 스토리지에 ID를 부여하여 할 일 항목을 추가하는 함수입니다.
function forId(userTodo) {
  const todoObject = {
    txt: userTodo,
    id: Date.now(),
  };
  localArray.push(todoObject);
  painting(todoObject);
  setLocal();
}

// 할 일 항목을 화면에 렌더링하는 함수입니다.
function painting(todoObject) {
  const todoLI = document.createElement("li");
  todoLI.classList = "todo-Li";
  const todoSpan = document.createElement("span");
  todoSpan.classList = "todo-text";
  const todoButton = document.createElement("button");
  todoButton.addEventListener("click", deleteTodo);

  todoLI.id = todoObject.id;
  todoSpan.innerText = todoObject.txt;

  todoButton.innerText = "❌";
  todoUl.appendChild(todoLI);
  todoLI.appendChild(todoSpan);
  todoLI.appendChild(todoButton);
}

// 사용자가 입력한 할 일(userTodo)를 처리하고, forId 함수를 통해 localArray에 추가하는 함수입니다. 이 함수는 사용자의 입력을 받아 처리 후, 입력 필드를 초기화합니다.
function todoList() {
  const userTodo = todoInput.value;
  todoInput.value = "";

  forId(userTodo);
}

// 제출 이벤트가 발생할 때 페이지 새로고침을 방지하고 todoList 함수를 호출하는 함수입니다.
function prevent(event) {
  event.preventDefault();
  todoList();
}

// localArray를 로컬 스토리지에 저장하는 함수입니다.
function setLocal() {
  const setLocalItem = window.localStorage.setItem(
    "todolist",
    JSON.stringify(localArray)
  );
}

// 할 일 추가 form에 제출(submit)하는 이벤트 리스너입니다. 이벤트 발생 시 prevent 함수가 호출됩니다.
todoForm.addEventListener("submit", prevent);

// 로컬 스토리지에서 할 일 목록을 가져와 화면에 렌더링하는 함수입니다.
function getLocal() {
  localArray = JSON.parse(window.localStorage.getItem("todolist"));

  localArray.forEach(painting);
}

// 페이지가 로드될 때 로컬 스토리지에 할 일 목록이 있는지 확인하고, 있다면 화면에 렌더링합니다.
const localForIf = window.localStorage.getItem("todolist");
if (localForIf !== null) {
  getLocal();
}
